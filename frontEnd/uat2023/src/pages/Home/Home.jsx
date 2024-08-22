import React from "react";
import { Header,HeroSection,Policy ,Welcome,Campaigns,Media,Newsletter,Footer,Copyright,News} from "../../components";
import './Home.css'
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
    name: "Newsroom",
    link: "#",
    subItems: [
      { name: "News", link: "#" },
      { name: "Newsletter", link: "#" },
    ],
  },
  { name: "Policy ", link: "#" },
  // { name: "Get ", link: "#" },
  { name: "Contact", link: "#" },

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
    <main className="home">
        <Header items={menuItems} />
        <HeroSection/>
      <Welcome/>
      <News/>
      <Policy/>
      <div className="middleBanner">
      <button>Join Change</button>
      </div>
      <Media/>
     
      <Footer/>
      <Copyright/>
    </main>
  );
};

export default Home;
