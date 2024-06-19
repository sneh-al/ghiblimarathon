"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
function Icon() {
  const ref = useRef(null);
  const isInView = useInView(ref, {});
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <path fill="#ff9" d="M0 0H1000V1000H0z"></path>
      <g fill="#ffd573">
        <path d="M1000 -50L0 -50 500 450z"></path>
        <path d="M550 500L1050 1000 1050 0z"></path>
        <path d="M-50 0L-50 1000 450 500z"></path>
        <path d="M0 1050L1000 1050 500 550z"></path>
      </g>
      <g fill="#ffaa4d">
        <path d="M1000 -133.3L0 -133.3 500 366.7z"></path>
        <path d="M633.3 500L1133.3 1000 1133.3 0z"></path>
        <path d="M-133.3 0L-133.3 1000 366.7 500z"></path>
        <path d="M0 1133.3L1000 1133.3 500 633.3z"></path>
      </g>
      <g fill="#ff8026">
        <path d="M1000 -216.7L0 -216.7 500 283.3z"></path>
        <path d="M716.7 500L1216.7 1000 1216.7 0z"></path>
        <path d="M-216.7 0L-216.7 1000 283.3 500z"></path>
        <path d="M0 1216.7L1000 1216.7 500 716.7z"></path>
      </g>
      <g fill="#F50">
        <path d="M1000 -300L0 -300 500 200z"></path>
        <path d="M800 500L1300 1000 1300 0z"></path>
        <path d="M-300 0L-300 1000 200 500z"></path>
        <path d="M0 1300L1000 1300 500 800z"></path>
      </g>
      <g fillOpacity="0.5">
        <path
          fill="#FE0"
          d="M0 707.1L0 292.9 292.9 0 707.1 0 1000 292.9 1000 707.1 707.1 1000 292.9 1000z"
        ></path>
        <g fill="#ffc800">
          <path d="M464.6 -242.5L-242.5 464.6 464.6 464.6z"></path>
          <path d="M535.4 464.6L1242.5 464.6 535.4 -242.5z"></path>
          <path d="M-242.5 535.4L464.6 1242.5 464.6 535.4z"></path>
          <path d="M535.4 1242.5L1242.5 535.4 535.4 535.4z"></path>
        </g>
        <g fill="#ffa200">
          <path d="M405.7 -301.4L-301.4 405.7 405.7 405.7z"></path>
          <path d="M594.3 405.7L1301.4 405.7 594.3 -301.4z"></path>
          <path d="M-301.4 594.3L405.7 1301.4 405.7 594.3z"></path>
          <path d="M594.3 1301.4L1301.4 594.3 594.3 594.3z"></path>
        </g>
        <g fill="#ff7b00">
          <path d="M346.8 -360.3L-360.3 346.8 346.8 346.8z"></path>
          <path d="M653.2 346.8L1360.3 346.8 653.2 -360.3z"></path>
          <path d="M-360.3 653.2L346.8 1360.3 346.8 653.2z"></path>
          <path d="M653.2 1360.3L1360.3 653.2 653.2 653.2z"></path>
        </g>
        <g fill="#F50">
          <path d="M287.9 -419.2L-419.2 287.9 287.9 287.9z"></path>
          <path d="M712.1 287.9L1419.2 287.9 712.1 -419.2z"></path>
          <path d="M-419.2 712.1L287.9 1419.2 287.9 712.1z"></path>
          <path d="M712.1 1419.2L1419.2 712.1 712.1 712.1z"></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
