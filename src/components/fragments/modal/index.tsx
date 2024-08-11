import Image from "next/image";
import { useState } from "react";

export default function Modal(imageUrl: string, modalTitle: string) {
  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).id === "modal-background") {
      setIsOpen(false);
    }
  };
  const toggleModal = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // Sesuaikan dengan durasi animasi
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 transition-all duration-300"
        id="modal-background"
        onClick={closeModal}
      >
        <div
          className={`bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-lg transition-all duration-300 ${
            isClosing ? "animate-modalFadeOut" : "animate-modalFadeIn"
          }`}
        >
          <Image src={imageUrl} alt={modalTitle} width={500} height={500} />
          <h1 className="text-center mt-2">{}</h1>
          <button
            onClick={toggleModal}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
