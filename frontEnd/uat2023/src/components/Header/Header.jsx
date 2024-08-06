import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "../Header/Header.css";
// import { primaryLogo } from '../../assets/index';

const Header = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setShowSearch(!showSearch);
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        <a href={item.link}>{item.name}</a>
        {item.subItems && (
          <ul>
            {renderMenuItems(item.subItems)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <>
      <div className="top-Header">
        <div className="top-Header-Contact-Details">
          <div className="contact-Details">
            {" "}
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="contact-Details">012 940 5650</div>

          <div className="contact-Details">
            {" "}
            <FontAwesomeIcon icon={faMailBulk} />
          </div>
          <div className="contact-Details"> info@uat2023.org.za</div>
        </div>
        <div className="top-Header-Icons">
          <div className="social-Icons">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="social-Icons">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="social-Icons">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className="social-Icons">
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
      </div>

      <header className="header">
      <div className="logo">
            <img src="https://static.wixstatic.com/media/5de23b_e01406cc80994153b5a207d3a40d4d2c~mv2.png/v1/fill/w_262,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5de23b_e01406cc80994153b5a207d3a40d4d2c~mv2.png" />
          </div>      <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
   

      {/* <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#">Services</a>
            <ul>
              <li><a href="#">Web Development <span>25</span></a></li>
              <li><a href="#">Web Design <span>10</span></a></li>
              <li><a href="#">SEO <span>15</span></a></li>
              <li>
                <a href="#">Mobile App Development</a>
                <ul>
                  <li><a href="#">React Native <span>12</span></a></li>
                  <li><a href="#">Flutter <span>10</span></a></li>
                  <li><a href="#">Swift <span>13</span></a></li>
                  <li><a href="#">Java <span>8</span></a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
            <ul>
              <li><a href="#">HTML <span>30 Posts</span></a></li>
              <li><a href="#">CSS <span>20 Posts</span></a></li>
              <li><a href="#">JavaScript <span>10 Posts</span></a></li>
              <li><a href="#">Design <span>32 Posts</span></a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav> */}

      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {renderMenuItems(items)}
        </ul>
      </nav>
    </header>
      {/* <header className="header">
        <nav>
          <div className="sidebar-logo">
            <img src="https://static.wixstatic.com/media/5de23b_e01406cc80994153b5a207d3a40d4d2c~mv2.png/v1/fill/w_262,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5de23b_e01406cc80994153b5a207d3a40d4d2c~mv2.png" />
          </div>

          <div className="nav-menu">
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={
                  item.submenu ? "menu-item has-sub-menu" : "menu-item"
                }
              >
                <a href={item.href}>{item.label}</a>
                {item.submenu && renderSubMenu(item.submenu)}
              </li>
            ))}
          </ul>

          </div>
        
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </nav>
      </header> */}
    </>
  );
};

export default Header;
