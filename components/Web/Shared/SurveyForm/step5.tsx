/** @format */

import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { User, Mail, Phone, Lock } from "lucide-react";

export default function Step5() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();

  return (
    <div>
      <p className='text-base md:text-lg font-medium text-gray-800 mb-1'>
        Where should we send your pre-approved lease quote?
      </p>
      <p className='text-xs text-gray-500 mb-5 flex items-center gap-1'>
        <Lock className='w-3.5 h-3.5 text-emerald-600' />
        <span>Your information is strictly private & confidential.</span>
      </p>

      <div className='flex flex-col gap-4'>
        <div>
          <Label className='text-sm md:text-base font-medium text-gray-700 mb-1.5 flex items-center gap-1.5'>
            <User className='w-4 h-4 text-gray-500' />
            <span>First & Last Name</span> <span className='text-Primary-Color'>*</span>
          </Label>
          <Input
            className='custom-input text-base text-black'
            placeholder='e.g. John Smith'
            {...register("fullName", {
              required: "First & last name is required",
            })}
          />
          {errors.fullName && (
            <p className='error-msg text-sm mt-1 text-red-500'>{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label className='text-sm md:text-base font-medium text-gray-700 mb-1.5 flex items-center gap-1.5'>
            <Phone className='w-4 h-4 text-gray-500' />
            <span>Phone Number</span> <span className='text-Primary-Color'>*</span>
          </Label>
          <Input
            type='tel'
            className='custom-input text-base text-black'
            placeholder='e.g. (305) 555-0199'
            {...register("phoneNumber", {
              required: "Phone number is required for instant quote SMS",
            })}
          />
          {errors.phoneNumber && (
            <p className='error-msg text-sm mt-1 text-red-500'>{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <Label className='text-sm md:text-base font-medium text-gray-700 mb-1.5 flex items-center gap-1.5'>
            <Mail className='w-4 h-4 text-gray-500' />
            <span>Email Address</span> <span className='text-Primary-Color'>*</span>
          </Label>
          <Input
            type='email'
            className='custom-input text-base text-black'
            placeholder='e.g. john@example.com'
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className='error-msg text-sm mt-1 text-red-500'>{errors.email.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
