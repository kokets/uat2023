import React from "react";
import {
  Header,
  HeroSection,
  Policy,
  Welcome,
  Campaigns,
  Media,
  Newsletter,
  Footer,
  Copyright,
  News,
} from "../../components";
import { motion } from "framer-motion";

import {
  President,
  Treasure,
  Banner,
  DP,
  Chairperson,
} from "../../assets/index";

import "./Leadership.scss";
const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "About",
    link: "#",
    subItems: [
      { name: "Vision", link: "/AboutUat" },
      { name: "Our leaders", link: "/Leadership" },
    ],
  },
//   {
//     name: "Newsroom",
//     link: "#",
//     subItems: [
//       { name: "News", link: "#" },
//       { name: "Newsletter", link: "#" },
//     ],
//   },
//   { name: "Policy ", link: "#" },
//   // { name: "Get ", link: "#" },
//   { name: "Contact", link: "#" },

  // {
  //   name: 'Services', link: '#', subItems: [
  //     { name: 'Web Development', link: '#' },
  //     { name: 'Web Design', link: '#' },
  //     { name: 'SEO', link: '#' },
  //     {
  //       name: 'Mobile App Development', link: '#', subItems: [
  //         { name: 'React Native', link: '#' },
  //         { name: 'Flutter', link: '#' },
  //         { name: 'Swift', link: '#' },
  //         { name: 'Java', link: '#' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: 'Blog', link: '#', subItems: [
  //     { name: 'HTML', link: '#' },
  //     { name: 'CSS', link: '#' },
  //     { name: 'JavaScript', link: '#' },
  //     { name: 'Design', link: '#' },
  //   ],
  // },
  // { name: 'Contact', link: '#' },
];
const Leadership = () => {
  return (
    <main className="home">
      <Header items={menuItems} />
      <div className="heroSection-Leadership">
        <h1> LEADERSHIP</h1>
      </div>
      <div className="Leadership">
        <div className="leadership-header-title">
          <h1> NATIONAL EXECUTIVE COMMITTEE</h1>
        </div>

        <div className="committee">
          <motion.div
            className="committeeImage"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* <div className="mainImageWrapper"> */}
            <img src={President} className="leaderImage" />

            <div className="leaderDetails">
              <h3>Dr Bantu Wonder Mahlatsi</h3>
              <p>President</p>
            </div>
          </motion.div>
          <motion.div
            className="committeeImage"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* <div className="mainImageWrapper"> */}
            <img src={DP} className="leaderImage" />

            <div className="leaderDetails">
              <h3>Dorah Moloi</h3>
              <p>Deputy President</p>
            </div>
          </motion.div>
          <motion.div
            className="committeeImage"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* <div className="mainImageWrapper"> */}
            <img src={Chairperson} className="leaderImage" />

            <div className="leaderDetails">
              <h3>Kagiso Diphoko</h3>
              <p>Chairperson</p>
            </div>
          </motion.div>
          <motion.div
            className="committeeImage"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* <div className="mainImageWrapper"> */}
            <img src={Banner} className="leaderImage" />

            <div className="leaderDetails">
              <h3>Dr Bantu Wonder Mahlatsi</h3>
              <p>President</p>
            </div>
          </motion.div>
          <motion.div
            className="committeeImage"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* <div className="mainImageWrapper"> */}
            <img src={Banner} className="leaderImage" />

            <div className="leaderDetails">
              <h3>Dolly Mametja</h3>
              <p>Deputy Secretary-General</p>
            </div>
          </motion.div>
          <motion.div
            className="committeeImage"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* <div className="mainImageWrapper"> */}
            <img src={Treasure} className="leaderImage" />

            <div className="leaderDetails">
              <h3>Tshegofatso Matlhare</h3>
              <p>Treasurer-General</p>
            </div>
          </motion.div>
         
        </div>
      </div>
      <Footer />
      <Copyright />
    </main>
  );
};

export default Leadership;
