import React, { useRef } from "react";
import "./News.scss";
import FeaturedNews from "./FeaturedNews";
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
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
} from "./assets/index.jsx";
import {
  Agriculture,
  Education,
  Economic,
  Health,
  Housing,
  Power,
  Social,
  Law,
  Event1,
} from "../../assets/index";
import { motion } from 'framer-motion';
const News = () => {
  const news = [
    {
      id: 1,
      image: image15,
      title: " Mother Nature at Ekurhuleni Duduza celebrating women's month having various sports and entertainment activities",
      date: "19 August 2024",
    },
    {
      id: 2,
      image: image16,
      title: "   UAT General Secretary Japhter Baloyi visited limpopo to celebrate women's month with mother nature",
      date: "19 August 2024",
    },
    {
      id: 3,
      image: image17,
      title: "UAT delegates National Spokesperson Doer Mighty Mabule and National Chairperson Doer Kagiso Diphoko attended the 1st Anniversary of African Economic Freedom (AEF ) to offer message of Support on behalf of UAT Today In KwaZulu Natal , Mtubatuba",
      date: "19 August 2024",
    },
    {
      id: 4,
      image: image4,
      title: "  United Africans Transformation and Tau Project at Ga-Phaahla launching Borehole Construction",
      date: "19 August 2024",
    },
    {
      id: 5,
      image: image19,
      title: "  Ekurhuleni Doers was giving away sanitary napkins at H.B Nyathi Secondary School ",
      date: "19 August 2024",
    },
    {
      id: 6,
      image: image10,
      title: "UAT delegation to official opening of of the seventh Limpopo Legislature 2024",
      date: "19 August 2024",
    },
    {
      id: 7,
      image: image15,
      title: "Dr. Benjamin Manasoe, a member of the NEC and UAT, embarked on a social uplifting program by giving back to the primary school he attended. This gesture of appreciation aimed to solidify the relationship between the school and UAT.",
      date: "19 August 2024",
    },
    {
      id: 8,
      image: image15,
      title: " Mother Nature at Ekurhuleni Duduza celebrating women's month having various sports and entertainment activities",
      date: "19 August 2024",
    },
    // Add more featured news items
  ];

  const newsScrollRef = useRef(null);

    const scroll = (direction) => {
        if (!newsScrollRef.current) return;
        
        const cardWidth = newsScrollRef.current.firstChild.offsetWidth; // Width of each card
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        
        newsScrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    };
  return (
    <div className="newsSection">
    
      <div className="newsContainer">
      <div>
        <h1>Latest news</h1>
      </div>
        <div className="newsScroll" >
        {news.map((newsItem) => (
            <motion.div
              key={newsItem.id}
              className="newsCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
          >
              <img src={newsItem.image} alt={`News Image ${newsItem.id}`} />
              <h3>{newsItem.title}</h3>
              <hr />
              <p className="date">{newsItem.date}</p>
            </motion.div>
          ))}
          {/* <div className="newsCard">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
{news.map()}

            <img src={image15} alt="News Image 1" />
            <h3>
            Mother Nature at Ekurhuleni Duduza celebrating women's month having various sports and entertainment activities
            </h3>
            <hr />
            <p className="date">19 August 2024</p>
            </motion.div>
          </div>
          <div className="newsCard"> <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={image16} alt="News Image 2" />
            <h3>
            UAT General Secretary Japhter Baloyi visited limpopo to celebrate women's month with mother nature
            </h3>
            <hr />
            <p className="date">Date 3</p>
            </motion.div>
          </div>
          <div className="newsCard">
            <img src={image17} alt="News Image 3" />
            <h3>UAT delegates National Spokesperson Doer Mighty Mabule and National Chairperson Doer Kagiso Diphoko attended the 1st Anniversary of African Economic Freedom (AEF ) to offer message of Support on behalf of UAT Today In KwaZulu Natal , Mtubatuba</h3>
            <hr />
            <p className="date">Date 3</p>

          </div>
          <div className="newsCard">
            <img src={image4} alt="News Image 3" />
            <h3>
            United Africans Transformation and Tau Project at Ga-Phaahla launching Borehole Construction
            </h3>
            <hr />
            <p className="date">3 August 2024</p>

          </div>
          <div className="newsCard">
            <img src={image18} alt="News Image 3" />
            <h3>
            Ekurhuleni Doers was giving away sanitary napkins at H.B Nyathi Secondary School 
            </h3>
            <hr />
            <p className="date">3 August 2024</p>

          </div>
          <div className="newsCard">
            <img src={image19} alt="News Image 3" />
            <h3>UAT delegation to official opening of of the seventh Limpopo Legislature 2024</h3>
            <hr />
            <p className="date">2 August 2024</p>

          </div>
          <div className="newsCard">
            <img src={image10} alt="News Image 3" />
            <h3>Dr. Benjamin Manasoe, a member of the NEC and UAT, embarked on a social uplifting program by giving back to the primary school he attended. This gesture of appreciation aimed to solidify the relationship between the school and UAT.</h3>
            <hr />
            <p className="date">2 August 2024</p>

          </div>
          <div className="newsCard">
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/TB-b6l3xrcA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <h3>UAT gives its expectations regarding the opening of  Limpopo legislature</h3>
            <hr />
            <p className="date">2 August 2024</p>
            </div>*/}
        </div> 

      </div>
    </div>
  );
};

export default News;
