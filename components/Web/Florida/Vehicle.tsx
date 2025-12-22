"use client";
import Car from "@/components/Icons/Car";
import GearBox from "@/components/Icons/GearBox";
import Seat from "@/components/Icons/Seat";
import Wheel from "@/components/Icons/Wheel";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface CarBrand {
  label: string;
  value: string;
}

interface CarList {
  id: string | number;
  brand: string;
  image: string;
  title: string;
  gearBox: string;
  type: string;
  seat: number | string;
  model: number | string;
}

export default function Vehicle() {
  const [activeBrand, setActiveBrand] = useState(0);

  // Car Model
  const carBrand: CarBrand[] = [
    {
      label: "BMW",
      value: "BMW",
    },
    {
      label: "Cadillac Escalades",
      value: "Cadillac Escalades",
    },
    {
      label: "Tahoes",
      value: "Tahoes",
    },
    {
      label: "GMC Sierras",
      value: "GMC Sierras",
    },
    {
      label: "Mercedes-Benz",
      value: "Mercedes-Benz",
    },
    {
      label: "Range Rover",
      value: "Range Rover",
    },
    {
      label: "Tesla",
      value: "Tesla",
    },
  ];

  const carList: CarList[] = [
    // BMW
    {
      id: 1,
      brand: "BMW",
      image: "car-1.png",
      title: "BMW X7",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2025,
    },
    {
      id: 2,
      brand: "BMW",
      image: "car-2.png",
      title: "BMW 3 Series",
      gearBox: "Manual",
      type: "Sedan",
      seat: 5,
      model: 2024,
    },
    {
      id: 3,
      brand: "BMW",
      image: "car-3.png",
      title: "BMW iX",
      gearBox: "Automatic",
      type: "Electric SUV",
      seat: 5,
      model: 2025,
    },

    // Audi
    {
      id: 4,
      brand: "Audi",
      image: "car-1.png",
      title: "Audi Q7",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2025,
    },
    {
      id: 5,
      brand: "Audi",
      image: "car-2.png",
      title: "Audi A6",
      gearBox: "Manual",
      type: "Sedan",
      seat: 5,
      model: 2024,
    },
    {
      id: 6,
      brand: "Audi",
      image: "car-3.png",
      title: "Audi e-tron",
      gearBox: "Automatic",
      type: "Electric SUV",
      seat: 5,
      model: 2025,
    },

    // Mercedes
    {
      id: 7,
      brand: "Mercedes",
      image: "car-1.png",
      title: "Mercedes GLE",
      gearBox: "Automatic",
      type: "SUV",
      seat: 5,
      model: 2025,
    },
    {
      id: 8,
      brand: "Mercedes",
      image: "car-2.png",
      title: "Mercedes C-Class",
      gearBox: "Manual",
      type: "Sedan",
      seat: 5,
      model: 2024,
    },
    {
      id: 9,
      brand: "Mercedes",
      image: "car-3.png",
      title: "Mercedes EQB",
      gearBox: "Automatic",
      type: "Electric SUV",
      seat: 5,
      model: 2025,
    },
  ];

  //  Scroll Filter By Grab
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  return (
    <section className="py-30">
      <div className="custom-container-2">
        {/* Title */}
        <div className="max-w-250 w-full mx-auto text-center space-y-2">
          <h1 className="text-[48px] font-semibold">
            Featured <span className="text-Primary-Color">Vehicle</span> Deals
          </h1>
          <p className="text-base md:text-lg">
            Hot Deals on Luxury Vehicles in South Florida
          </p>
        </div>

        {/* Filter */}
        <div
          ref={scrollRef}
          className="max-w-250 w-full mx-auto border border-White-Gray-Color bg-White-Color rounded-xl py-3 px-4 mt-8 flex items-center gap-2 overflow-x-auto cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {carBrand.map((item, idx) => (
            <button
              key={idx}
              className={`text-base font-medium whitespace-nowrap  ${
                activeBrand === idx ? "bg-Primary-Color text-white" : ""
              }  py-2.5 px-5 rounded-lg cursor-pointer`}
              onClick={() => setActiveBrand(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Car List */}
        <div className="mt-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Car Card */}
            <div className="p-4 pb-6 rounded-2xl border border-White-Gray-Color bg-White-Color flex flex-col gap-4">
              <img
                src="/images/car-1.png"
                className="w-full rounded-lg"
                alt="Car"
              />

              <div className="space-y-3">
                <h1 className="text-xl font-medium">BMW X7</h1>

                <div className="grid grid-cols-[auto_auto] gap-4">
                  <div className="flex gap-2">
                    <GearBox />
                    <span className="text-sm text-Gray-Color">
                      Gearbox : Automatic
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Wheel />
                    <span className="text-sm text-Gray-Color">Type: SUV</span>
                  </div>

                  <div className="flex gap-2">
                    <Seat />
                    <span className="text-sm text-Gray-Color">
                      Seats: 7 people
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Car />
                    <span className="text-sm text-Gray-Color">
                      Model : 2025
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className="bg-Primary-Color py-2 px-4 rounded text-center text-base font-medium text-White-Color hover:opacity-[.9] transition duration-200"
              >
                Start Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
