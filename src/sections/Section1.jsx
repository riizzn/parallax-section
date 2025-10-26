import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Section1 = ({ scrollProgress }) => {
  // const secRef = useRef(null);

  // useGSAP(() => {
    const scale = gsap.utils.interpolate(1, 0.8, scrollProgress);
    const rotate = gsap.utils.interpolate(0, -5, scrollProgress);
  //   gsap.to(secRef.current, {
  //     scale: scale,
  //   });
  // },[scrollProgress]);
  return (
    <div
      // ref={secRef}
      style={{transform: `scale(${scale}) rotate(${rotate}deg)`  }  }
      className=" sticky top-0 h-screen bg-[#451010] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Scroll Perspective.</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <img
            src="/images/pic1.jpg"
            alt="img"
            placeholder="blur"
            className="w-full"
          />
        </div>
        <p>Transition</p>
      </div>
    </div>
  );
};

export default Section1;
