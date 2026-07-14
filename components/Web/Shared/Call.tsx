/** @format */

import React from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export default function Call() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("qualify-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-gray-950/95 backdrop-blur-md border-t border-amber-500/30 shadow-2xl'>
      <div className='flex items-center gap-2 max-w-md mx-auto'>
        <a
          href='tel:+13055550199'
          className='flex-1 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 py-3 px-3 rounded-xl text-black font-bold flex items-center justify-center gap-2 text-sm shadow-lg transition-all'>
          <Phone className='w-4 h-4 fill-black' />
          <span>Call / Text Us</span>
        </a>

        <button
          onClick={scrollToForm}
          className='flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 py-3 px-3 rounded-xl text-gray-900 font-bold flex items-center justify-center gap-2 text-sm shadow-lg transition-all cursor-pointer'>
          <FileText className='w-4 h-4 text-Primary-Color' />
          <span>Get Approved</span>
        </button>
      </div>
    </div>
  );
}
