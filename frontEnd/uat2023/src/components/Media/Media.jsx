import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Media.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
} from "./assets/index.jsx";
import { motion } from 'framer-motion';

const Media = () => {
  const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image8 },
    { url: image9 },
    { url: image10 },
    { url: image11 },
    { url: image12 },
  ];
  return (
    <div className="mediaSection">
      <div className="media">
        <div>
          <h1>Media Gallery</h1>
        </div>

        <div className="mediaGallery">
          {/* <SimpleImageSlider
            width={996}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          /> */}
  
        </div>
        <div className="mediaImage">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <iframe
              width="100%"
              height="820"
              src="https://www.youtube.com/embed/ZaprUUdqnzc"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
           </motion.div>
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              width="100%"
              height="820"
              src="https://www.youtube.com/embed/alLvOR9Rc9U"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
         </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Media;
