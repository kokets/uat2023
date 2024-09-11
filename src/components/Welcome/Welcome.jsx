import React from "react";
import Card from "../Card/Card";
import {
  faInfoCircle,
  faHandsHelping,
  faChartLine,
  faSeedling,
  faUniversity,
  faLightbulb,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./Welcome.css";
const Welcome = () => {
  const cardData = [
    {
      title: "About UAT",
      content:
        "United Africans Transformation is a Pan-African political movement with its roots anchored in our African traditional values; Humility and Excellence.",
      icon: faInfoCircle,
    },
    {
      title: "Our Advocacy",
      content:
        "For the prosperity of society and addressing the socio-economics, as UAT we advocate for a radical economic transformation and granting the marginalised poor Africans access to land to safeguard food security and entrepreneurial opportunities.",
      icon: faHandsHelping,
    },
    {
      title: "Radical Economic Transformation",
      content:
        "Radical Economic Transformation holds the promise of reshaping the socio-economic landscape for the majority of poor Africans. This non-negotiable approach will address the deep-rooted inequalities and empower communities to thrive in a fair and just society.",
      icon: faChartLine,
    },
    {
      title: "Creating Opportunities",
      content:
        "At its core, Radical Economic Transformation is about creating opportunities and breaking down barriers that have hindered progress for far too long. By focusing on inclusive growth and sustainable development, we can uplift individuals and communities, enabling them to reach their full potential.",
      icon: faSeedling,
    },
    // {
    //   title: "Economic Empowerment",
    //   content:
    //     "Through targeted policies and initiatives, we will foster economic empowerment, job creation, and skills development among marginalized African society. By investing in education, entrepreneurship, and infrastructure, we will pave the way for the African society to regain their pride and superiority on the world stage.",
    //   icon: faUniversity,
    // },
    // {
    //   title: "A Catalyst for Change",
    //   content:
    //     "Let us embrace Radical Economic Transformation as a catalyst for change, a beacon of hope that illuminates the path towards a more equitable and prosperous African society.",
    //   icon: faLightbulb,
    // },
    // {
    //   title: "Our Vision",
    //   content:
    //     "Let's Get It Right - let's build a future where every individual has the opportunity to thrive and contribute meaningfully to their community.",
    //   icon: faGlobe,
    // },
  ];
  return (
    <div className="welcome-details">
      <div className="welcome-message">
        <h2>
          <span className="united">UNITED</span>{" "}
          <span className="africa">AFRICAN</span>{" "}
          <span className="transformation">TRANSFORMATION</span>
        </h2>
        <p>
          Pan-African movement aimed at eradicating poverty and guiding the
          society towards economic freedom. <br /> Let's Get It Right!
        </p>
        {/* <button>Join Change</button> */}

        {/* {cardData.map((card, index) => (
          <Card
            Key={index}
            title={card.title}
            content={card.content}
            icon={card.icon}
          ></Card>
        ))} */}
      </div>
      {/* <div className="secondLogo">

      </div> */}
    </div>
  );
};

export default Welcome;
