import certificate from "@/data/certificate";
import Image from "next/image";

export default function CertificateSection() {
  const data = certificate;
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col ">
              <p className="text-2xl font-bold">{item.title}</p>

              {item.image ? (
                <Image
                  alt={item.title}
                  width={500}
                  height={500}
                  src={item.image}
                />
              ) : (
                <p>no image</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
