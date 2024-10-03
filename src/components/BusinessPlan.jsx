"use client";
import React, { useState, useEffect } from "react";
import MobileView from "./BusinessPlanPricing/MobileView";
import TabletView from "./BusinessPlanPricing/TabletView";

const BusinessPlan = () => {
  const [isClient, setIsClient] = useState(false); // To track if it's client-side

  // Ensure the component only renders on the client side
  useEffect(() => {
    setIsClient(true); // Runs only on the client side
  }, []);
  return (
    <section className="bg-detailsBg">
      <div className="max-w-5xl xs:py-12  min-md:pt-20 mx-auto xs:px-4">
        <div className="xs:pb-12  min-md:mx-10 max-w-4xl">
          <div className="min-md:mx-10 min-md:px-7 max-w-3xl ">
            <h2 className="text-primary font-bold xs:text-2xl min-md:text-5xl text-center mb-4">
              Let's find the right plan for you business
            </h2>
            <p className="text-secondry text-center text-xl mb-10 ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>
          {/* pricing table */}
          {isClient ? <TabletView /> : null}
        </div>
        <div className="pb-12  min-md:hidden text-primary">
          <MobileView />
        </div>
      </div>
    </section>
  );
};

export default BusinessPlan;
