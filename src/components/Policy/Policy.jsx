import React from "react";
import {
  Agriculture,
  Education,
  Economic,
  Health,
  Housing,
  Power,
  Social,
  Law,
  Logo,
} from "../../assets/index";
import "./Policy.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Policy = () => {
  const navigate = useNavigate();
  const policies = [
    {
      id: 1,
      image: Social,
      title: " Social Development",
      summary: "Policy in final advance stages.",
    },
    {
      id: 2,
      image: Economic,
      title: "  Radical Economic Transformation",
      summary: "Policy in final advance stages.",
    },
    {
      id: 3,
      image: Housing,
      title: "Land Reform and Housing",
      summary: "Policy in final advance stages.",
    },
    {
      id: 4,
      image: Power,
      title: "Energy & Power Generation",
      summary: "Policy in final advance stages.",
    },
    {
      id: 5,
      image: Health,
      title: "  Universal Healthcare Access",
      summary: "Policy in final advance stages.",
    },
    {
      id: 6,
      image: Agriculture,
      title: "     Rural and Township Economies",
      summary: "Policy in final advance stages.",
    },
    {
      id: 7,
      image: Education,
      title: "Policy in final advance stages.",
      summary: "Policy in final advance stages.",
    },
    {
      id: 8,
      image: Law,
      title: "Policy in final advance stages.",
      summary: "Policy in final advance stages.",
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="policySection">
      {/* <div className="cardContainer"> */}
      <div className="section-Title">
          {" "}
          <h1>Key Policies</h1>
        </div>
        <div className="policyCards">
          {policies.map((policy) => (
            <motion.div
              key={policy.id}
              className="socialCard"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: policy.id * 0.2 }}
              variants={cardVariants}
            >
              {/* <div className="mainImageWrapper"> */}
              <img
                src={policy.image}
                alt={policy.title}
                className="mainImage"
              />
              {/* </div> */}
              <div className="logoWrapper">
                <img src={Logo} alt="Logo" className="logo" />
              </div>
              <div className="socialContent">
                <h3>
                  <a onClick={() => navigate(policy.link)}>{policy.title}</a>
                </h3>
                <p>{policy.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>{" "}
      {/* </div> */}
    </div>
  );
};

export default Policy;
