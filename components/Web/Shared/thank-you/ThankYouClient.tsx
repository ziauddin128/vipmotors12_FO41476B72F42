/** @format */
"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SuccessIcon } from "@/public/icon/SuccessIcon";
import { VerifiedIcon } from "@/components/Icons/VerifiedIcon";
import { SupportIcon } from "@/components/Icons/SupportIcon";
import { Calendar, Clock, PhoneCall } from "lucide-react";

export default function ThankYouClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const handleRedirect = () => {
    if (from === "chicago") {
      router.push("/chicago/home");
    } else {
      router.push("/florida/home");
    }
  };

  return (
    <div className="min-h-screen text-white bg-[url('/images/thankyou2.png')] bg-cover bg-center py-12 px-4">
      <div className='max-w-[850px] mx-auto'>
        {/* Top Confirmation Card */}
        <div className='text-center p-8 md:p-10 backdrop-blur-3xl bg-black/60 outline outline-1 outline-white/20 rounded-2xl shadow-2xl mb-8'>
          <SuccessIcon className='flex justify-center items-center mx-auto' />

          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-3 pt-4 text-[#FBFBFB]'>
            You&apos;re Pre-Qualified!
          </h1>

          <p className='text-base md:text-lg text-[#DDD] max-w-2xl mx-auto leading-relaxed'>
            Thank you for completing your VIP lease qualification. Next step: Schedule a 5-minute call with your dedicated Luxury Vehicle Specialist below to lock in your active pricing & inventory.
          </p>

          <div className='mt-6 inline-flex flex-wrap justify-center items-center gap-6 text-sm text-amber-300 font-medium bg-white/10 py-2.5 px-6 rounded-full border border-amber-400/30'>
            <span className='flex items-center gap-2'><Clock className='w-4 h-4' /> Fast 5-Min Consultation</span>
            <span className='flex items-center gap-2'><PhoneCall className='w-4 h-4' /> Direct Concierge Line</span>
          </div>
        </div>

        {/* GoHighLevel Booking Calendar Card */}
        <div className='backdrop-blur-3xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 border border-amber-400/40 mb-8'>
          <div className='flex items-center gap-3 pb-4 border-b border-gray-200 mb-6'>
            <div className='p-3 bg-amber-100 rounded-xl text-Primary-Color'>
              <Calendar className='w-6 h-6' />
            </div>
            <div>
              <h2 className='text-xl md:text-2xl font-bold text-gray-900'>Select Your Preferred Call Time</h2>
              <p className='text-xs md:text-sm text-gray-600'>Choose a time slot on our GoHighLevel live calendar below:</p>
            </div>
          </div>

          {/* Embedded GHL Calendar Frame / Widget */}
          <div className='w-full min-h-[550px] bg-gray-50 rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center relative'>
            <iframe
              src="https://services.leadconnectorhq.com/widget/booking/N5ckr1LzkF1akGRPJvlC"
              style={{ width: "100%", height: "600px", border: "none" }}
              scrolling="no"
              id="ghl-booking-calendar"
              title="Schedule VIP Leasing Call"
            />
          </div>
        </div>

        {/* Footer info & manual return button */}
        <div className='text-center space-y-6'>
          <div className='flex flex-wrap gap-6 justify-center items-center'>
            <div className='flex gap-2 items-center bg-black/40 px-4 py-2 rounded-lg border border-white/10'>
              <VerifiedIcon />
              <span className='text-xs md:text-sm tracking-wide text-[#DDD] uppercase font-semibold'>VERIFIED FL DEALER NETWORK</span>
            </div>

            <div className='flex gap-2 items-center bg-black/40 px-4 py-2 rounded-lg border border-white/10'>
              <SupportIcon />
              <span className='text-xs md:text-sm tracking-wide text-[#DDD] uppercase font-semibold'>24/7 VIP CONCIERGE SUPPORT</span>
            </div>
          </div>

          <div>
            <button
              onClick={handleRedirect}
              className='text-sm text-gray-300 hover:text-white underline cursor-pointer transition-colors'>
              Return to VIP Motors Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}