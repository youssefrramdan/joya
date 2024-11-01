// components/ImageSlider.js
import Slider from "react-slick";
import Image from "next/image";
import { Image as ImageType } from "../page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }: { images: ImageType[] }) => {
  console.log('images inside image slider', images);

  const NextArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <div
        className="absolute top-1/2 right-[-28%] transform -translate-y-1/2 bg-[#041d1a] p-1 rounded-full shadow-md cursor-pointer"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 text-[#faf8f7]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <div
        className="absolute top-1/2 left-[-28%] transform -translate-y-1/2 bg-[#041d1a] p-1 rounded-full shadow-md cursor-pointer z-50"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 text-[#faf8f7]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  };

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: false,
    nextArrow: <NextArrow onClick={() => console.log('Next arrow clicked')} />,
    prevArrow: <PrevArrow onClick={() => console.log('Prev arrow clicked')} />,
  };

  return (
    <div className="w-full h-full max-w-[30rem] md:max-w-6xl mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={img.secure_url}
              alt={`Slide ${index}`}
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-md mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
