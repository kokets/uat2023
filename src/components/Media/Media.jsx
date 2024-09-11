import React, {useState, useRef } from "react";
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
  const [selectedImage, setSelectedImage] = useState(0);

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
      <div className="section-Title">
      <h1>Media Gallery</h1>
      </div>
     
      {/* <div className="gallery">
      <motion.div
        className="gallery__container"
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }} // Adjust constraints based on content width
        whileTap={{ cursor: "grabbing" }} // Add interactivity on drag
      >
        {images.map((image, index) => (
          <motion.div
            className={`gallery__item ${selectedImage === index ? 'active' : ''}`}
            key={index}
            onClick={() => setSelectedImage(index)} // Update selected image on click
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect on tap
          >
            <img
              src={image.url}
              alt={`Gallery Image ${index + 1}`}
              className={`gallery__img ${selectedImage === index ? 'visible' : 'hidden'}`} // Show only the selected image
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="gallery__thumbnails">
        {images.map((image, index) => (
          <motion.label
            key={index}
            className="gallery__thumb"
            onClick={() => setSelectedImage(index)} // Change main image on thumbnail click
            whileHover={{ scale: 1.1 }} // Hover effect on thumbnails
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className={selectedImage === index ? 'active-thumb' : ''}
            />
          </motion.label>
        ))}
      </div>
    </div> */}
      <div className="media">
        <div className="mediaImage">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mediaVideos"

          >
            {" "}
            <iframe
              width="70%"
              height="420"
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
            className="mediaVideos"

          >
            <iframe
              width="70%"
              height="420"
              src="https://www.youtube.com/embed/alLvOR9Rc9U"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      {/* </div> */}
     </div>

      <div className="section-Title">
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <div className="voteUat">

        </div>
      </div>
    </div>
  );
};

export default Media;
