import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

const icons = [
  { id: 0, icon: SiJavascript, color: "text-yellow-500" },
  {
    id: 1,
    icon: SiLaravel,
    color: "text-red-600",
  },
  {
    id: 2,
    icon: SiPhp,
    color: "text-blue-600",
  },
  {
    id: 3,
    icon: SiPrisma,
    color: "text-red-600",
  },
  {
    id: 4,
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    id: 5,
    icon: FaReact,
    color: "text-sky-400",
  },
  {
    id: 6,
    icon: RiNextjsFill,
    color: "text-slate-950",
  },
  {
    id: 7,
    icon: RiTailwindCssFill,
    color: "text-sky-400",
  },
  {
    id: 8,
    icon: TbBrandKotlin,
    color: "text-purple-600",
  },
];

export default function AboutSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);
  return (
    <>
      <div className="container mb-10 p-10" id="About">
        <div>
          <h1
            className="text-center text-2xl font-semibold text-sky-400"
            data-aos="fade-up"
          >
            Tentang Saya
          </h1>
        </div>
        <div className="my-9 px-9">
          <p className="text-center md:mx-9 md:px-9" data-aos="fade-up">
            Saya Ricky Rahmad Ramadhana, mahasiswa semester akhir S-1 Teknologi
            Pendidikan dari Universitas Lambung Makurat. Saya memiliki minat
            pada bidang Front-end Developer dan saya juga tertarik pada
            pengembangan mobile app.
          </p>
        </div>
        <div className="my-9 px-9 flex flex-col flex-wrap text-center">
          <div data-aos="fade-up">
            <h2>Teknologi Pengembangan Yang Biasa Saya Gunakan</h2>
          </div>
          <div className="flex gap-5 text-3xl justify-center align-middle mt-4 flex-wrap">
            {icons.map((item: any, index: any) => {
              const Icon = item.icon;
              const IconColor = item.color;
              return (
                <p
                  key={index}
                  data-aos={"fade-up"}
                  data-aos-delay={100 * (index + 1)}
                >
                  <Icon
                    className={`hover:-translate-y-1 transition duration-500 ${IconColor}`}
                  />
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
