import SocialProof from "@/components/landing/SocialProof";
import CTA from "@/components/landing/CTA";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      {/* <SocialProof /> */}
      <CTA />
      {/* <FAQ /> */}
      <Footer />
    </>
  );
}
