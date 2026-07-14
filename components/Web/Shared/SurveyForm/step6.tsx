/** @format */

import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { MapPin } from "lucide-react";

const popularFlCities = [
  "Miami",
  "Fort Lauderdale",
  "Sunny Isles",
  "Aventura",
  "Brickell",
  "Tampa",
  "Orlando",
  "West Palm Beach",
];

export default function Step6() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const currentLocation = watch("location");

  return (
    <div>
      <p className='text-base md:text-lg font-medium text-gray-800 mb-1'>
        City or ZIP Code in Florida <span className='text-Primary-Color'>*</span>
      </p>
      <p className='text-xs text-gray-500 mb-4'>Confirms your free white-glove doorstep delivery area in Florida.</p>

      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 z-10">
          <MapPin className="w-5 h-5 text-gray-500" />
        </div>

        <Input
          className="custom-input text-lg text-black py-3 pl-[44px]!"
          style={{ paddingLeft: "44px" }}
          placeholder="e.g. Miami, 33139, Fort Lauderdale..."
          {...register("location", {
            required: "City or ZIP code in Florida is required",
          })}
        />
      </div>

      {errors.location && (
        <p className='error-msg text-sm mb-3 text-red-500'>{errors.location.message}</p>
      )}

      <div>
        <p className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2'>
          Popular Delivery Hubs:
        </p>
        <div className='flex flex-wrap gap-2'>
          {popularFlCities.map((city) => (
            <button
              key={city}
              type='button'
              onClick={() => setValue("location", city, { shouldValidate: true })}
              className={`text-xs md:text-sm px-3 py-1.5 rounded-full border transition-all cursor-pointer ${currentLocation === city
                ? "bg-Primary-Color text-white border-Primary-Color shadow-sm"
                : "bg-gray-50 text-gray-700 border-gray-200 hover:border-Primary-Color hover:bg-amber-50"
                }`}>
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
