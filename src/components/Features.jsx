"use client";
import React, { useState } from "react";
import Image from "next/image";
import featureImg from "@/public/assets/features-image.png";

const Features = () => {
  const [featureSelect, setFeatureSelect] = useState("everyone");

  return (
    <section className="bg-detailsBg ">
      <div className="max-w-5xl xs:py-12  min-md:pt-20 mx-auto xs:px-4">
        <div className="xs:pb-12 min-md:pb-20 min-md:mx-10 max-w-4xl">
          <h2 className="text-primary font-bold  xs:text-2xl min-md:text-5xl text-center">
            Features to help you create your best designs
          </h2>
        </div>

        <div className="max-w-5xl ">
          <div className="flex flex-col min-md:flex-row bg-boxBg sm:mx-auto lg:mx-10 ">
            <div className=" p-6 min-lg:p-10 min-md:w-2/4">
              {/* Filters */}
              <div className="mb-6 min-lg:mb-8">
                <div className="flex flex-wrap w-full ">
                  <button
                    onClick={() => setFeatureSelect("everyone")}
                    className={`m-1 py-1 px-3 border border-[#62748f] text-primary rounded-3xl ${
                      featureSelect === "everyone"
                        ? "bg-[#6366F1]" // No hover effect when selected
                        : "bg-[#3E4F68] hover:bg-[#62748f]" // Hover effect when not selected
                    }`}
                  >
                    Everyone
                  </button>
                  <button
                    onClick={() => setFeatureSelect("freelancers")}
                    className={`m-1 py-1 px-3 border border-[#62748f] text-primary rounded-3xl ${
                      featureSelect === "freelancers"
                        ? "bg-[#6366F1]" // No hover effect when selected
                        : "bg-[#3E4F68] hover:bg-[#62748f]" // Hover effect when not selected
                    }`}
                  >
                    Freelancers
                  </button>
                  <button
                    onClick={() => setFeatureSelect("organizations")}
                    className={`m-1 py-1 px-3 border border-[#62748f] text-primary rounded-3xl ${
                      featureSelect === "organizations"
                        ? "bg-[#6366F1]" // No hover effect when selected
                        : "bg-[#3E4F68] hover:bg-[#62748f]" // Hover effect when not selected
                    }`}
                  >
                    Organizations
                  </button>
                </div>
              </div>

              {/* Conditional Content */}
              {featureSelect === "everyone" ? (
                <div>
                  <h3 className="text-primary mb-2 text-2xl font-bold">
                    Kickstart your project with these tools
                  </h3>
                  <p className="text-secondry">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur, excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt laborum.
                  </p>
                </div>
              ) : null}

              {featureSelect === "freelancers" ? (
                <div>
                  <h3 className="text-primary mb-2 text-2xl font-bold">
                    Tech tools to kickstart freelance life
                  </h3>
                  <p className="text-secondry">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur, excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt laborum.
                  </p>
                </div>
              ) : null}

              {featureSelect === "organizations" ? (
                <div>
                  <h3 className="text-primary mb-2 text-2xl font-bold">
                    Share your plan and clarify project risk
                  </h3>
                  <p className="text-secondry">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur, excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt laborum.
                  </p>
                </div>
              ) : null}
            </div>

            <div className="text-primary">
              <Image
                src={featureImg}
                width={480}
                height={414}
                alt="feature-img"
              />
            </div>
          </div>
        </div>

        <hr className="border border-line mt-20" />
      </div>
    </section>
  );
};

export default Features;
