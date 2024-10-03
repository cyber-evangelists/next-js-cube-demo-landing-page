"use client";
import Features from "@/components/Features";
import BusinessPlan from "@/components/BusinessPlan";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import Reviews from "@/components/Reviews";
import ClientReview from "@/components/ClientReview";
import FAQs from "@/components/FAQs";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
import React, { useState } from "react";

const MainHome = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  return (
    <>
      {headerVisible ? <Header setHeaderVisible={setHeaderVisible} /> : null}
      <LandingPage />
      <Reviews />
      <Features />
      <BusinessPlan />
      <ClientReview />
      <FAQs />
      <JoinUs />
      <Footer />
    </>
  );
};

export default MainHome;
