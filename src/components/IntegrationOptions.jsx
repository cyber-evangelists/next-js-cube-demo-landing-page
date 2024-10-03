import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/integration-icon-01.svg";
import img2 from "@/public/assets/integration-icon-02.svg";
import img3 from "@/public/assets/integration-icon-03.svg";
import img4 from "@/public/assets/integration-icon-04.svg";
import img5 from "@/public/assets/integration-icon-05.svg";
import img6 from "@/public/assets/integration-icon-06.svg";

const IntegrationOptions = () => {
  return (
    <section className="bg-detailsBg pb-10">
      <div className="max-w-5xl mx-auto  min-md:pt-20 flex flex-col items-center justify-center">
        <span className="xs:w-full w-3/4 min-md:pb-12">
          <h1 className="text-primary text-center mb-4 text-2xl min-md:text-6xl font-bold">
            An ecosystem of integrations
          </h1>
        </span>
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Pulsing Circle */}
          <div className="absolute w-32 h-32 bg-[#222c46] rounded-full animate-pulse-custom"></div>

          {/* Pyramid SVG */}
          <svg
            className="relative z-10"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="a">
                <stop stopColor="#FFF" stopOpacity=".299" offset="0%"></stop>
                <stop stopColor="#7587E4" stopOpacity="0" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="b">
                <stop stopColor="#818CF8" offset="0%"></stop>
                <stop stopColor="#C7D2FE" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
              <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
              <path
                fillOpacity=".64"
                fill="url(#a)"
                d="M16 13 0 23l16 9 16-9z"
              ></path>
              <path fill="url(#b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z"></path>
            </g>
          </svg>
        </div>
        <span className="text-secondry mt-10 xs:hidden">|</span>
      </div>
      <div className="max-w-3xl min-md:w-9/12 mx-auto  xs:hidden">
        <hr className="border border-line " />
      </div>
      <div className="max-w-4xl mx-auto   flex flex-col items-center justify-center ">
        <div className="grid grid-cols-2 min-md:grid-cols-6 gap-28 min-lg:gap-36 xs:hidden ">
          <p className="text-secondry">|</p>
          <p className="text-secondry">|</p>
          <p className="text-secondry">|</p>
          <p className="text-secondry">|</p>
          <p className="text-secondry">|</p>
          <p className="text-secondry">|</p>
        </div>

        <div className="grid grid-cols-2 min-md:grid-cols-6 gap-6  xs:pt-10">
          <div className="bg-[#222c46]  xs:p-4 ">
            <div className="bg-[#0f172a] xs:m-5 md:m-2 min-lg:m-4 p-3 rounded-full ">
              <Image src={img1} width={50} height={50} />
            </div>
          </div>
          <div className="bg-[#222c46]  xs:p-4">
            <div className="bg-[#0f172a] xs:m-5 md:m-2 min-lg:m-4 p-3 rounded-full">
              <Image src={img2} width={60} height={60} />
            </div>
          </div>
          <div className="bg-[#222c46]  xs:p-4">
            <div className="bg-[#0f172a] xs:m-5 md:m-2 min-lg:m-4 p-3 rounded-full">
              <Image src={img3} width={60} height={60} />
            </div>
          </div>
          <div className="bg-[#222c46]  xs:p-4">
            <div className="bg-[#0f172a] xs:m-5 md:m-2 min-lg:m-4 p-3 rounded-full">
              <Image src={img4} width={60} height={60} />
            </div>
          </div>
          <div className="bg-[#222c46]  xs:p-4">
            <div className="bg-[#0f172a] xs:m-5 md:m-2 min-lg:m-4 p-3 rounded-full">
              <Image src={img5} width={60} height={60} />
            </div>
          </div>
          <div className="bg-[#222c46]  xs:p-4">
            <div className="bg-[#0f172a] xs:m-5 md:m-2 min-lg:m-4 p-3 rounded-full">
              <Image src={img6} width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationOptions;
