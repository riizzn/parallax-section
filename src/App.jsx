import React, { useRef, useState } from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });
  });
  return (
    <main ref={containerRef} className="relative bg-black h-[200vh]">
      <Section1 scrollProgress={scrollProgress} />

      <Section2 scrollProgress={scrollProgress} />
    </main>
  );
};

export default App;
