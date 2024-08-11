import Card from "@/components/fragments/card";
import Carousel from "@/components/ui/Carousel";
import dataPorto from "@/data/portofolio";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
  const data = dataPorto;

  return (
    <>
      <div className="flex justify-center ">
        <div>
          <h3 className="text-center m-5">Project</h3>
        </div>
      </div>
      <div className="flex  justify-center">
        <div>
          {data.map((item: any) => (
            <div
              key={item.id}
              className="shadow-xl p-2 m-2 rounded-md flex justify-center align-middle flex-col"
            >
              <h1>{item.title}</h1>
              <Link
                key={item.id}
                href={item.link}
                target="_blank"
                className="p-3"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={300}
                  height={200}
                />
              </Link>
              <div className="flex gap-2 items-center justify-center">
                {item.techstack.map((tech: any, index: any) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="hover:relative hover:-translate-y-1 transition-all ease-in-out"
                    >
                      <p className={`text-3xl ${tech.color} `}>
                        <Icon className="text-3xl" />
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
