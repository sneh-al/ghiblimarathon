"use client";
import Image from "next/image";
import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  return (
    <section className="">
      <RoughNotationGroup show={true}>
        <article className="round-full grid place-content-center bg-secondary p-5 md:p-12">
          <div className="m-auto flex max-w-6xl flex-col gap-5 text-balance py-24 text-xl leading-loose text-secondary-foreground/70 md:py-44 md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[4rem]">
            <p>
              Founded in 1985 by{" "}
              <RoughNotation
                type="underline"
                color="red"
                order="1"
                iterations={3}
              >
                <span className="text-nowrap dark:text-background">
                  Hayao Miyazaki,
                </span>
              </RoughNotation>{" "}
              <RoughNotation
                type="underline"
                show={true}
                color="green"
                order="2"
              >
                <span className="text-nowrap dark:text-background">
                  Isao Takahata,
                </span>
              </RoughNotation>{" "}
              <RoughNotation
                type="underline"
                show={true}
                color="blue"
                order="3"
              >
                <span className="text-nowrap dark:text-background">
                  Toshio Suzuki,
                </span>
              </RoughNotation>{" "}
              and Studio Ghibli 🎬 is celebrated for its breathtaking animation
              and captivating stories. Each film, from whimsical wonders 🌟 to
              poignant tales 🌸, is a soulful masterpiece that touches the{" "}
              <RoughNotation type="box" show={true} color="red">
                <span className="text-nowrap dark:text-background">heart</span>
              </RoughNotation>{" "}
              .
            </p>
            <p>
              <RoughNotation type="circle" show={true} color="blue">
                <span className="text-nowrap dark:text-background">
                  Studio Ghibli
                </span>
              </RoughNotation>{" "}
              is one of the most acclaimed animation studios in the world, and
              the home of some of the most revered and beloved animated works to
              have ever graced the screen.
            </p>
          </div>
        </article>
        <article className="relative">
          <div className="round-full image sticky top-0 aspect-video overflow-hidden bg-background">
            <p className="m-auto w-fit">
              Image by:{" "}
              <a
                href="https://www.deviantart.com/sarafabrizi/art/GHIBLI-PARADE-452993594"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary underline"
              >
                SaraFabrizi
              </a>
            </p>
            <Image
              src="/ghibli_parade.webp"
              alt="ghibli_parade"
              className="round-full h-full w-full object-cover"
              width={2400}
              height={300}
              priority={false}
            />
          </div>
          <div className="round-full sticky top-0 -z-0 aspect-video overflow-hidden bg-background">
            <p className="m-auto w-fit">
              Image by:{" "}
              <a
                href="https://www.deviantart.com/mahmusx/art/Studio-Ghibli-700935582"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary underline"
              >
                mahmusx
              </a>
            </p>
            <Image
              src="/studio_ghibli.jpg"
              alt="ghibli_parade"
              className="round-full h-full w-full object-cover"
              width={2400}
              height={300}
              priority={false}
            />
            {/* </a> */}
          </div>
          <div className="round-full sticky mt-5 overflow-hidden bg-secondary p-5 md:p-12">
            <div className="m-auto flex max-w-6xl flex-col gap-5 text-balance py-24 text-xl leading-loose text-secondary-foreground/70 md:py-44 md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[4rem]">
              <p>
                We celebrate the magic of{" "}
                <RoughNotation type="box" show={true} color="blue">
                  <span className="text-nowrap dark:text-background">
                    Studio Ghibli 🌟
                  </span>
                </RoughNotation>{" "}
                by bringing together{" "}
                <RoughNotation type="underline" show={true} color="blue">
                  <span className="text-nowrap dark:text-background">fans</span>
                </RoughNotation>{" "}
                from around the globe. Dive into soulful stories, explore
                breathtaking animation 🎨, and connect with unforgettable
                characters 💖.
              </p>
            </div>
          </div>
        </article>
      </RoughNotationGroup>
    </section>
  );
};

export default About;
