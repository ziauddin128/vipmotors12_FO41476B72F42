/** @format */

import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export default function Step7() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div>
          <Label className='text-base lg:text-lg  font-normal lg:font-medium'>
            Enter your Zip Code
            <span className='text-Primary-Color'>*</span>
          </Label>
          <Input
            className='mt-3 custom-input'
            {...register("location", {
              required: "Zip Code is required",
            })}
          />

          {errors.location && (
            <p className='error-msg'>{errors.location.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
