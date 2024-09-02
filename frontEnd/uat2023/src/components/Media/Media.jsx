import React, { useRef } from "react";
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
import { motion } from "framer-motion";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const galleryRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    galleryRef.current.scrollBy({
      left: -450, // Adjust scroll distance as needed (same as image width)
      behavior: "smooth",
    });
  };

  // Scroll right
  const scrollRight = () => {
    galleryRef.current.scrollBy({
      left: 450, // Adjust scroll distance as needed (same as image width)
      behavior: "smooth",
    });
  };

  return (
    <div className="mediaSection">
      <div className="">
        <h1>Media Gallery</h1>
      </div>
      <div className="mediaGalleryWrapper">
        <div class="nav-icon" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        {/* <div className="mediaGallery" ref={galleryRef}> */}
        <motion.div
          className="mediaGallery"
          ref={galleryRef}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }} // Adjust constraints based on content width
        >
          {images.map((image, index) => (
          <div className="galleryImage" key={index}>
            <img src={image.url} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
          {/* <div className="galleryImage">
            <img src={image12}></img>
          </div>
          <div className="galleryImage">
            <img src={image8}></img>
          </div>
          <div className="galleryImage">
            <img src={image2}></img>
          </div>
          <div className="galleryImage">
            <img src={image3}></img>
          </div>
          <div className="galleryImage">
            <img src={image4}></img>
          </div>
          <div className="galleryImage">
            <img src={image5}></img>
          </div> */}
        </motion.div>
        {/* </div> */}
        <div class="nav-icon" onClick={scrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>

      <div className="media">
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
