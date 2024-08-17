import React from "react";
import "./ServiceDelivery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { image1, image2, image3, image4, image5,image6,image7,image8 ,image9,image10,image11,image12,image13,image14} from "./assets/index.jsx";
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
      <h1>SERVICE DELIVERY</h1>
      <div className="services">
        <div className="service-item">
          <div className="video-or-image">
            <SimpleImageSlider
                width={670}
                height={380}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <h2>UAT in partnership with Tau Project at Ga-Phaahla saying water is life  </h2>

          <p>testing</p>
          <hr className="divider" />
          <p className="date">August 7, 2024</p> {/* Replace with the desired date */}
        </div>
        <div className="service-item">
          <div className="video-or-image">
            <SimpleImageSlider
                width={670}
                height={380}
              images={images1}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <h2>UAT Ekurhuleni for putting smiles on our African children in Daveyton. </h2>
          <p>testing</p>
          <hr className="divider" />
          <p className="date">August 7, 2024</p> {/* Replace with the desired date */}
        </div>
        <div className="service-item">
          <div className="video-or-image">
            <SimpleImageSlider
                width={670}
                height={380}
                images={images2}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <h2>Iconic Doer Ramapulana Manasoe and UAT for putting smiles on <br></br> our African children in Rahlakgane Primary school in Limpopo.</h2>
          <p>testing</p>
          <hr className="divider" />
          <p className="date">August 7, 2024</p> {/* Replace with the desired date */}
        </div>
        <div className="service-item">
          <div className="video-or-image">
            <SimpleImageSlider
               width={670}
               height={380}
                images={images2}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <h2>Iconic Doer Ramapulana Manasoe and UAT for putting smiles on <br></br> our African children in Rahlakgane Primary school in Limpopo.</h2>
          <p>testing</p>
          <hr className="divider" />
          <p className="date">August 7, 2024</p> 
        </div>
        <div className="service-item">
          <div className="video-or-image">
            <SimpleImageSlider
              width={670}
              height={380}
                images={images2}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <h2>Iconic Doer Ramapulana Manasoe and UAT for putting smiles on <br></br> our African children in Rahlakgane Primary school in Limpopo.</h2>
          <p>testing</p>
          <hr className="divider" />
          <p className="date">August 7, 2024</p> 
        </div>
        <div className="service-item">
          <div className="video-or-image">
            <SimpleImageSlider
                width={670}
                height={380}
                images={images2}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <h2>Iconic Doer Ramapulana Manasoe and UAT for putting smiles on <br></br> our African children in Rahlakgane Primary school in Limpopo.</h2>
          <p>testing</p>
          <hr className="divider" />
          <p className="date">August 7, 2024</p> 
        </div>
      </div>
    </div>
  );
};

export default ServiceDelivery;
