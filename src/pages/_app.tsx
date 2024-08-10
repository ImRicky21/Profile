import NavbarList from "@/components/ui/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${PoppinsFont.className} bg-slate-100`}>
      <NavbarList />
      <Component {...pageProps} />;
    </div>
  );
}
