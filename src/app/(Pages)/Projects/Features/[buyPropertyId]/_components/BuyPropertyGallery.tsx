"use client";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./SliderCarousel.module.css";

const images = [
  "/upload/img/DSC05164Edit.jpg",
  "/upload/img/DSC05229Edit.jpg",
  "/upload/img/DSC05239Edit.jpg",
  "/upload/img/DSC05249Edit.jpg",
  "/upload/img/DSC05319Edit.jpg",
  "/upload/img/DSC05324Edit.jpg",
  "/upload/img/DSC05341.jpg",
  "/upload/img/DSC05414Edit.jpg",
  "/upload/img/DSC05424Edit.jpg",
  "/upload/img/DSC05434Edit.jpg",
  "/upload/img/DSC05444Edit.jpg",
  "/upload/img/DSC05454Edit.jpg",
  "/upload/img/DSC05469Edit.jpg",
];

function BuyPropertyGallery({
  modalIsOpen,
  closeModal,
  activeIndex,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
  activeIndex: number;
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
    >
      <button onClick={closeModal} className={styles.closeButton}>
        &times; {/* Close button */}
      </button>
      <Slider {...settings} initialSlide={activeIndex}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={"https://www.luxuryliving.ae" + image}
              alt={`Slide ${index + 1}`}
              layout="responsive"
              width={1000}
              height={667}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </Modal>
  );
}

export default BuyPropertyGallery;
