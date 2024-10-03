import React from "react";
import Image from "next/image";
import r1 from "@/public/assets/testimonial-01.jpg";
import r2 from "@/public/assets/testimonial-02.jpg";
import r3 from "@/public/assets/testimonial-03.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <section className="bg-detailsBg">
      <div className="max-w-5xl mx-auto ">
        <div className="xs:px-4 xs:py-12 min-md:py-20 min-md:px-4 flex flex-col min-md:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center min-md:w-1/3">
            <div className="mb-3 flex flex-col w-full items-center">
              <Image
                src={r1}
                className="rounded-full"
                width={40}
                height={40}
                alt="testimonial-1"
              />
              <div className="flex gap-2 mt-3">
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
              </div>
            </div>
            <p className="text-center text-secondry mb-3">
              "The only tool that has the technology to meet our unique and
              complex needs."
            </p>
            <p className="text-center text-primary hover:cursor-pointer hover:font-bold">
              Trustpilot - <span className="text-btnColor">4.9/5</span>{" "}
            </p>
          </div>
          <div className="flex flex-col items-center min-md:w-1/3">
            <div className="mb-3 flex flex-col w-full items-center">
              <Image
                src={r2}
                className="rounded-full"
                width={40}
                height={40}
                alt="testimonial-1"
              />
              <div className="flex gap-2 mt-3">
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
              </div>
            </div>
            <p className="text-center text-secondry mb-3">
              "The only tool that has the technology to meet our unique and
              complex needs."
            </p>
            <p className="text-center text-primary hover:cursor-pointer hover:font-bold">
              Capterra - <span className="text-btnColor">4.9/5</span>{" "}
            </p>
          </div>
          <div className="flex flex-col items-center min-md:w-1/3">
            <div className="mb-3 flex flex-col w-full items-center">
              <Image
                src={r3}
                className="rounded-full"
                width={40}
                height={40}
                alt="testimonial-1"
              />
              <div className="flex gap-2 mt-3">
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="yellow"
                  height={10}
                  width={10}
                />
              </div>
            </div>
            <p className="text-center text-secondry mb-3">
              "The only tool that has the technology to meet our unique and
              complex needs."
            </p>
            <p className="text-center text-primary hover:cursor-pointer hover:font-bold">
              G2 - <span className="text-btnColor">4.9/5</span>{" "}
            </p>
          </div>
        </div>
        <hr className="border border-line" />
      </div>
    </section>
  );
};

export default Reviews;
