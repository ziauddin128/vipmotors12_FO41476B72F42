import React from "react";
import Hero from "@/components/Web/Florida/Hero";
import Navbar from "@/components/Web/Shared/Navbar";
import Footer from "@/components/Web/Shared/Footer";
import Vehicle from "@/components/Web/Florida/Vehicle";

export default function FloridaHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vehicle />
      <Footer />
    </>
  );
}
