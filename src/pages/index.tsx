import CertificateSection from "@/components/section/Sertifikat";
import HeroSection from "@/components/section/Hero";
import Head from "next/head";
import ContactSection from "@/components/section/Contact";
import AboutSection from "@/components/section/About";
import ProjectSection from "@/components/section/Project";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Ricky</title>
      </Head>

      <main
        className={`flex min-h-screen flex-col my-4 py-14 scroll-smooth gap-8`}
      >
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <CertificateSection />
        <ContactSection />
      </main>
    </>
  );
}
