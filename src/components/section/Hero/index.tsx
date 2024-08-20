/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import profile from "../../../../public/Image/bloob.png";
export default function HeroSection() {
  return (
    <>
      <div className="flex flex-wrap md:justify-evenly my-4 mb-10 min-h-screen ">
        <div className="md:content-center px-4">
          <div className="text-3xl ">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-sky-400"
            >
              Hello
            </h2>
            <h3 data-aos="fade-up" data-aos-delay="200">
              I 'am
            </h3>
            <div className="text-5xl">
              <span
                className="uppercase font-bold text-sky-400 "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Ricky{" "}
              </span>
              <span
                className="uppercase font-semibold"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Rahmad{" "}
              </span>
              <span
                className="uppercase font-semibold"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Ramadhana
              </span>
            </div>
            <div className="flex md:gap-2 flex-wrap w-auto">
              <p
                className="text-lg text-slate-400"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Frontend Developer
              </p>
              <p
                className="text-lg text-slate-400"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                Fullstack Developer
              </p>
              <p
                className="text-lg text-slate-400"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Sofware Engineer
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <Image src={profile} width={500} height={500} alt="profile" />
        </div>
      </div>
    </>
  );
}
