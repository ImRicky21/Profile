import CertificateSection from "@/components/section/Sertifikat";
import HeroSection from "@/components/section/Hero";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-between my-4 py-14`}>
      <HeroSection />
      <CertificateSection />
    </main>
  );
}
