/** @format */

import React from "react";
import Dealer from "@/components/Icons/Dealer";
import Licensed from "@/components/Icons/Licensed";
import Image from "next/image";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export default function Footer() {
  return (
    <div className='grid sm:grid-cols-2 md:flex md:flex-row gap-4 justify-between items-center bg-black/40 p-4 rounded-xl backdrop-blur-md border border-white/10'>
      <div className='flex items-center justify-center sm:justify-start'>
        <Image
          src='/images/logo.svg'
          height={100}
          width={100}
          loading='eager'
          className='w-20 h-20 md:w-[100px] md:h-[100px] object-contain'
          alt='VIP Motors Logo'
        />
      </div>
      <div className='flex items-center gap-3'>
        <Licensed />
        <p className='text-sm md:text-base text-white font-medium'>Licensed Broker</p>
      </div>
      <div className='flex items-center gap-3'>
        <MdOutlineSecurity className='text-Primary-Color w-7 h-7' />
        <p className='text-sm md:text-base text-white font-medium'>Secure Form</p>
      </div>

      <div className='flex items-center gap-3'>
        <Dealer />
        <p className='text-sm md:text-base text-white font-medium'>Dealer Network</p>
      </div>

      <div className='flex items-center gap-3'>
        <TbTruckDelivery className='text-Primary-Color w-7 h-7' />
        <p className='text-sm md:text-base text-white font-medium'>Delivery Available</p>
      </div>
    </div>
  );
}
