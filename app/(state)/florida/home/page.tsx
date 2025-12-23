import React from "react";
import Hero from "@/components/Web/Florida/Hero";
import Navbar from "@/components/Web/Shared/Navbar";
import Footer from "@/components/Web/Shared/Footer";
import Vehicle from "@/components/Web/Florida/Vehicle";
import HowItWorks from "@/components/Web/Florida/HowItWorks";
import Testimonial from "@/components/Web/Florida/Testimonial";

export default function FloridaHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vehicle />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </>
  );
}
