import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import certificate from "@/data/certificate";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function CertificateSection() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const data = certificate;

  const toggleModal = (imageUrl?: string, title?: string) => {
    if (isOpenModal) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpenModal(false);
        setIsClosing(false);
        setSelectedImage(null);
        setSelectedTitle(null);
      }, 300); // Adjust to match animation duration
    } else {
      if (imageUrl && title) {
        setSelectedImage(imageUrl);
        setSelectedTitle(title);
      }
      setIsOpenModal(true);
    }
  };

  const closeModal = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).id === "modal-background") {
      toggleModal();
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center bg-gray-100 flex-col flex-wrap mt-10"
        id="Achievement"
      >
        <div className="">
          <h1
            data-aos="fade-up"
            className="text-center text-2xl font-semibold text-sky-400"
          >
            Achievement
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-center">
            {" "}
            -SERTIFIKAT-{" "}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-full max-w-4xl"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, clickableClass: "cursor-pointer" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {data.map((item: any) => (
              <SwiperSlide key={item.id} className="h-1/2 w-screen">
                <div
                  className=" border rounded-lg cursor-pointer m-8 transition ease-in-out duration-300 hover:shadow-xl hover:relative hover:-translate-y-2"
                  onClick={() => {
                    toggleModal(item.image, item.title);
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                  {/* <h2 className="text-center mt-2">{item.title}</h2> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isOpenModal && selectedImage && selectedTitle && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 transition-all duration-300 z-50"
          id="modal-background"
          onClick={closeModal}
        >
          <div
            className={`bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-lg transition-all duration-300 ${
              isClosing ? "animate-modalFadeOut" : "animate-modalFadeIn"
            }`}
          >
            <Image
              src={selectedImage}
              alt={selectedTitle}
              width={800}
              height={800}
            />
            <h1 className="text-center mt-2">{selectedTitle}</h1>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
