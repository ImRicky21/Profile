import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiPrisma, SiTypescript } from "react-icons/si";

export default function AboutSection() {
  return (
    <>
      <div className="container mb-10 " id="About">
        <div>
          <h1 className="text-center text-2xl font-semibold text-sky-400">
            Tentang Saya
          </h1>
        </div>
        <div className="my-9 px-9">
          <p className="text-center md:mx-9 md:px-9">
            Saya Ricky Rahmad Ramadhana, mahasiswa semester akhir S-1 Teknologi
            Pendidikan dari Universitas Lambung Makurat. Saya memiliki minat
            pada bidang Front-end Developer dan saya juga tertarik pada
            pengembangan mobile app.
          </p>
        </div>
        <div className="my-9 px-9 flex flex-col flex-wrap text-center">
          <div>
            <h2>Teknologi Pengembangan Yang Biasa Saya Gunakan</h2>
          </div>
          <div className="flex gap-5 text-3xl justify-center align-middle mt-4 transition-all">
            <p className="hover:-translate-y-1 ease-in-out duration-500 text-sky-400">
              <FaReact />
            </p>
            <p className="hover:-translate-y-1 ease-in-out duration-500 text-blue-600">
              <SiTypescript />
            </p>
            <p className="hover:-translate-y-1 ease-in-out duration-500 text-slate-950">
              <RiNextjsFill />
            </p>
            <p className="hover:-translate-y-1 ease-in-out duration-500 text-yellow-400">
              <SiJavascript />
            </p>
            <p className="hover:-translate-y-1 ease-in-out duration-500 text-sky-400">
              <RiTailwindCssFill />
            </p>
            <p className="hover:-translate-y-1 ease-in-out duration-500 text-red-600">
              <SiPrisma />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
