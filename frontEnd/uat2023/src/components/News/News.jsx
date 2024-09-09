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
  Event2,
  Event3,
} from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const News = () => {
  const news = [
    {
      id: 1,
      image: image15,
      title: " Mother Nature at Ekurhuleni Duduza celebrating ",
      date: "19 August 2024",
    },
    {
      id: 2,
      image: image16,
      title: "UAT General Secretary Japhter Baloyi visited ",
      date: "19 August 2024",
    },
    {
      id: 3,
      image: image17,
      title: "UAT delegates National Spokesperson Doer  ",
      date: "19 August 2024",
    },
    {
      id: 4,
      image: image4,
      title: "  United Africans Transformation and Tau Project ",
      date: "19 August 2024",
    },
    {
      id: 5,
      image: image19,
      title: "Ekurhuleni Doers was giving away sanitary ",
      date: "19 August 2024",
    },
    // {
    //   id: 6,
    //   image: image10,
    //   title:
    //     "UAT delegation to official opening of of the seventh Limpopo Legislature 2024",
    //   date: "19 August 2024",
    // },
    // {
    //   id: 7,
    //   image: image15,
    //   title:
    //     "Dr. Benjamin Manasoe, a member of the NEC and UAT, embarked on a social uplifting program by giving back to the primary school he attended. This gesture of appreciation aimed to solidify the relationship between the school and UAT.",
    //   date: "19 August 2024",
    // },
    // {
    //   id: 8,
    //   image: image15,
    //   title:
    //     " Mother Nature at Ekurhuleni Duduza celebrating women's month having various sports and entertainment activities",
    //   date: "19 August 2024",
    // },
    // Add more featured news items
  ];

  const newsScrollRef = useRef(null);

  const scroll = (direction) => {
    if (!newsScrollRef.current) return;

    const cardWidth = newsScrollRef.current.firstChild.offsetWidth; // Width of each card
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    newsScrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="newsSection">
      
      <div className="news-Titl">
        <h1>LATEST NEWS</h1>
      </div>

      <div className="news-Cards">
        {news.map((newsItem) => (
          <motion.div
            key={newsItem.id}
            className="news-Card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
          >
            <img src={newsItem.image} alt={`News Image ${newsItem.id}`} />
            <div className="topStory">
              <h1>TOP STORY</h1>
            </div>
            <div className="news-Content">
              <p className="news-Items-Content">{newsItem.title}</p>
              <div className="content-Separator"></div>
              <div className="content-Separator"></div>
              <p className="news-Items-Content">{newsItem.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <h1>UPCOMING EVENTS</h1>
      </div>
      <div className="upcomingEvents">
        <div className="event-Item">
          <div className="event-Poster">
            <img src={Event3} />
          </div>
          <div>
            <ul>
              <li>Date: 28 April 2024</li>
              <li>Time: 10</li>
              <li>
                Venue: Heidelberg - GP, Heidelberg, Heidelberg - GP, 1441, South
                Africa
              </li>
            </ul>
          </div>
        </div>
        <div className="previous-Events">
          <h1>PREVIOUS EVENTS</h1>
          <ul className="events">
            <li>
              <a>testing</a>
            </li>
            <li>
              <a>testing</a>
            </li>
            <li>
              <a>testing</a>
            </li>
            <li>
              <a>testing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
