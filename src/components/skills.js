import DotBox from "../assets/Dots.svg";
import HeroStyle from "../assets/HeroStyle1.svg";
import SkillsComponent from "./skillsComponent";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.fromTo(image, { scale: 0.1 }, { duration: 1, scale: 1 });

    return () => {
      tl.kill(); // kill the animation when component unmounts
    };
  }, []);

  const image4Ref = useRef(null);
  const image4RefAnime = () => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.fromTo(
      image4Ref.current,
      { scale: 0.1 },
      { duration: 1, scale: 1, delay: 0.1 }
    );
  };

  const image2Ref = useRef(null);
  const image2Anime = () => {
    gsap.fromTo(
      image2Ref.current,
      { opacity: 1, y: -50 },
      {
        opacity: 1,
        // x: -200,
        y: 30,
        duration: 0.5,
        // rotation: -360,
        ease: "power1.inOut",
        delay: 1,
        repeat: -1,
        yoyo: true,
      }
    );
  };

  const image5Ref = useRef(null);
  const image5RefAnime = () => {
    gsap.fromTo(
      image5Ref.current,
      {
        scale: 0,
        x: -250,
      },
      {
        duration: 1,
        rotation: 1080,
        repeat: -1,
        scale: 1,
        x: 20,
      }
    );
  };

  const image6Ref = useRef(null);
  const image6Anime = () => {
    gsap.fromTo(
      image6Ref.current,
      { x: -200 },
      {
        // x: -200,
        x: 0,
        duration: 0.5,
        // rotation: -360,
        ease: "power1.inOut",
        delay: 1,
        repeat: -1,
        yoyo: true,
      }
    );
  };

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);

  const boxAnime = () => {
    gsap.fromTo(
      box1.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: box1.current,
          // start: "top center",

          toggleActions: "restart pause resume",
        },
      }
    );
  };
  const box2Anime = () => {
    gsap.fromTo(
      box2.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: box2.current,
          // start: "top center",

          toggleActions: "restart pause resume",
        },
      }
    );
  };
  const box3Anime = () => {
    gsap.fromTo(
      box3.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: box3.current,
          // start: "top center",

          toggleActions: "restart pause resume",
        },
      }
    );
  };
  const box4Anime = () => {
    gsap.fromTo(
      box4.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: box4.current,
          // start: "top center",

          toggleActions: "restart pause resume",
        },
      }
    );
  };
  const box5Anime = () => {
    gsap.fromTo(
      box5.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        scrollTrigger: {
          trigger: box5.current,
          // start: "top center",
        },
      }
    );
  };

  useEffect(() => {
    image2Anime();
    image4RefAnime();
    image5RefAnime();
    image6Anime();
    boxAnime();
    box2Anime();
    box3Anime();
    box4Anime();
    box5Anime();
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full items-center justify-center mt-24 gap-[200px]">
        <div className="w-[68%] flex items-center gap-4 ">
          <h1 className="text-white text-[32px] ">
            <span className="text-[#C778DD]">#</span>
            Skills
          </h1>
          <div className="h-[1px] bg-[#C778DD] w-[239px]"></div>
        </div>
      </div>
      <div className="flex gap-[100px] w-[68%] justify-between ">
        <div className="w-[349px] h-[282px] ">
          {" "}
          <div className="flex w-full mt-2 justify-between">
            <img
              ref={imageRef}
              className="relative top-[30px]"
              src={DotBox}
              alt="DotBox"
              width={75}
              height={75}
            />
            <div
              ref={image2Ref}
              className="w-[86px] h-[86px] border border-[#ABB2BF] "
            ></div>
          </div>
          <div className="flex w-full mt-6 justify-between">
            <img
              ref={image5Ref}
              className="relative top-[50px] left-[15px] "
              src={HeroStyle}
              alt=""
              width={113}
              height={113}
            />
            <img
              ref={image4Ref}
              className="relative left-[20px] "
              src={DotBox}
              alt="DotBox"
              width={63}
              height={63}
            />
            <div
              ref={image6Ref}
              className="w-[52px] h-[52px] relative top-[75px] left-[30px] border border-[#ABB2BF] "
            ></div>
          </div>
        </div>

        <div className="flex mt-10 gap-4">
          <div ref={box1}>
            <SkillsComponent
              Title="Languages"
              Descrip="TypeScript Python Java JavaScript"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div ref={box4}>
              <SkillsComponent
                Title="Databases"
                Descrip="TypeScript Python Java JavaScript"
              />
            </div>
            <div ref={box2}>
              <SkillsComponent Title="Other" Descrip="HTML CSS " />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div ref={box5}>
              <SkillsComponent
                Title="Tools"
                Descrip="VSCode Figma Font Awesome GSAP Git DaisyUI Bootstrap"
              />
            </div>
            <div ref={box3}>
              <SkillsComponent
                Title="Frameworks"
                Descrip="React Tailwind CSS Next.js"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
