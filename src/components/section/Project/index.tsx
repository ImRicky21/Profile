import dataPorto from "@/data/portofolio";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
  const data = dataPorto;

  return (
    <>
      <div className="flex justify-center container " id="Project">
        <div className="mb-10">
          <h3
            data-aos="fade-up"
            className="text-center text-2xl font-semibold text-sky-400"
          >
            Project
          </h3>
          <h3 data-aos="fade-up" data-aos-delay="200">
            -WEBSITE-
          </h3>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex  justify-center"
      >
        <div>
          {data.map((item: any) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={(item.id + 1) * 100}
            >
              <div className="transition-all hover:shadow-xl hover:-translate-y-1 ease-in-out duration-500  p-2 m-2 rounded-md flex justify-center align-middle flex-col bg-slate-100 shadow-md  ">
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  className="p-3"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="rounded-md"
                    width={300}
                    height={200}
                  />
                </Link>
                <h1 className="text-center font-medium text-slate-700">
                  {item.title}
                </h1>

                <div className="flex gap-2 items-center justify-center">
                  {item.techstack.map((tech: any, index: any) => {
                    const Icon = tech.icon;
                    const IconColor = tech.color;
                    return (
                      <div
                        key={index}
                        className="hover:relative hover:-translate-y-1 transition-all ease-in-out"
                      >
                        <p className={`text-3xl text-${IconColor} `}>
                          <Icon />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
