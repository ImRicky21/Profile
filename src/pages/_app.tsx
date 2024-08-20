import NavbarList from "@/components/ui/Navbar";
import "@/styles/globals.css";
import "@/styles/animate.css";
import "swiper/css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import AOS from "aos";
import Footer from "@/components/ui/Footer";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className={`${PoppinsFont.className} bg-slate-100`}>
      <NavbarList />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
