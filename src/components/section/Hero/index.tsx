import Image from "next/image";
import profile from "../../../../public/Image/bloob.png";
export default function HeroSection() {
  return (
    <>
      <div className="flex flex-wrap md:justify-evenly my-4 mb-4">
        <div className="md:content-center px-4">
          <div className="text-3xl">
            <h2>Hello</h2>
            <h3>Im</h3>
            <h2 className="">Ricky Rahmad Ramadhana</h2>
          </div>
        </div>
        <div>
          <Image src={profile} width={500} height={500} alt="profile" />
        </div>
      </div>
    </>
  );
}
