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
} from "../../assets/index";
import "./Policy.scss";
import { useNavigate } from "react-router-dom";
const Policy = () => {
  const navigate = useNavigate();

  return (
    <div className="policySection">
      <div>
        {" "}
        <h1>Key Policies</h1>
      </div>
      <div className="cardContainer"> 
        <ul className="policy-wrapper">
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
              <a onClick={() => navigate("/SignIn")}>Radical Economic Transformation</a>
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
              <a onClick={() => navigate("/SignIn")}>Energy & Power Generation</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Health}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>Universal Healthcare Access</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Agriculture}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>Rural and Township Economies</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
          <li className="cards">
            <img src={Law}></img>
            <h3>
              <a onClick={() => navigate("/SignIn")}>Law and Order</a>
            </h3>
            <p>Policy in final advance stages.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
