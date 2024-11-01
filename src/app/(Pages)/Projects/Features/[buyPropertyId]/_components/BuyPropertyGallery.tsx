"use client";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  // "/upload/img/DSC05509Edit.jpg",
  // "/upload/img/DSC05589Edit.jpg",
  // "/upload/img/DSC05626Edit.jpg",
  // "/upload/img/DSC05656.jpg",
  // "/upload/img/DSC05661Edit.jpg",
  // "/upload/img/DSC05669Edit.jpg",
  // "/upload/img/DSC05736.jpg",
  // "/upload/img/DSC05739Edit.jpg",
  // "/upload/img/DSC05794Edit.jpg",
  // "/upload/img/DSC05829Edit.jpg",
  // "/upload/img/DSC05889Edit.jpg",
  // "/upload/img/DSC05904Edit.jpg",
  // "/upload/img/DSC05926.jpg",
  // "/upload/img/DSC05931.jpg",
  // "/upload/img/DSC05951.jpg",
  // "/upload/img/DSC05976.jpg",
  // "/upload/img/DSC06011.jpg",
  // "/upload/img/DSC06029Edit.jpg",
  // "/upload/img/DSC06049Edit.jpg",
  // "/upload/img/DSC06069Edit.jpg",
  // "/upload/img/DSC06179.jpg",
  // "/upload/img/DSC06199.jpg",
];

function BuyPropertyGallery({
  modalIsOpen,
  closeModal,
  activeIndex,
}: {
  modalIsOpen:boolean;
  closeModal: ()=> void;
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
            <img
              src={"https://www.luxuryliving.ae" + image}
              alt={`Slide ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </Modal>
  );
}

export default BuyPropertyGallery;
