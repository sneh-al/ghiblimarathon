import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import Title from "./Title";

const Hero = () => {
  return (
    <section>
      <div className="hero-icons absolute aspect-video size-6 bg-red-400"></div>
      <div className="hero-icons absolute aspect-video size-6 bg-red-500"></div>
      <div className="hero-icons absolute aspect-video size-6 bg-red-400"></div>
      <div className="hero-icons absolute aspect-video size-6 bg-red-600"></div>
      <div className="hero-icons absolute aspect-video size-6 bg-red-600"></div>
      <ContainerScroll titleComponent={<Title />}>
        <div className="">
          <Image src="/logo.svg" alt="logo" fill />
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Hero;
