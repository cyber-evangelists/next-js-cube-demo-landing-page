"use client";
import React, { useState } from "react";
import { Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMinus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const MobileView = () => {
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
      <div className="flex justify-center  bg-tableBgPrimary">
        <div className="flex gap-4 p-4">
          <p className="text-secondry font-medium text-[0.875rem]">Monthly</p>
          <Switch
            checked={isYearly}
            onChange={(checked) => setIsYearly(checked)}
          />
          <p className="text-secondry font-medium text-[0.875rem]">
            Yearly <span className="text-[#10B981]">(-20%)</span>
          </p>
        </div>
      </div>
      {/* satter starts */}
      <div className="bg-tableBgPrimary mt-6 p-4">
        <p className="font-bold text-[#6366F1] mb-1 ">Satter</p>
        <p className="text-primary font-semibold text-xl ">
          ${isYearly ? prices.yearly.satter : prices.monthly.satter}
          <span className="text-secondry font-medium text-xs">/mo</span>
        </p>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-secondry py-2 px-4">
          <span className="font-semibold text-xs">USAGE</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Admin & Members</span>
          <span>4</span>
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">File Storage</span>
          <span>10 GB</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Active Users</span>
          <span>500</span>
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-secondry py-2 px-4">
          <span className="font-semibold text-xs">FEATURES</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Unlimited Activities</span>
          <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Data Export</span>
          <FontAwesomeIcon icon={faMinus} className="text-secondry" />
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Adjust Group Sizes</span>
          <FontAwesomeIcon icon={faMinus} className="text-secondry" />
        </div>
      </div>
      <div className="bg-tableBgSecondry flex justify-center items-center">
        <p className=" my-4 py-3 bg-btnColor hover:bg-btnHoverColor text-center cursor-pointer text-primary rounded-md w-3/4">
          Free Trail
        </p>
      </div>
      {/* satter ends */}

      {/* Agency starts */}
      <div className="bg-tableBgPrimary mt-6 p-4">
        <p className="font-bold text-[#6366F1] mb-1 ">Agency</p>
        <p className="text-primary font-semibold text-xl ">
          ${isYearly ? prices.yearly.agency : prices.monthly.agency}
          <span className="text-secondry font-medium text-xs">/mo</span>
        </p>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-secondry py-2 px-4">
          <span className="font-semibold text-xs">USAGE</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Admin & Members</span>
          <span>12</span>
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">File Storage</span>
          <span>50 GB</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Active Users</span>
          <span>1500</span>
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-secondry py-2 px-4">
          <span className="font-semibold text-xs">FEATURES</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Unlimited Activities</span>
          <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Data Export</span>
          <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Adjust Group Sizes</span>
          <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
        </div>
      </div>
      <div className="bg-tableBgSecondry flex justify-center items-center">
        <p className=" my-4 py-3 bg-btnColor hover:bg-btnHoverColor text-center cursor-pointer text-primary rounded-md w-3/4">
          Free Trail
        </p>
      </div>
      {/* Agency endss */}

      {/* Team starts */}
      <div className="bg-tableBgPrimary mt-6 p-4">
        <p className="font-bold text-[#6366F1] mb-1 ">Team</p>
        <p className="text-primary font-semibold text-xl ">
          ${isYearly ? prices.yearly.team : prices.monthly.team}
          <span className="text-secondry font-medium text-xs">/mo</span>
        </p>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-secondry py-2 px-4">
          <span className="font-semibold text-xs">USAGE</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Admin & Members</span>
          <span>Unlimited</span>
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">File Storage</span>
          <span>Unlimited</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Active Users</span>
          <span>Unlimited</span>
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-secondry py-2 px-4">
          <span className="font-semibold text-xs">FEATURES</span>
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Unlimited Activities</span>
          <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
        </div>
      </div>
      <div className="bg-tableBgSecondry">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Data Export</span>
          <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
        </div>
      </div>
      <div className="bg-tableBgPrimary">
        <div className="text-primary flex justify-between p-4">
          <span className=" ">Adjust Group Sizes</span>
          <FontAwesomeIcon icon={faCheck} className="text-[#10B981]" />
        </div>
      </div>
      <div className="bg-tableBgSecondry flex justify-center items-center">
        <p className=" my-4 py-3 bg-btnColor hover:bg-btnHoverColor text-center cursor-pointer text-primary rounded-md w-3/4">
          Free Trail
        </p>
      </div>
      {/* Team endss */}
    </>
  );
};

export default MobileView;
