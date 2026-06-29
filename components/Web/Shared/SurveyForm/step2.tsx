/** @format */

import React from "react";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";
import { Car, Truck, Shield, Sparkles, HelpCircle } from "lucide-react";

const vehicleTypes = [
  { label: "SUV", value: "SUV", icon: Car, desc: "Luxury & Full-size SUVs" },
  { label: "Sedan", value: "Sedan", icon: Car, desc: "Luxury Sport & Executive Sedans" },
  { label: "Truck", value: "Truck", icon: Truck, desc: "Premium Pickups & Utility" },
  { label: "Luxury / Exotic", value: "Luxury", icon: Sparkles, desc: "High-end & Performance" },
  { label: "Not sure yet", value: "Not sure", icon: HelpCircle, desc: "Guide me to best options" },
];

export default function Step2() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const selectedType = watch("vehicleType");

  return (
    <div>
      <p className='text-base md:text-lg font-medium text-gray-800 mb-4'>
        What type of vehicle are you interested in? <span className='text-Primary-Color'>*</span>
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {vehicleTypes.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedType === item.value;
          return (
            <button
              key={item.value}
              type='button'
              onClick={() => setValue("vehicleType", item.value, { shouldValidate: true })}
              className={`flex items-center gap-3 p-3.5 rounded-lg border-2 text-left transition-all cursor-pointer ${
                isSelected
                  ? "border-Primary-Color bg-amber-50/60 shadow-sm"
                  : "border-gray-200 bg-white hover:border-amber-300 hover:bg-gray-50"
              }`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  isSelected ? "bg-Primary-Color text-white" : "bg-gray-100 text-gray-600"
                }`}>
                <Icon className='w-5 h-5' />
              </div>
              <div>
                <p className='font-semibold text-sm sm:text-base text-gray-900'>{item.label}</p>
                <p className='text-xs text-gray-500'>{item.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      <input
        type='hidden'
        {...register("vehicleType", { required: "Please select a vehicle type" })}
      />

      {errors.vehicleType && (
        <p className='error-msg text-sm mt-2 text-red-500'>{errors.vehicleType.message}</p>
      )}
    </div>
  );
}
