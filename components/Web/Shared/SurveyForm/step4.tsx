/** @format */

import React from "react";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";
import { Award, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

const creditRanges = [
  { label: "Excellent (720+)", value: "Excellent (720+)", icon: Award, desc: "Tier 1 Top Rates & Fast Track" },
  { label: "Good (680–719)", value: "Good (680-719)", icon: CheckCircle2, desc: "Standard Prime Approval" },
  { label: "Fair (640–679)", value: "Fair (640-679)", icon: ShieldCheck, desc: "Flexible Lease Programs" },
  { label: "Below 640", value: "Below 640", icon: AlertCircle, desc: "Custom Structure Options" },
];

export default function Step4() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const selectedCredit = watch("creditRange");

  return (
    <div>
      <p className='text-base md:text-lg font-medium text-gray-800 mb-1'>
        Estimated Credit Range <span className='text-Primary-Color'>*</span>
      </p>
      <div className='flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mb-4 w-fit border border-emerald-200'>
        <ShieldCheck className='w-4 h-4 text-emerald-600 shrink-0' />
        <span>Self-select soft qualifier – <strong>No hard credit pull required</strong></span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {creditRanges.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedCredit === item.value;
          return (
            <button
              key={item.value}
              type='button'
              onClick={() => setValue("creditRange", item.value, { shouldValidate: true })}
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
        {...register("creditRange", { required: "Please select your estimated credit range" })}
      />

      {errors.creditRange && (
        <p className='error-msg text-sm mt-2 text-red-500'>{errors.creditRange.message}</p>
      )}
    </div>
  );
}
