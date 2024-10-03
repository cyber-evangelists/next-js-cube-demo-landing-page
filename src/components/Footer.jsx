import {
  company,
  products,
  projects,
  resources,
} from "@/footerLink/footerLinks";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="bg-tableBgPrimary ">
      <div className="  px-5 max-w-5xl w-full mx-auto ">
        <div className="    items-center py-8 min-md:py-16">
          <div className="grid  xs:grid-cols-1  min-md:grid-cols-5   ">
            <div className="xs:mb-12">
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
                    <stop
                      stop-color="#FFF"
                      stop-opacity=".299"
                      offset="0%"
                    ></stop>
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
            <div className="">
              <h3 className="font-bold mb-7 text-primary">PRODUCTS</h3>
              <ul className="flex flex-col">
                {products.map((pro, index) => {
                  return (
                    <li
                      key={pro.id}
                      className="mb-3 hover:cursor-pointer text-secondry hover:text-primary "
                    >
                      <Link href={pro.url}>{pro.proName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-7 text-primary">RESORCES</h3>
              <ul className="flex flex-col">
                {resources.map((res, index) => {
                  return (
                    <li
                      key={res.id}
                      className="mb-3 hover:cursor-pointer text-secondry hover:text-primary "
                    >
                      <Link href={res.url}> {res.info} </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-7 text-primary">PROJECTS</h3>
              <ul className="flex flex-col">
                {projects.map((info, index) => {
                  return (
                    <li
                      key={info.id}
                      className="mb-3 hover:cursor-pointer text-secondry hover:text-primary "
                    >
                      <Link href={info.url}> {info.info} </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-7 text-primary">COMPANY</h3>
              <ul className="flex flex-col">
                {company.map((info, index) => {
                  return (
                    <li
                      key={info.id}
                      className="mb-3 hover:cursor-pointer text-secondry hover:text-primary "
                    >
                      <Link href={info.url}> {info.info} </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-5 min-md:flex-row min-md:justify-between  pb-8 ">
          <div className="flex">
            <p className="text-secondry hover:text-primary">Terms</p>
            <p className="text-secondry hover:text-primary">Terms</p>
          </div>
          <div className="flex gap-4 ">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-btnColor"
              width={50}
              height={50}
            />
            <FontAwesomeIcon icon={faGithub} className="text-btnColor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
