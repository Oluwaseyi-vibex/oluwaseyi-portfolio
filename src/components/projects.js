import ProjectsCard from "./projectsCard";
import ProjectImg from "../assets/project1_Img.jpg";
import uatJournalImg from "../assets/uat.png";
import portfolioImg from "../assets/fullportfolio.png";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const triggerBox1 = () => {
    gsap.fromTo(
      box1.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        duration: 1,
        delay: 0.3,
        opacity: 1,
        // ease: "back.in",
        yoyo: true,
        scrollTrigger: {
          trigger: box1.current,
          // start: "top center",

          toggleActions: "restart pause resume",
        },
      }
    );
  };

  const triggerBox2 = () => {
    gsap.fromTo(
      box2.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        duration: 1,
        delay: 0.6,
        opacity: 1,
        // ease: "back.in",
        yoyo: true,
        scrollTrigger: {
          trigger: box2.current,
          // start: "top center",

          toggleActions: "restart pause resume",
        },
      }
    );
  };

  const triggerBox3 = () => {
    gsap.fromTo(
      box3.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        duration: 1,
        delay: 0.9,
        opacity: 1,
        // ease: "back.in",
        yoyo: true,
        scrollTrigger: {
          trigger: box3.current,
          // start: "top center",
          toggleActions: "restart pause resume",
        },
      }
    );
  };

  const projectText = useRef();

  const projectTextAnime = () => {
    gsap.to(projectText.current, {
      duration: 1,
      delay: 3,
      text: {
        value: "Projects",
        ease: "",
        newClass: "class2",
        // delimiter: " ",
        // padSpace: true,
        scrollTrigger: {
          trigger: projectText.current,
          toggleActions: "restart pause resume",
        },
      },
    });
  };

  useEffect(() => {
    triggerBox1();
    triggerBox2();
    triggerBox3();
    projectTextAnime();
  });

  return (
    <div id="section2" className="flex flex-col mt-[100px]">
      <div className="flex w-full items-center justify-center gap-[200px]">
        <div className="w-[701px] flex items-center gap-4 ">
          <h1 className="text-white text-[32px] ">
            <span className="text-[#C778DD]">#</span>
            <span ref={projectText}></span>
          </h1>
          <div className="h-[1px] bg-[#C778DD] w-[701px]"></div>
        </div>
        <p className="text-white text-[16px] font-medium ">View all {"~~>"} </p>
      </div>
      <div className="flex w-full items-center justify-center gap-[16px]">
        <div ref={box1}>
          <ProjectsCard
            img={uatJournalImg}
            projectTools="Typesript  React  Tailwind"
            projectTitle="UAT Journal"
            projectDescrip="UAT journal for lecturers"
            live="Live <~>"
          />
        </div>

        <div ref={box2}>
          <ProjectsCard
            img={portfolioImg}
            projectTools="HTML  CSS"
            projectTitle="Portfolio"
            projectDescrip="Portfolio website"
            live="Live <~>"
          />
        </div>
        <div ref={box3}>
          <ProjectsCard
            img={ProjectImg}
            projectTools="HTML  SCSS  PYTHON  FLASK"
            projectTitle="ChertNodes"
            projectDescrip="Minecraft servers hosting"
            live="Live <~>"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
