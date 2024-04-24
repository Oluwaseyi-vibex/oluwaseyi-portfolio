import Logo from "../assets/Logo.svg";
import Github from "../assets/Github.svg";
import Figma from "../assets/Figma.png";
import Discord from "../assets/Discord.svg";

const footer = () => {
  return (
    <div
      id="section4"
      className="w-full h-[208px] border-t-[1px] mt-[150px] flex flex-col items-center gap-14 "
    >
      <div className="flex items-center justify-center mt-5 gap-[560px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="flex gap-[8px]">
              <img src={Logo} alt="Logo" />
              <h1 className="relative z-40 text-white text-[16px] font-bold leading-normal tracking-wide">
                OluwaSeyi
              </h1>
            </div>
            <p className="text-[#ABB2BF] text-[18px] ">oluseyiwmwm@gmail.com</p>
          </div>
          <p className="text-white text-[18px] ">Front-End Developer</p>
        </div>
        <div className="gap-4 flex flex-col">
          <h1 className="text-[24px] text-white font-bold ">Media</h1>
          <div className="flex w-full items-center gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Oluwaseyi-vibex"
            >
              <img src={Github} alt="" />
            </a>
            <img src={Figma} alt="" />
            <img src={Discord} alt="" />
          </div>
        </div>
      </div>
      <p className="text-[#ABB2BF]  "> © Copyright 2022. Made by Me.</p>
    </div>
  );
};

export default footer;
