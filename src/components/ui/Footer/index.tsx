import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <div className="container items-center align-middle py-10 gap-8 ">
        <div className="flex items-center justify-around flex-wrap gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="">Banjarmasin, Kalimantan Selatan</p>
            <p className="font-bold">Indonesia</p>
          </div>

          <div className="flex gap-5 transition-all">
            <Link
              href={"https://www.instagram.com/ritchyz_/"}
              target={"_blank"}
              className="hover:-translate-y-2 ease-in-out duration-500 transition"
            >
              <BsInstagram className="text-pink-400 text-2xl" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/ricky-rahmad-ramadhana-05a64a190/"
              }
              target={"_blank"}
              className="hover:-translate-y-2 ease-in-out duration-500 transition"
            >
              <BsLinkedin className="text-blue-600 text-2xl" />
            </Link>
            <Link
              href={"mailto:rickyrahmad2121@gmail.com"}
              target={"_blank"}
              className="hover:-translate-y-2 ease-in-out duration-500 transition"
            >
              <HiOutlineMailOpen className="text-red-600 text-2xl" />
            </Link>

            <Link
              href={"https://github.com/ImRicky21"}
              target={"_blank"}
              className="hover:-translate-y-2 ease-in-out duration-500 transition"
            >
              <BsGithub className="text-black text-2xl" />
            </Link>
          </div>
        </div>
        <div className="text-center mt-9">
          <p className="text-center">© {new Date().getFullYear()} </p>
        </div>
      </div>
    </>
  );
}
