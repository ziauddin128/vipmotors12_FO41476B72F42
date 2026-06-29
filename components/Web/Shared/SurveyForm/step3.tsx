/** @format */

import React from "react";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";
import { Zap, Calendar, Clock, Eye } from "lucide-react";

const timelines = [
  { label: "ASAP", value: "ASAP", icon: Zap, desc: "Ready to drive within days" },
  { label: "Within 30 days", value: "Within 30 days", icon: Calendar, desc: "Leasing this month" },
  { label: "1–3 months", value: "1–3 months", icon: Clock, desc: "Planning ahead" },
  { label: "Just browsing", value: "Just browsing", icon: Eye, desc: "Exploring options & quotes" },
];

export default function Step3() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const selectedTimeframe = watch("timeFrame");

  return (
    <div>
      <p className='text-base md:text-lg font-medium text-gray-800 mb-1'>
        When are you looking to lease? <span className='text-Primary-Color'>*</span>
      </p>
      <p className='text-xs text-gray-500 mb-4'>Helps us check immediate inventory and active dealer incentives.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {timelines.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedTimeframe === item.value;
          return (
            <button
              key={item.value}
              type='button'
              onClick={() => setValue("timeFrame", item.value, { shouldValidate: true })}
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
        {...register("timeFrame", { required: "Please select a timeline" })}
      />

      {errors.timeFrame && (
        <p className='error-msg text-sm mt-2 text-red-500'>{errors.timeFrame.message}</p>
      )}
    </div>
  );
}
