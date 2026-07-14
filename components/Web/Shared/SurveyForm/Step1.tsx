/** @format */

import React from "react";
import { Input } from "@/components/ui/input";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";

const popularMakes = [
  "Cadillac Escalade",
  "BMW X5 / X7",
  "Mercedes-Benz G-Wagon",
  "Porsche Cayenne",
  "Range Rover",
  "Chevrolet Tahoe / Suburban",
  "GMC Yukon / Sierra",
];

export default function Step1() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const currentMake = watch("carMake");

  return (
    <div>
      <p className='text-base md:text-lg font-medium text-gray-800'>
        What make or model are you looking to lease? <span className='text-Primary-Color'>*</span>
      </p>

      <div className='mt-4'>
        <Input
          className='custom-input text-black text-lg py-3'
          placeholder='e.g. Cadillac Escalade, BMW X5, G-Wagon...'
          {...register("carMake", {
            required: "Car make is required",
          })}
        />

        {errors.carMake && (
          <p className='error-msg text-sm mt-1 text-red-500'>{errors.carMake.message}</p>
        )}
      </div>

      <div className='mt-5'>
        <p className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5'>
          Popular Luxury Vehicles:
        </p>
        <div className='flex flex-wrap gap-2'>
          {popularMakes.map((make) => (
            <button
              key={make}
              type='button'
              onClick={() => setValue("carMake", make, { shouldValidate: true })}
              className={`text-xs md:text-sm px-3 py-1.5 rounded-full border transition-all cursor-pointer ${currentMake === make
                  ? "bg-Primary-Color text-white border-Primary-Color shadow-sm"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:border-Primary-Color hover:bg-amber-50"
                }`}>
              {make}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
