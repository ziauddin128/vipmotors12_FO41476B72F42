import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-[75px] bg-[#B599451A]">
      <div className="custom-container-2">
        {/* Title */}
        <div className="max-w-250 w-full mx-auto text-center space-y-2">
          <h1 className="text-[38px] md:text-[48px] font-semibold">
            Get Your Instant <br />
            <span className="text-Primary-Color">Purchase Quote</span> Today
          </h1>

          <p className="text-base md:text-lg">
            Fast approvals, personalized offers, and 24/7 concierge support.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/contact.png"
              height={300}
              width={300}
              unoptimized
              quality={100}
              loading="eager"
              className="max-h-125 w-full object-cover object-top rounded-xl"
              alt="Contact Image"
            />
          </div>
          <div className="flex flex-col justify-center bg-White-Color py-10 px-4 sm:px-6 rounded-lg border border-White-Gray-Color">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label className="contact-label">First Name</Label>
                <Input className="custom-input" placeholder="Enter Name" />
              </div>

              <div>
                <Label className="contact-label">Last Name</Label>
                <Input className="custom-input" placeholder="Enter Name" />
              </div>

              <div>
                <Label className="contact-label">Email</Label>
                <Input className="custom-input" placeholder="Enter Email" />
              </div>

              <div>
                <Label className="contact-label">Phone Number</Label>
                <Input
                  className="custom-input"
                  placeholder="Enter Phone Number"
                />
              </div>

              <div className="sm:col-span-2">
                <Label className="contact-label">Message</Label>
                <Textarea
                  className="custom-input min-h-25!"
                  placeholder="Write message here."
                />
              </div>
            </div>

            <button className="mt-6 cursor-pointer w-full bg-Primary-Color text-white text-base md:text-lg font-medium py-3 px-4 rounded hover:opacity-[.9]">
              Tell Us About Your Dream Ride
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
