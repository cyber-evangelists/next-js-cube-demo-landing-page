import Features from "@/components/Features";
import BusinessPlan from "@/components/BusinessPlan";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import Reviews from "@/components/Reviews";
import SubHeader from "@/components/subHeader/SubHeader";
import Image from "next/image";
import ClientReview from "@/components/ClientReview";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <Reviews />
      <Features />
      <BusinessPlan />
      <ClientReview />
      <FAQs />
    </>
  );
}
