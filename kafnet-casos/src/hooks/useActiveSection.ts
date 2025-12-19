import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      console.log(section)
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });

          /*
          const visible = entries.filter((e) => e.isIntersecting)

          if (visible.length === 0) {
            setActive(null);
            return;
          }
          */
        },
        {
          root: null,
          rootMargin:"-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);


   function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - headerHeight - 24,
      behavior: "smooth",
    });
  }


  return {
    active,
    scrollToSection
  };
}
