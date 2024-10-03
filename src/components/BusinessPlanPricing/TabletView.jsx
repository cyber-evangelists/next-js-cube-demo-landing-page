"use client";
import React, { useState } from "react";
import { Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMinus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const TabletView = () => {
  const [isYearly, setIsYearly] = useState(false);
  // Prices for monthly and yearly plans
  const prices = {
    monthly: {
      satter: 35,
      agency: 55,
      team: 85,
    },
    yearly: {
      satter: 29,
      agency: 49,
      team: 89,
    },
  };

  return (
    <>
      <div className="xs:hidden">
        <table className="w-full xs:hidden">
          <thead>
            <tr className="bg-tableBgPrimary ">
              <th className=" p-4 w-1/2">
                <div className="flex gap-4">
                  <p className="text-secondry font-medium text-[0.875rem]">
                    Monthly
                  </p>
                  <Switch
                    checked={isYearly}
                    onChange={(checked) => setIsYearly(checked)}
                  />
                  <p className="text-secondry font-medium text-[0.875rem]">
                    Yearly <span className="text-[#10B981]">(-20%)</span>
                  </p>
                </div>
              </th>
              <th className="text-secondry p-4 border-l border-line">
                <div>
                  <p className="font-bold text-[#6366F1] mb-1 text-center">
                    Satter
                  </p>
                  <p className="text-primary font-semibold text-xl text-center">
                    ${isYearly ? prices.yearly.satter : prices.monthly.satter}
                    <span className="text-secondry font-medium text-xs">
                      /mo
                    </span>
                  </p>
                </div>{" "}
              </th>
              <th className="text-secondry p-4 border-l border-line">
                <div>
                  <p className="font-bold text-[#6366F1] mb-1 text-center">
                    Agency
                  </p>
                  <p className="text-primary font-semibold text-xl text-center">
                    ${isYearly ? prices.yearly.agency : prices.monthly.agency}
                    <span className="text-secondry font-medium text-xs">
                      /mo
                    </span>
                  </p>
                </div>{" "}
              </th>
              <th className="text-secondry p-4 border-l border-line">
                <div>
                  <p className="font-bold text-[#6366F1] mb-1 text-center">
                    Team
                  </p>
                  <p className="text-primary font-semibold text-xl text-center">
                    ${isYearly ? prices.yearly.team : prices.monthly.team}
                    <span className="text-secondry font-medium text-xs">
                      /mo
                    </span>
                  </p>
                </div>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-tableBgSecondry">
              <td>
                <div className="text-secondry min-md:px-4">
                  <span className="font-semibold text-xs">USAGE</span>
                </div>
              </td>
              <td className="border-l border-line"></td>
              <td className="border-l border-line"></td>
              <td className="border-l border-line"></td>
            </tr>
            <tr className="bg-tableBgPrimary">
              <td>
                <div className="text-primary min-md:p-4">
                  <span className=" ">Admin & Members</span>
                </div>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">4</p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">12</p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">Unlimited</p>
              </td>
            </tr>
            <tr className="bg-tableBgSecondry">
              <td>
                <div className="text-primary min-md:p-4">
                  <span className=" ">File Storage</span>
                </div>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">10GB</p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">50GB</p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">Unlimited</p>
              </td>
            </tr>
            <tr className="bg-tableBgPrimary">
              <td>
                <div className="text-primary min-md:p-4">
                  <span className=" ">Active Users</span>
                </div>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">500</p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">1500</p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-primary text-center">Unlimited</p>
              </td>
            </tr>
            <tr className="bg-tableBgSecondry">
              <td>
                <div className="text-secondry min-md:px-4">
                  <span className="font-semibold text-xs">FEATURES</span>
                </div>
              </td>
              <td className="border-l border-line"></td>
              <td className="border-l border-line"></td>
              <td className="border-l border-line"></td>
            </tr>
            <tr className="bg-tableBgPrimary">
              <td>
                <div className="text-primary min-md:p-4">
                  <span className=" ">Unlimited Activities</span>
                </div>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
                </p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
                </p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
                </p>
              </td>
            </tr>
            <tr className="bg-tableBgSecondry">
              <td>
                <div className="text-primary min-md:p-4">
                  <span className=" ">Data Export</span>
                </div>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faMinus} className="text-secondry" />
                </p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
                </p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
                </p>
              </td>
            </tr>
            <tr className="bg-tableBgPrimary">
              <td>
                <div className="text-primary min-md:p-4">
                  <span className=" ">Adjust Size Group</span>
                </div>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faMinus} className="text-secondry" />
                </p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
                </p>
              </td>
              <td className="text-secondry p-4 border-l border-line  min-md:px-6 ">
                <p className="text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
                </p>
              </td>
            </tr>
            <tr className="bg-table-gradient">
              <td></td>

              <td className="   pb-3 text-secondry p-4 border-l border-line   ">
                <p className="text-center">
                  <div className="  py-3 bg-btnColor hover:bg-btnHoverColor cursor-pointer text-primary rounded-lg sm:w-full">
                    Free Trail
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-arrowColor lg:hidden"
                      width={15}
                      height={15}
                    />
                  </div>
                </p>
              </td>
              <td className="   pb-3 text-secondry p-4 border-l border-line   ">
                <p className="text-center">
                  <div className=" py-3 bg-btnColor hover:bg-btnHoverColor cursor-pointer text-primary rounded-lg sm:w-full">
                    Free Trail
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-arrowColor lg:hidden"
                      width={15}
                      height={15}
                    />
                  </div>
                </p>
              </td>
              <td className="   pb-3 text-secondry p-4 border-l border-line   ">
                <p className="text-center">
                  <div className="  py-3 bg-btnColor hover:bg-btnHoverColor cursor-pointer text-primary rounded-lg sm:w-full">
                    Free Trail
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-arrowColor lg:hidden"
                      width={15}
                      height={15}
                    />
                  </div>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabletView;
