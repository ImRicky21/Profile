import Link from "next/link";
import { BsLinkedin, BsMailbox } from "react-icons/bs";

import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function ContactSection() {
  return (
    <>
      <div
        className="flex justify-center container mt-10 flex-col align-middle items-center gap-9"
        id="Contact"
      >
        <div>
          <h3 className="text-center text-2xl font-semibold text-sky-400">
            CONTACT
          </h3>
        </div>
        <div className="mt-10 flex flex-wrap items-center align-middle justify-center gap-5">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className=" flex flex-col items-center w-[300px] rounded-lg shadow-md p-10 hover:shadow-xl hover:scale-110 ease-in-out duration-500"
          >
            <Link
              href={"https://www.instagram.com/ritchyz_/"}
              target={"_blank"}
              className="text-sky-400"
            >
              <FiInstagram className="text-5xl" />
            </Link>
            <p>@ritchyz_</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex flex-col items-center w-[300px] rounded-lg shadow-md p-10 hover:shadow-xl hover:scale-110 ease-in-out duration-500"
          >
            <Link
              href={"mailto:rickyrahmad2121@gmail.com"}
              target={"_blank"}
              className="text-sky-400"
            >
              <HiOutlineMailOpen className="text-5xl" />
            </Link>
            <p>rickyrahmad2121@gmail.com</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-center w-[300px] rounded-lg shadow-md p-10 hover:shadow-xl hover:scale-110 ease-in-out duration-500"
          >
            <Link
              href={
                "https://www.linkedin.com/in/ricky-rahmad-ramadhana-05a64a190/"
              }
              target={"_blank"}
              className="text-sky-400"
            >
              <BsLinkedin className="text-5xl" />
            </Link>
            <p>Ricky Rahmad Ramadhana</p>
          </div>
        </div>
      </div>
    </>
  );
}
