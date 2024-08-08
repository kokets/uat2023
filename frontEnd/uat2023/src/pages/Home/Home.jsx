import React from "react";
import { Header,HeroSection,Waves ,Welcome,Campaigns,Projects,ServiceDelivery} from "../../components";

const menuItems = [
  { name: "Home", link: "#" },
  {
    name: "About",
    link: "#",
    subItems: [
      { name: "Vision", link: "#" },
      { name: "Our leaders", link: "#" },
    ],
  },
  {
    name: "Campaigns",
    link: "#",
    subItems: [
      { name: "Projects", link: "#" },
      { name: "Events", link: "#" },
    ],
  },
  { name: "Policy Platform", link: "#" },
  { name: "Get Involved", link: "#" },
  { name: "Contact Us", link: "#" },

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

const Home = () => {
  return (
    <main>
      <section>
        <Header items={menuItems} />
     
        <HeroSection/>


      <Waves/>
      <Welcome/>
      <ServiceDelivery/>
      {/* <Projects/> */}
      <Campaigns/>
      </section>
    </main>
  );
};

export default Home;
