import Link from "next/link";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <div className="container justify-center items-center align-middle py-10 ">
        <div className="flex items-center justify-around ">
          <div>
            <p className="">Banjarmasin, Kalimantan Selatan</p>
            <p className="font-bold">Indonesia</p>
          </div>

          <div className="flex gap-5">
            <Link
              href={"https://www.instagram.com/ritchyz_/"}
              target={"_blank"}
            >
              <BsInstagram className="text-pink-400 text-2xl" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/ricky-rahmad-ramadhana-05a64a190/"
              }
              target={"_blank"}
              className=""
            >
              <BsLinkedin className="text-blue-600 text-2xl" />
            </Link>
            <Link
              href={"mailto:rickyrahmad2121@gmail.com"}
              target={"_blank"}
              className=""
            >
              <HiOutlineMailOpen className="text-red-400 text-2xl" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-center">© {new Date().getFullYear()} </p>
        </div>
      </div>
    </>
  );
}
