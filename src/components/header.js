import Discord from "../assets/Discord.svg";
import Github from "../assets/Github.svg";
import Mail from "../assets/Email.svg";
import Logo from "../assets/Logo.svg";
import DownArrow from "../assets/Group 58.svg";
import HeroImg from "../assets/HeroImage.png";
import Dots from "../assets/Dots.svg";
import HeroStyle from "../assets/HeroStyle1.svg";
import Qoute from "../assets/quote.svg";
// import { Link, Outlet } from "react-router-dom";
// gsap;

import { ScrollTrigger } from "gsap/all";
import Draggable from "gsap/Draggable";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger, Draggable);

gsap.registerPlugin(TextPlugin);

// import { useGSAP } from "@gsap/react";
const Header = () => {
  const hanger = useRef(null);
  const hero_text = useRef(null);
  const container = useRef(null);

  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: hanger.current,
  //     toggleActions: "restart pause resume",
  //   },
  // });

  // let tll = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: hero_text.current,
  //     toggleActions: "restart pause resume",
  //   },
  // });

  const hangerAnime = () => {
    gsap.fromTo(
      hanger.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "restart",
        },
      }
    );
  };

  const hero_textAnime = () => {
    gsap.fromTo(
      hero_text.current,
      {
        opacity: 0,
        x: -200,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        ease: "",
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "restart pause resume",
        },
      }
    );
  };

  const class_two = useRef();

  const move = () => {
    gsap.fromTo(
      class_two.current,
      { opacity: 1, x: 0 },
      {
        opacity: 1,
        x: 400,
        duration: 4,
        rotation: -360,
        ease: "bounce.out",
        delay: 1,
        repeat: -1,
        yoyo: true,
      }
    );
  };
  const DotBox = useRef();
  const DotBoxBarrier = useRef();

  const drag = () => {
    Draggable.create(DotBox.current, {
      // type: "x",
      // bounds: DotBoxBarrier.current,
      type: "rotation",
      inertia: true,
    });
  };

  const text = useRef();
  const text2 = useRef();
  const HeroPScrambled = () => {
    gsap.to(text.current, {
      duration: 4,
      text: {
        value:
          "He crafts responsive websites where technologies meet creativity",
        newClass: "class2",
        // delimiter: " ",
        // padSpace: true,
      },
    });

    gsap.to(text2.current, {
      duration: 1,
      text: {
        value: " With great power comes great electricity bill",
        ease: "elastic",
        newClass: "class2",
        // delimiter: " ",
        // padSpace: true,
      },
      scrollTrigger: {
        trigger: text2.current,
        toggleActions: "restart pause resume none",
        // start: "top center",
        // markers: true,
      },
    });
  };

  const smoothScroll = () => {
    document.querySelectorAll("nav button").forEach((btn, index) => {
      btn.addEventListener("click", () => {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: "#section" + (index + 1), offsetY: 70 },
        });
      });
    });
  };

  useEffect(() => {
    hangerAnime();
    hero_textAnime();
    HeroPScrambled();
    move();
    drag();
  });

  const buttonsRef = useRef([]);

  useEffect(() => {
    const handleClick = (index) => {
      const section = document.querySelector(`#section${index + 1}`);
      if (section) {
        gsap.to(window, { duration: 1, scrollTo: { y: section, offsetY: 70 } });
      }
    };

    buttonsRef.current.forEach((button, index) => {
      button.addEventListener("click", () => handleClick(index));
    });

    return () => {
      buttonsRef.current.forEach((button, index) => {
        button.removeEventListener("click", () => handleClick(index));
      });
    };
  }, []);

  return (
    <>
      <div ref={container} className="flex justify-between">
        <div
          ref={hanger}
          className="relative flex gap-[8px] w-fit items-center flex-col px-4 "
        >
          <div className="h-[191px] w-[1px] bg-[#ABB2BF] "></div>
          <div className="flex flex-col gap-[8px]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Oluwaseyi-vibex"
            >
              <img src={Github} alt="Github" />
            </a>
            <img src={Discord} alt="discord" />
            <a href="mailto:oluseyiwmwm@gmail.com">
              <img src={Mail} alt="mail" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center w-full justify-around ">
          {/* nav */}
          <nav className="flex w-full h-fit py-[32px] gap-[150px] justify-around ">
            <div className="flex gap-[8px]">
              <img src={Logo} alt="Logo" />
              <h1 className="relative z-40 text-white text-[16px] font-bold leading-normal tracking-wide">
                OluwaSeyi
              </h1>
            </div>

            <ul className="flex gap-[32px] align-start">
              <li
                ref={(el) => (buttonsRef.current[0] = el)}
                id="section1"
                className="flex cursor-pointer"
              >
                <span className="text-[#C778DD] text-[16px]">#</span>{" "}
                <p className="text-white text-[16px]">home</p>
              </li>
              <li
                ref={(el) => (buttonsRef.current[1] = el)}
                className="flex cursor-pointer"
              >
                <span className="text-[#C778DD] text-[16px]">#</span>{" "}
                <p className="text-white text-[16px]">work</p>
              </li>
              <li
                ref={(el) => (buttonsRef.current[2] = el)}
                className="flex cursor-pointer"
              >
                <span className="text-[#C778DD] text-[16px]">#</span>
                <p className="text-white text-[16px]">about-me</p>
              </li>
              <li
                ref={(el) => (buttonsRef.current[3] = el)}
                className="flex cursor-pointer"
              >
                <span className="text-[#C778DD] text-[16px]">#</span>
                <p className="text-white text-[16px]">contact</p>
              </li>
              <li className="flex gap-[4px]">
                <span className="text-white text-[16px]">EN</span>
                <img src={DownArrow} alt="DownArrow" />
              </li>
            </ul>
          </nav>

          {/* heroSection */}
          <div className="flex items-start w-full h-fit py-[32px] gap-10 justify-center">
            <div className="relative top-[117px] ">
              <h1
                ref={hero_text}
                className="text-white text-[32px] font-semibold leading-normal"
              >
                <span className="text-[#C778DD]">Front-End Developer</span>{" "}
              </h1>
              <p
                ref={text}
                className="text-[#ABB2BF] text-[16px] font-normal w-[500px]	 leading-[25px] py-[30px] "
              ></p>
              <button className="px-[16px] py-[8px] border-solid- border-[1px] border-[#C778DD] text-white hover:bg-[#C778DD]/20  ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/message/EOGGOVOH5LACP1"
                >
                  Contact me!!
                </a>
              </button>
            </div>
            <div ref={DotBoxBarrier} className="h-[500px]">
              <img className="relative  z-10 " src={HeroImg} alt="HeroImg" />
              <div className="flex items-center gap-2 relative left-[20px] w-[402px] p-[8px] border-solid border-[1px] border-white ">
                <div className="w-[16px] h-[16px] bg-[#C778DD] "></div>
                <p className="text-[#ABB2BF] ">
                  Currently working on{" "}
                  <span className="text-white">Portfolio</span>
                </p>
              </div>
              <img
                ref={class_two}
                className="relative bottom-[300px] right-[15px] z-0"
                src={HeroStyle}
                alt="ZigZagImg"
              />
              <img
                ref={DotBox}
                className="relative bottom-[300px] left-[350px] z-20"
                src={Dots}
                alt="Dots Box"
              />
            </div>
          </div>

          <div className="flex justify-center w-full px-full overflow-hidden items-center ">
            <div className="flex flex-col pt-5 items-end">
              <div className="border-solid w-fit p-[32px] border-white border-[1px] ">
                <img
                  className="relative py-[4px] px-[6px] bg-[#282C33] bottom-12"
                  src={Qoute}
                  alt="QouteIcon"
                />
                <p
                  ref={text2}
                  className="text-[24px] text-white font-medium "
                ></p>
                <img
                  className="relative top-11  py-[4px] px-[6px] bg-[#282C33] left-[620px]"
                  src={Qoute}
                  alt="QouteIcon"
                />
              </div>
              <div className="border-solid w-fit text-[24px] text-white p-[16px] flex justify-end  border-white border-[1px]">
                - Dr. Who
              </div>
            </div>

            <div className="w-[91px] h-[91px] border-solid border-white border-[1px] relative bottom-10 left-[340px]"></div>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Header;
