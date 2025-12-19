import React, { useEffect, useRef, useState } from "react";

type FormFields = {
  CONTACT_EMAIL: string;
  FIRSTNAME: string;
  LASTNAME: string;
  CONTACT_CF2: string; // Cargo
  COMPANYNAME: string;
  captchaText: string;
};

export const HeroForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const zcSpmRef = useRef<HTMLInputElement | null>(null);
  const captchaImgRef = useRef<HTMLImageElement | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [captchaId, setCaptchaId] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [fields, setFields] = useState<FormFields>({
    CONTACT_EMAIL: "",
    FIRSTNAME: "",
    LASTNAME: "",
    CONTACT_CF2: "",
    COMPANYNAME: "",
    captchaText: "",
  });

  const ZOHO_ACTION =
    "https://nevps-zgph.maillist-manage.com/weboptin.zc";

  // Captcha generator endpoint used in original markup (keeps same pattern)
  const CAPTCHA_GENERATE_URL =
    "https://campaigns.zoho.com/campaigns/CaptchaVerify.zc?mode=generate";

  useEffect(() => {
    // Load an initial captcha image on mount
    loadCaptcha();
    // ensure there is a hidden zc_spmSubmit input initially like original template
    if (formRef.current && !formRef.current.querySelector("#zc_spmSubmit")) {
      const inp = document.createElement("input");
      inp.type = "hidden";
      inp.id = "zc_spmSubmit";
      inp.name = "zc_spmSubmit";
      inp.value = "ZCSPMSUBMIT";
      zcSpmRef.current = inp as HTMLInputElement;
      formRef.current.appendChild(inp);
    }
 
  }, []);

    async function loadCaptcha() {
        try {
            const response = await fetch(
            `${CAPTCHA_GENERATE_URL}&_=${Date.now()}`,
            { method: "GET" }
            );

            const htmlText = await response.text();

            // Parse the HTML Zoho returns
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, "text/html");

            // Find the <img> Zoho embeds inside its HTML response
            const captchaImg = doc.querySelector("img");

            if (captchaImg && captchaImg.src && captchaImgRef.current) {
            captchaImgRef.current.src = captchaImg.src;  // <-- THIS is the real CAPTCHA
            } else {
            console.error("Captcha image not found in Zoho response");
            }
        } catch (err) {
            console.error("Failed to load captcha", err);
        }
}



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name as keyof FormFields]: value }));
  }

  function showOptimisticSuccess() {
    setShowOverlay(true);
    setShowSuccessPopup(true);
  }

  function closeSuccessPopup() {
    setShowOverlay(false);
    setShowSuccessPopup(false);
  }

  function removeZcSpmSubmit() {
    if (!formRef.current) return;
    const el = formRef.current.querySelector("#zc_spmSubmit");
    if (el) el.parentElement?.removeChild(el);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    // Basic HTML5 constraint validation check
    if (!formRef.current.checkValidity()) {
      // show browser built-in validation UI
      formRef.current.reportValidity();
      return;
    }

    if (submitting) return; // prevent double submits
    setSubmitting(true);

    removeZcSpmSubmit();

 
    try {
      setTimeout(() => {
        formRef.current?.submit();
        showOptimisticSuccess();
        setSubmitting(false);
        // reload captcha for the next potential submission
        loadCaptcha();
        // clear captcha input
        setFields((prev) => ({ ...prev, captchaText: "" }));
      }, 50);
    } catch (err) {
      console.error("Submit error", err);
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Optional overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onContextMenu={(e) => e.preventDefault()}
        />
      )}

      {/* Success popup */}
      {showSuccessPopup && (
        <div className="fixed z-50 left-1/2 top-24 transform -translate-x-1/2 w-[90%] md:w-[800px] bg-white border border-gray-200 shadow-lg p-8">
          <button
            aria-label="Fechar"
            className="absolute -right-4 -top-4"
            onClick={closeSuccessPopup}
          >
            <img
              src="https://ma.zoho.com/images/videoclose.png"
              alt="fechar"
              className="w-8 h-8"
            />
          </button>

          <div id="zcOptinSuccessPanel">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Obrigado por realizar a assinatura
            </h3>
            <p className="text-sm text-gray-700">
              Recebemos sua solicitação. Verifique sua caixa de entrada para
              confirmar (se aplicável).
            </p>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto ">
        <form
          ref={formRef}
          id="zcampaignOptinForm"
          method="POST"
          action={ZOHO_ACTION}
          target="_blank"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Hidden Zoho inputs (preserved) */}
          <input type="hidden" id="signupTmplName" value="large_form_2" />
          <input type="hidden" value="2" id="recapThemeOptin" />
          <input type="hidden" id="orgNameFull" value="Kafnet" />
          <input type="hidden" id="recapTheme" value="2" />
          <input type="hidden" id="isRecapIntegDone" value="false" />
          <input type="hidden" id="recapMode" value="1505563000006918003" />
          <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
          <input type="hidden" id="scriptless" name="scriptless" value="yes" />
          <input
            type="hidden"
            id="zc_spmSubmit"
            name="zc_spmSubmit"
            value="ZCSPMSUBMIT"
          />
          <input type="hidden" name="captchaId" value={captchaId} />

          <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
          <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z4b1b72056a7efbe58f1a671c8b955e0a00887fb3bbde72f601c2a06b67538db1" />
          <input type="hidden" name="zx" id="cmpZuid" value="13361c566" />
          <input type="hidden" name="zcvers" value="3.0" />
          <input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION" />
          <input type="hidden" id="mode" name="mode" value="OptinCreateView" />

          {/* Error area (you can expand to show JS errors) */}
          <div id="errorMsgDiv" className="text-[#db324db] hidden">
            Corrija o(s) campo(s) marcado(s) abaixo.
          </div>

          {/* Fields */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <label className="flex flex-col">
              <span className="text-md font-medium">E-mail *</span>
              <input
                name="CONTACT_EMAIL"
                type="email"
                required
                maxLength={100}
                value={fields.CONTACT_EMAIL}
                onChange={handleChange}
                className="mt-1 p-4 border text-lg rounded-md bg-transparent"
                placeholder="seu@email.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-md font-medium">Nome *</span>
              <input
                name="FIRSTNAME"
                type="text"
                required
                maxLength={100}
                value={fields.FIRSTNAME}
                onChange={handleChange}
                className="mt-1 p-4 border text-lg rounded-md bg-transparent"
                placeholder="Nome"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-md font-medium">Sobrenome *</span>
              <input
                name="LASTNAME"
                type="text"
                required
                maxLength={50}
                value={fields.LASTNAME}
                onChange={handleChange}
                className="mt-1 p-4 border text-lg rounded-md bg-transparent"
                placeholder="Sobrenome"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-md font-medium">Cargo</span>
              <input
                name="CONTACT_CF2"
                type="text"
                maxLength={300}
                value={fields.CONTACT_CF2}
                onChange={handleChange}
                className="mt-1 p-4 border text-lg rounded-md bg-transparent"
                placeholder="Seu cargo"
              />
            </label>

            <label className="flex flex-col md:col-span-2">
              <span className="text-md font-medium">Empresa</span>
              <input
                name="COMPANYNAME"
                type="text"
                maxLength={100}
                value={fields.COMPANYNAME}
                onChange={handleChange}
                className="mt-1 p-4 text-lg border rounded-md bg-transparent"
                placeholder="Nome da empresa"
              />
            </label>
          </div>

          {/* Captcha area */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
                <img
                    ref={captchaImgRef}
                    alt="captcha"
                    className="h-12 w-auto border rounded"
                />
                <button
                    type="button"
                    onClick={() => loadCaptcha()}
                    className="text-md underline"
                >
                    Recarregar Captcha
                </button>
            </div>

            <div className="flex gap-2 items-center">
              <input
                id="captchaText"
                name="captchaText"
                value={fields.captchaText}
                onChange={handleChange}
                maxLength={100}
                placeholder="Captcha"
                className="p-4 border rounded-md text-lg flex-1 w-full bg-transparent"
                type="text"
                required
              />
           
            </div>
          </div>

          <div className="text-md flex text-white">* Campos obrigatórios</div>
 
            <button
              type="submit"
              id="zcWebOptin"
              name="SIGNUP_SUBMIT_BUTTON"
              className="px-4 py-1.5 text-[22px] font-bold bg-[#db324b] text-white text-transparent rounded-md disabled:opacity-60 m-0"
              disabled={submitting}
            >
              {submitting ? "Enviando..." : "Enviar"}
            </button>
       
          <input type="hidden" id="fieldBorder" value="" />
          <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="" />
          <input type="hidden" id="lD" name="lD" value="" />
          <input type="hidden" name="emailReportId" id="emailReportId" value="" />
          <input type="hidden" id="allCheckedListIds" name="oldListIds" value="" />
          <input type="hidden" id="zcld" name="zcld" value="" />
          <input type="hidden" id="zctd" name="zctd" value="114e4d59259f967a9" />
          <input type="hidden" id="document_domain" value="" />
          <input type="hidden" id="zc_Url" value="nevps-zgph.maillist-manage.com" />
          <input type="hidden" id="new_optin_response_in" value="0" />
          <input type="hidden" id="duplicate_optin_response_in" value="0" />
          <input type="hidden" id="isCaptchaNeeded" value="true" />
          <input type="hidden" id="superAdminCap" value="0" />
        </form>
      </div>
    </>
  );
};
