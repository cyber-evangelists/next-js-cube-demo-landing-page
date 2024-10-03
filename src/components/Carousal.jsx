import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "@/carousalData";
import Image from "next/image";

const Carousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet (up to 1024px)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile (up to 640px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        <span>→</span>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        <span>←</span>
      </div>
    );
  };

  return (
    <section className="bg-detailsBg pb-10 min-xl:pb-20">
      <div className="max-w-5xl mx-auto min-sm:px-6 min-md:pt-10">
        <div className="xs:py-8 min-md:py-7 text-center">
          <h1 className="text-primary text-center mb-4 min-md:text-6xl font-bold">
            Many tools to express your creativity
          </h1>
          <div className="max-w-2xl xs:py-8 xs:px-4 mx-auto">
            <p className="text-secondry text-center sm:text-xl mb-10">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>
        </div>

        <Slider
          {...settings}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
        >
          {data.map((cardItem, index) => {
            return (
              <div key={index} className="min-w-[352px]  p-6 xs:mx-4">
                <div className="bg-boxBg px-5 py-4">
                  <Image
                    src={cardItem.url}
                    className="mb-3"
                    alt={cardItem.itemName}
                  />
                  <h2 className="text-primary font-bold text-xl ">
                    {cardItem.itemName}
                  </h2>
                  <p className="text-secondry">{cardItem.desc}</p>
                  <p className="text-btnColor text-end px-5 cursor-pointer">
                    {cardItem.learn}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Carousal;
