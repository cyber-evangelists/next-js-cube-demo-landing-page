import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const JoinUs = () => {
  return (
    <section className="bg-detailsBg bg-join-us ">
      <div className="max-w-5xl mx-auto  ">
        <div className=" px-4">
          <div className="flex flex-col items-center justify-center py-16 min-md:pt-24 min-md:pb-20">
            <div className="mx-10 px-7 max-w-3xl ">
              <h2 className="text-primary text-center pb-16 text-3xl min-md:text-5xl font-bold">
                Join the most flexible user-centric platform for teams
              </h2>

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
          </div>
          <hr className="border border-line " />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
