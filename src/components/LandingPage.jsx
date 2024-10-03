import React from "react";
import SubHeader from "./subHeader/SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import heroImg from "@/public/assets/hero-image.png";

const LandingPage = () => {
  return (
    <div className="bg-top-gradient ">
      <SubHeader />
      <div className="max-w-5xl mx-auto min-md:mt-8 min-md:pt-7 flex flex-col items-center justify-center">
        <div className="mx-10 px-7 max-w-3xl ">
          <h1 className="text-primary text-center mb-4 min-md:text-6xl font-bold">
            A powerful suite of user-centric products
          </h1>
          <p className="text-secondry text-center text-xl mb-10 ">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="flex flex-col min-md:flex-row items-center justify-center gap-4 pb-3">
            <div className="flex items-center justify-center gap-2 px-5 py-3 bg-btnColor hover:bg-btnHoverColor cursor-pointer text-primary rounded-lg sm:w-full">
              Get Started Free
              <span className="text-arrowColor">
                {" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  width={15}
                  height={15}
                />{" "}
              </span>
            </div>

            <div className=" px-5 py-3 bg-btnColorSecondry hover:bg-btnSecondryHoverColor cursor-pointer text-primary rounded-lg sm:w-full text-center">
              Read Docs
            </div>
          </div>
        </div>
        <div className="xs:mx-auto min-md:mx-10 px-5 min-md:px-6">
          <Image src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
