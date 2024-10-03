import React from "react";
import Image from "next/image";
import r2 from "@/public/assets/testimonial-02.jpg";

const ClientReview = () => {
  return (
    <section className="bg-detailsBg min-md:pt-10">
      <div className=" max-w-5xl xs:py-12  min-md:pt-20 mx-auto xs:px-4">
        <div className="xs:pb-12  min-md:mx-10 max-w-4xl">
          <div className="min-md:mx-10 min-md:px-7  max-w-3xl ">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={r2}
                className="rounded-full mb-4"
                width={64}
                height={64}
                alt="testimonial-1"
              />
              <p className="text-secondry text-center text-xl mb-3 ">
                "I had to work 8 hours a day on one app. With Cube, I only need
                one or two hours. I just need to work on creatives, because
                everything else is automated.".
              </p>
              <p className="text-center text-primary hover:cursor-pointer hover:font-bold">
                Mirta Jiang - <span className="text-btnColor">Paid Apps</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
