import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SubHeader = () => {
  return (
    // <div>
    <div className="max-w-5xl w-full mx-auto">
      <div className="h-20 flex flex-row justify-between items-center px-4  min-md:px-6">
        <div className="mr-4">
          <svg
            class="c6df7 cw10y"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            height={35}
            width={35}
          >
            <defs>
              <linearGradient
                x1="0%"
                y1="32.443%"
                x2="104.18%"
                y2="50%"
                id="hlogo-a"
              >
                <stop stop-color="#FFF" stop-opacity=".299" offset="0%"></stop>
                <stop
                  stop-color="#7587E4"
                  stop-opacity="0"
                  offset="100%"
                ></stop>
              </linearGradient>
              <linearGradient
                x1="18.591%"
                y1="0%"
                x2="100%"
                y2="100%"
                id="hlogo-b"
              >
                <stop stop-color="#818CF8" offset="0%"></stop>
                <stop stop-color="#C7D2FE" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
              <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
              <path fill-opacity=".64" fill="url(#hlogo-a)" d=""></path>
              <path
                fill="url(#hlogo-b)"
                d="M16 0 0 9.25l16 9.25 15.999-9.25z"
              ></path>
            </g>
          </svg>
        </div>
        <div className=" ">
          <nav className="flex ">
            <ul className="flex gap-2">
              <li className="text-secondry px-5 py-3 cursor-pointer">
                Sign in
              </li>
              <li className="flex items-center gap-2 px-5 py-3 bg-btnColor hover:bg-btnHoverColor cursor-pointer text-primary rounded-xl">
                Get Started
                <span className="text-arrowColor">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    width={15}
                    height={15}
                  />{" "}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SubHeader;
