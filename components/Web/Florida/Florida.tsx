/** @format */

"use client";

import React, { useState } from "react";
import SurveyForm from "@/components/Web/Shared/SurveyForm/SurveyForm";
import Call from "@/components/Web/Shared/Call";
import Footer from "../Shared/Footer";
import { GoDotFill } from "react-icons/go";
import { Star, ShieldCheck, Award, Car, CheckCircle } from "lucide-react";
import Image from "next/image";

const backgrounds = ["/images/home-bg.png", "/images/home-bg-2.png"];

export default function Florida() {
  React.useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      className='min-h-screen bg-cover bg-center text-white relative'
      style={{
        backgroundImage: `url('/images/home-bg.png')`,
      }}>
      <div className='custom-container min-h-screen flex flex-col gap-10 justify-between pt-8 lg:pt-10 pb-28 sm:pb-8'>

        {/* Top Proof Header Bar */}
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-black/60 backdrop-blur-md py-4 px-6 rounded-lg border border-white/10 max-w-3xl mx-auto text-xs md:text-sm text-gray-200'>
          <div className='flex items-center gap-1.5 text-amber-400 font-bold'>
            <div className='flex text-amber-400'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='w-4 h-4 fill-amber-400' />
              ))}
            </div>
            <span className='text-white ml-1'>4.9 / 5.0</span>
            <span className='text-gray-400 font-normal'>(280+ Google Reviews)</span>
          </div>
          <div className='hidden sm:block w-px h-4 bg-gray-600' />
          <div className='flex items-center gap-1.5 text-white font-semibold'>
            <Car className='w-4 h-4 text-Primary-Color' />
            <span>1,500+ Cars Delivered</span>
          </div>
          <div className='hidden md:block w-px h-4 bg-gray-600' />
          <div className='flex items-center gap-1.5 text-white font-semibold'>
            <Award className='w-4 h-4 text-Primary-Color' />
            <span>10+ Years in Business</span>
          </div>
        </div>

        {/* Main Hero Heading */}
        <div className='flex flex-col gap-4 text-center max-w-[900px] w-full mx-auto mt-2'>
          <h1 className='text-[28px] leading-[125%] md:text-[44px] md:leading-[120%] font-bold text-white tracking-tight'>
            Drive Your Dream <span className='text-Primary-Color'>Luxury SUV</span> Today – Fast & Easy Auto Leasing in <span className='text-Primary-Color'>Florida</span>
          </h1>

          <div className='flex flex-wrap justify-center items-center gap-4 text-sm md:text-base text-gray-200'>
            <p className='flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-md border border-white/10'>
              <CheckCircle className='text-Primary-Color w-4 h-4' />
              <span>Brand-new 2024/2025 Vehicles</span>
            </p>

            <p className='flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-md border border-white/10'>
              <CheckCircle className='text-Primary-Color w-4 h-4' />
              <span>Free Doorstep Delivery Anywhere in FL</span>
            </p>

            <p className='flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-md border border-white/10'>
              <CheckCircle className='text-Primary-Color w-4 h-4' />
              <span>Zero Dealership Hassle</span>
            </p>
          </div>

          <p className='text-sm md:text-base text-gray-300 max-w-2xl mx-auto'>
            Serving Miami, Fort Lauderdale, Tampa, Orlando, Sunny Isles, and West Palm — doorstep delivery across all of Florida.
          </p>
        </div>

        {/* Form Container with Real Delivered Car Proof */}
        <div className='grid lg:grid-cols-12 gap-8 items-center max-w-[1150px] mx-auto w-full'>
          {/* Delivered Car Proof Banner / Gallery (Left on desktop) */}
          <div className='lg:col-span-5 flex flex-col gap-4'>
            <div className='bg-black/60 backdrop-blur-xl p-5 rounded-2xl border border-white/15 shadow-xl space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30'>Recent FL Client Delivery</span>
                <span className='text-xs text-gray-400'>Miami, FL</span>
              </div>

              <div className='relative rounded-xl overflow-hidden shadow-lg aspect-video border border-white/10 group'>
                <Image
                  src='/images/hero-bg.png'
                  alt='Delivered Cadillac Escalade Luxury SUV'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3'>
                  <p className='text-xs md:text-sm font-semibold text-white'>2025 Cadillac Escalade Sport Platinum</p>
                  <p className='text-[11px] text-amber-300'>Delivered to Gold Coast client in 48 hours</p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3 text-center text-xs'>
                <div className='bg-white/5 p-2.5 rounded-lg border border-white/10'>
                  <p className='text-amber-400 font-bold text-base'>$0</p>
                  <p className='text-gray-300'>Hidden Broker Fees</p>
                </div>
                <div className='bg-white/5 p-2.5 rounded-lg border border-white/10'>
                  <p className='text-emerald-400 font-bold text-base'>24-48 Hours</p>
                  <p className='text-gray-300'>Avg FL Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right on desktop) */}
          <div className='lg:col-span-7 w-full'>
            <SurveyForm />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      <Call />
    </section>
  );
}
