import React from "react";


interface CalendarProps {
  month?: string;
  callsInfo?: string;
  activeDay?: number;
}

export const Calendar: React.FC<CalendarProps> = ({
  month = "Setembro",
  callsInfo = "3 chamadas • Qui, 11",
  activeDay = 11,
}) => {
  const days = [
    { num: 8, name: "Seg" },
    { num: 9, name: "Ter" },
    { num: 10, name: "Qua" },
    { num: 11, name: "Qui" },
    { num: 12, name: "Sex" },
    { num: 13, name: "Sab" },
  ];

  return (
    <div className="flex flex-wrap justify-center lg:justify-center items-center gap-4">


    <div
      className="
         max-w-[380px] bg-white rounded-[2rem] p-6 shadow-[0_10px_25px_rgba(0,0,0,0.1)]
        max-[480px]:p-4 max-[480px]:rounded-[1.5rem]
        max-[350px]:p-3
       
      "
    >
     
      {/* Header */}
      <div
        className="
          flex flex-col justify-between items-center mb-6
          max-[380px]:flex-col max-[350px]:items-start
        "
      >
        <div
          className=" 
            text-[1.875rem] font-bold leading-[1.2]
            max-[480px]:text-[1.5rem]
          "
        >
          Próximas<br />Reuniões
        </div>

        <div
          className="
            bg-[#e9eeea] border border-[#d0d0ce] rounded-full
            px-5 py-3 cursor-pointer shadow-sm flex items-center
            hover:bg-[#dededd] transition-colors
            max-[480px]:px-3 max-[480px]:py-2
            max-[350px]:mt-2
          "
        >
          <span
            className="
              text-base font-medium mr-2
              max-[480px]:text-[0.9rem]
            "
          >
            {month}
          </span>

          {/* Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Calls Info */}
      <div className="flex justify-center items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.654 1.328a.678..."></path>
        </svg>

        <span
          className="
          text-sm
            max-[480px]:text-[0.75rem]
          "
        >
          {callsInfo}
        </span>
      </div>

      {/* Days Navigation */}
      <div className="relative">
        <div
          className="
            bg-white rounded-[16px]
            px-2 py-3 flex justify-between items-start mb-5
          "
        >
          {days.map((day) => (
            <div key={day.num} className="flex flex-col items-center w-full">
              <div
                className={`
                  flex justify-center items-center w-[40px] h-[28px]
                  rounded-t-[20px] pt-[5px]
                  text-[1.2rem] font-semibold
                  transition-colors
                  ${
                    day.num === activeDay
                      ? "bg-[#f0ff7a]"
                      : "hover:bg-[#f8f8f8]"
                  }
                  max-[480px]:w-[36px] max-[480px]:text-[1rem]
                  max-[350px]:w-[30px] max-[350px]:text-[0.9rem]
                `}
              >
                {day.num}
              </div>

              <div
                className={`
                  flex justify-center items-center w-[40px] h-[20px]
                  rounded-b-[20px]
                  text-[0.7rem] text-[#666]
                  transition-colors
                  ${
                    day.num === activeDay
                      ? "bg-[#f0ff7a]"
                      : "hover:bg-[#f8f8f8]"
                  }
                  max-[480px]:w-[36px] max-[480px]:text-[0.65rem]
                  max-[350px]:w-[30px] max-[350px]:text-[0.6rem]
                `}
              >
                {day.name}
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div
          className="
            flex justify-between w-full relative
            px-7 box-border
            max-[480px]:px-6
            max-[350px]:px-5
          "
        >
          <div
            className="
              absolute top-1/2 left-[32px] right-[32px]
              border-t-[1.5px] border-dashed border-[#d0d0ce]
              -translate-y-1/2
              max-[480px]:left-[28px] max-[480px]:right-[28px]
              max-[350px]:left-[24px] max-[350px]:right-[24px]
            "
          ></div>

          {days.map((day) => (
            <div
              key={day.num}
              className={`
                w-2 h-2 rounded-full z-[2]
                ${
                  day.num === activeDay
                    ? "bg-black"
                    : "bg-[#d0d0ce]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row">
      <svg className='lg:self-start rotate-90 lg:rotate-0' xmlns="http://www.w3.org/2000/svg" width="240" height="220" viewBox="20 110 220 230"> <path className="flow-dash" d=" M130 340 Q110 340, 110 310 L110 140 Q110 110, 130 110 L240 110 M110 310 L20 310 " fill="none" stroke="#db324b" stroke-width="3" stroke-dasharray="10 8" stroke-linecap="round" stroke-linejoin="round" /> </svg>
          <div className="flex flex-row lg:flex-col w-full justify-between  ">

          <span className="bg-white shadow-sm mt-2 px-4 py-1.5 justify-start rounded-xl">Carlos</span>
           <span className="bg-white shadow-sm px-2 py-1.5 justify-end rounded-xl">Andreza</span>
          </div>
    </div>
    </div>
  );
};
