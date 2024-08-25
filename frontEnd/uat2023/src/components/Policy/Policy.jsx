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
      
      <div className="cardContainer">
      <div>
        {" "}
        <h1>Key Policies</h1>
      </div>
      <div className="policyCards" >

        {policies.map((policy) => (
          <motion.div
            key={policy.id}
            className="socialCard"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: policy.id * 0.2 }}
            variants={cardVariants}
          >
            <div className="mainImageWrapper">
              <img
                src={policy.image}
                alt={policy.title}
                className="mainImage"
              />
            </div>
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
        {/* <ul className="policy-wrapper">
          <li className="cards">
            <img src={Social}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>Social Development</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Economic}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>
                Radical Economic Transformation
              </a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Education}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>World-class Education</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Housing}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>Land Reform and Housing</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Power}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>
                Energy & Power Generation
              </a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Health}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>
                Universal Healthcare Access
              </a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Agriculture}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>
                Rural and Township Economies
              </a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Law}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>Law and Order</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li> */}
        {/* </ul> */}
      </div>      </div>
    </div>
  );
};

export default Policy;
