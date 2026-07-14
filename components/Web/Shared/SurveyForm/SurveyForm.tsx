"use client";

import React, { useEffect, useState, FC, Suspense } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Step1 from "./Step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step6 from "./step6";
import Step5 from "./step5";

export type FormDataType = {
  carMake: string;
  vehicleType: string;
  timeFrame: string;
  creditRange: string;
  location: string;
  fullName: string;
  email: string;
  phoneNumber: string;
};

const steps: {
  title: string;
  Component: FC;
  fields: (keyof FormDataType)[];
}[] = [
  { title: "Vehicle Make", Component: Step1, fields: ["carMake"] },
  { title: "Vehicle Type", Component: Step2, fields: ["vehicleType"] },
  { title: "Timeline", Component: Step3, fields: ["timeFrame"] },
  { title: "Credit Qualifier", Component: Step4, fields: ["creditRange"] },
  { title: "Delivery Area", Component: Step6, fields: ["location"] },
  { title: "Contact Info", Component: Step5, fields: ["fullName", "phoneNumber", "email"] },
];

function SurveyFormInner() {
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const methods = useForm<FormDataType>({
    defaultValues: {
      carMake: "",
      vehicleType: "",
      timeFrame: "",
      creditRange: "",
      location: "",
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    mode: "onTouched",
    shouldUnregister: false,
  });

  const { handleSubmit, trigger } = methods;
  const [current, setCurrent] = useState(0);

  const ActiveStep = steps[current].Component;
  const progressPercent = Math.round(((current + 1) / steps.length) * 100);

  const next = async (e: React.MouseEvent) => {
    e.preventDefault();
    const valid = await trigger(steps[current].fields);
    if (!valid) return;
    setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: FormDataType) => {
    setDisableButton(true);

    const utmSource = searchParams ? searchParams.get("utm_source") || "direct" : "direct";
    const utmMedium = searchParams ? searchParams.get("utm_medium") || "" : "";
    const utmCampaign = searchParams ? searchParams.get("utm_campaign") || "" : "";
    const utmTerm = searchParams ? searchParams.get("utm_term") || "" : "";
    const utmContent = searchParams ? searchParams.get("utm_content") || "" : "";

    try {
      const formattedData = {
        contact: {
          fullname: data.fullName,
          email: data.email,
          phone: data.phoneNumber,
          location: data.location,
          "credit-score-range": data.creditRange,
          timeframe: data.timeFrame,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_term: utmTerm,
          utm_content: utmContent,
        },
        vehicle: {
          make: data.carMake,
          type: data.vehicleType,
        },
      };

      console.log("Submitting lead to GHL:", formattedData);

      await fetch(
        "https://services.leadconnectorhq.com/hooks/N5ckr1LzkF1akGRPJvlC/webhook-trigger/702a517b-6808-481e-8179-3bc64a02d38e",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedData),
        }
      );

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: data.vehicleType + " - " + data.carMake,
          currency: "USD",
          value: 0.0,
        });
      }

      const fromParam = pathname.includes("chicago") ? "chicago" : "florida";
      router.push(`/thank-you?from=${fromParam}`);
    } catch (error) {
      console.error("Form submission error:", error);
      const fromParam = pathname.includes("chicago") ? "chicago" : "florida";
      router.push(`/thank-you?from=${fromParam}`);
    } finally {
      setDisableButton(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div id='qualify-form' className='max-w-[620px] w-full mx-auto shadow-2xl rounded-xl overflow-hidden bg-white border border-gray-100'>
        <div className='bg-Primary-Color text-center py-4 px-6 text-white'>
          <h2 className='text-lg md:text-2xl font-bold tracking-wide uppercase'>
            Get Pre-Qualified in 60 Seconds
          </h2>
          <p className='text-xs md:text-sm text-amber-100 mt-1'>
            Fast Approvals • Zero Obligation • Doorstep Florida Delivery
          </p>
        </div>

        <div className='bg-gray-50 px-6 pt-4 pb-2 border-b border-gray-100'>
          <div className='flex justify-between items-center text-xs font-semibold text-gray-600 mb-1.5'>
            <span>Step {current + 1} of {steps.length}: <strong className='text-Primary-Color'>{steps[current].title}</strong></span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
            <div
              className='bg-Primary-Color h-full transition-all duration-300 ease-out rounded-full'
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && current < steps.length - 1) {
              e.preventDefault();
            }
          }}>
          <div className='p-6 md:p-8 min-h-[290px] flex flex-col justify-between'>
            <ActiveStep />
          </div>

          <div className='px-6 md:px-8 pb-6 pt-2 flex items-center justify-between gap-4 border-t border-gray-100 bg-gray-50/50'>
            {current > 0 ? (
              <button
                type='button'
                onClick={prev}
                className='cursor-pointer flex items-center gap-1.5 font-medium text-gray-700 bg-white hover:bg-gray-100 py-2.5 px-4 rounded-lg text-sm border border-gray-300 transition-colors'>
                <ArrowLeft className='w-4 h-4' />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {current < steps.length - 1 ? (
              <button
                type='button'
                onClick={next}
                className='cursor-pointer flex items-center justify-center gap-2 font-semibold bg-Primary-Color hover:bg-amber-600 py-3 px-6 rounded-lg text-base text-white shadow-md transition-all ml-auto'>
                <span>Next Question</span>
                <ArrowRight className='w-4 h-4' />
              </button>
            ) : (
              <button
                type='submit'
                disabled={disableButton}
                className={`flex items-center justify-center gap-2 font-bold bg-emerald-600 hover:bg-emerald-700 py-3.5 px-8 rounded-lg text-base md:text-lg text-white shadow-lg transition-all ml-auto ${
                  disableButton ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`}>
                <CheckCircle2 className='w-5 h-5' />
                <span>{disableButton ? "Submitting..." : "Get Approved & View Inventory"}</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default function SurveyForm() {
  return (
    <Suspense fallback={
      <div className='max-w-[620px] w-full mx-auto p-8 bg-white rounded-xl shadow-xl text-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-Primary-Color mx-auto mb-4'></div>
        <p className='text-sm text-gray-600'>Loading qualification form...</p>
      </div>
    }>
      <SurveyFormInner />
    </Suspense>
  );
}
