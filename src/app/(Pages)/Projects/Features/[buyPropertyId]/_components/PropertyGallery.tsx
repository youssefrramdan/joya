// components/PropertyGallery.js
import BuyPropertyImages from "./BuyPropertyImages";
import { Image } from "../page";

const PropertyGallery = ({images} : {images: Image[]}) => {

 


  return (
    <div className="px-4">
      <BuyPropertyImages images={images}   />
     
    </div>
  );
};

export default PropertyGallery;
