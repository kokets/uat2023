import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
  faTiktok,
  faInstagram, // Add Instagram icon
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "../../assets/index";
import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <div className="footerSection">
      {/* <div className="footerDetails"> */}
      <div className="footerLogo">
        <img src={Logo} />
        <div>Doer's Let's get it right</div>
      </div>
      <div className="whyUat">
        <h1>Why UAT</h1>
        <ul>
          <li>
            <a>Policies</a>
          </li>
        </ul>
      </div>
      <div className="getInvolved">
        <h1>Contact details</h1>

        <ul>
          <li>
            {" "}
            <a
              href="https://x.com/UAT2023?t=YxRkEcqqNjnKS00rgpjs4w&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="social-Icons"
            >
              <FontAwesomeIcon icon={faXTwitter} /> X(Twitter)
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.instagram.com/myuat_2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-Icons"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.facebook.com/profile.php?id=100088710193134"
              target="_blank"
              rel="noopener noreferrer"
              className="social-Icons"
            >
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.youtube.com/@uat2023"
              target="_blank"
              rel="noopener noreferrer"
              className="social-Icons"
            >
              <FontAwesomeIcon icon={faYoutube} /> Youtube
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="social-Icons"
            >
              <FontAwesomeIcon icon={faTiktok} /> Tiktok
            </a>
          </li>

          <li>
            {" "}
            <a href="tel:0129405650" className="social-Icons">
              {" "}
              <FontAwesomeIcon icon={faPhone} /> Phone
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="mailto:info@uat2023.org.za" className="social-Icons">
              {" "}
              <FontAwesomeIcon icon={faMailBulk} /> Email
            </a>
          </li>
        </ul>
      </div>
      <div className="contactDetails">
        <h1>Get involved</h1>

        <ul>
          <li>
            {" "}
            <a>Join UAT</a>
          </li>
          <li>
            <a>UAT Mother Nature</a>
          </li>
          <li>
            <a>UAT Tomorrow 's future</a>
          </li>
          <li>
            <a>Donate</a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
