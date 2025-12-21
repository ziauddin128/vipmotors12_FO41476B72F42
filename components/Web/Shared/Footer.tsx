import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const usefulLink = [
    {
      label: "Home",
      value: "/home",
    },
    {
      label: "Inventory",
      value: "/inventory",
    },
    {
      label: "How It Works",
      value: "/how-it-works",
    },
    {
      label: "Contact",
      value: "/contact",
    },
    {
      label: "Testimonials",
      value: "/testimonials",
    },
  ];
  return (
    <div
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/footer-bg.png')" }}
    >
      <div className="custom-container-2">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <img
              src="/images/logo.svg"
              className="w-[60px] h-[60px] object-contain"
              alt="Logo"
            />
            <p className="text-base text-White-Gray-Color">
              We are a premier auto leasing brokerage specializing in luxury
              SUVs and vehicles. From BMWs and Cadillac Escalades to Tahoes and
              GMC Sierras, we make leasing simple, fast, and stress-free. Our
              team provides personalized support and fast approvals to get you
              behind the wheel of your dream car today.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="tel:+14161234567"
                className="flex items-center gap-3 text-[#FBFBFB]"
              >
                <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full border border-dashed border-white">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+1 (416) 123-4567</span>
              </Link>

              <Link
                href="mailto:info@vipmotors.com"
                className="flex items-center gap-3 text-[#FBFBFB]"
              >
                <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full border border-dashed border-white">
                  <Mail className="h-5 w-5" />
                </div>
                <span>info@vipmotors.com</span>
              </Link>

              <Link
                href="https://www.google.com/maps/place/VIP+Motors/@42.4699702,-83.2394343,15z/data=!4m6!3m5!1s0x8824c9f277094ea7:0x85d43be7537a149e!8m2!3d42.4699702!4d-83.2394343!16s%2Fg%2F11p3g2mc_d?entry=ttu"
                className="flex items-center gap-3 text-[#FBFBFB]"
              >
                <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full border border-dashed border-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>
                  Miami | Sunny Isles | Aventura | Brickell | Fort Lauderdale
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center border-l border-r border-[#E5E5E54D]">
            <div className="flex flex-col gap-6">
              <h2 className="text-White-Color text-xl font-medium">
                Useful Links
              </h2>
              <ul className="flex flex-col gap-4">
                {usefulLink.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.value}
                      className="text-White-Color text-base hover:text-Primary-Color transition duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-White-Color text-xl font-medium">Newsletter</h2>
            <p className="text-base text-White-Gray-Color">
              Stay ahead of the latest luxury car deals, special leasing offers,
              and VIP promotions delivered straight to your inbox.
            </p>

            <div className="p-2 bg-White-Color rounded flex">
              <input
                className="flex-1 border-0 outline-0 px-4"
                placeholder="Your email address"
                type="text"
                name=""
              />
              <button className="w-fit bg-Primary-Color text-white text-lg py-2.5 px-4 rounded">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium text-White-Color">
                Opening Hour
              </h1>
              <p className="text-base text-White-Gray-Color">
                24/7 Hour Support
              </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div></div>
      </div>
    </div>
  );
}
