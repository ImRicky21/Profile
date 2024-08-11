import Image from "next/image";
import { useState } from "react";

type CardProps = {
  modalTitle: string;
  cardTitle?: string;
  imageCardUrl: any;
};

const Card = ({ imageCardUrl, modalTitle, cardTitle }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
        className="border rounded-lg shadow-lg cursor-pointer m-8"
        onClick={toggleModal}
      >
        <Image src={imageCardUrl} alt={modalTitle} width={500} height={500} />
        <h1 className="text-center mt-2">{cardTitle}</h1>
      </div>
    </>
  );
};

export default Card;
