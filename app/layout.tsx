import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIP Motors Florida | Luxury SUV & Auto Leasing Brokerage",
  description: "Fast & easy luxury auto leasing in Florida. Premium SUVs delivered anywhere in Florida with no dealership visits required. Get approved in minutes!",
  openGraph: {
    title: "VIP Motors Florida | Fast & Easy Luxury Auto Leasing",
    description: "Drive your dream luxury SUV today. Fast approvals and doorstep delivery across Florida.",
    url: "https://vipmotors.com",
    siteName: "VIP Motors",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "VIP Motors Luxury Auto Leasing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '123456789012345');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}

