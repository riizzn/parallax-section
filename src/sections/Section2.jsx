import gsap from "gsap";
import React from "react";

const Section2 = ({ scrollProgress }) => {
  const scale = gsap.utils.interpolate(0.8, 1, scrollProgress);
  const rotate = gsap.utils.interpolate(5, 0, scrollProgress);
  return (
    <div
      style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
      className="relative h-screen"
    >
      <img
        src="/images/pic2.jpg"
        alt="img"
        placeholder="blur"
        className="w-full h-full "
      />
    </div>
  );
};

export default Section2;
