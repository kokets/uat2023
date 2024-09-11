import React from "react";
import "./Newsletter.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { image1, image2, image3, image4, image5,image6,image7,image8 ,image9,image10,image11,image12,image13,image14} from "../News/assets/index.jsx";
import SimpleImageSlider from "react-simple-image-slider";

const ServiceDelivery = () => {
  const images = [
    { url: image1 },
    { url: image2 },

    { url: image3 },

    { url: image4 },

    { url: image5 },
  ];
  const images1 = [
    { url: image6 },
    { url: image7 },

    { url: image8 },

  ];
  const images2 = [
    { url: image9 },
    { url: image10 },

    { url: image11 },
    { url: image12 },
    { url: image13 },
    { url: image14 },

  ];
  return (
    <div className="service-delivery-section">
      <h1>Latest Newsletters</h1>
      <div className="services">
       
      </div>
    </div>
  );
};

export default ServiceDelivery;
