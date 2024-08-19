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
  faXTwitter,
  faYoutube,
  faTiktok,
  faInstagram, // Add Instagram icon
} from "@fortawesome/free-brands-svg-icons";
import "../Header/Header.scss";


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
        {item.subItems && <ul>{renderMenuItems(item.subItems)}</ul>}
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
          <a href="https://x.com/UAT2023?t=YxRkEcqqNjnKS00rgpjs4w&s=08" target="_blank" rel="noopener noreferrer" className="social-Icons">
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.instagram.com/myuat_2023/" target="_blank" rel="noopener noreferrer" className="social-Icons">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100088710193134" target="_blank" rel="noopener noreferrer" className="social-Icons">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a href="https://www.youtube.com/@uat2023" target="_blank" rel="noopener noreferrer" className="social-Icons">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="social-Icons">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>

      <header className="header">
        <div className="logo">
          <img src="https://static.wixstatic.com/media/5de23b_e01406cc80994153b5a207d3a40d4d2c~mv2.png/v1/fill/w_262,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5de23b_e01406cc80994153b5a207d3a40d4d2c~mv2.png" />
        </div>{" "}
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
     </div>
        <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <ul>{renderMenuItems(items)}</ul>
          <button className="joinChange">Join Change</button>

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
