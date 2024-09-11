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
import "./AboutUat.scss";
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
  // {
  //   name: "Newsroom",
  //   link: "#",
  //   subItems: [
  //     { name: "News", link: "#" },
  //     { name: "Newsletter", link: "#" },
  //   ],
  // },
  // { name: "Policy ", link: "#" },
  // // { name: "Get ", link: "#" },
  // { name: "Contact", link: "#" },

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
const AboutUat = () => {
  return (
    <main className="home">
      <Header items={menuItems} />
      <div className="heroSection-Vision">
        <h1> VISION FOR SOUTH SOUTH AFRICA</h1>
      </div>
      <div className="vision">
        <section>
          <h2>Economic Inclusion and Empowerment</h2>
          <p>
            In a country where Africans are generally excluded from the
            mainstream economy, UAT strives for{" "}
            <strong>inclusivity, empowerment, and ownership</strong> of the
            economy by the majority of Africans. Addressing this exclusion
            head-on will pave the way for a future where Africans have the
            opportunity to thrive.
          </p>
        </section>
        <section>
          <h2>Strengthening Social Services</h2>
          <p>
            To strengthen our <strong>sovereignty as a nation</strong>, we must
            build robust social services that cater to all citizens. This
            includes:
          </p>
          <ul>
            <li>
              Ensuring access to <strong>basic nutritious food parcels</strong>.
            </li>
            <li>
              Providing <strong>quality healthcare</strong> and education.
            </li>
            <li>
              Investing in <strong>trade schools</strong>.
            </li>
            <li>
              Promoting the growth of <strong>traditional organic foods</strong>
              .
            </li>
            <li>
              Creating <strong>funding support systems</strong> to build a more
              resilient society.
            </li>
          </ul>
        </section>
        <section>
          <h2>Zero-Corruption and Crime Prevention</h2>
          <p>
            <strong>Zero corruption</strong> should be our guiding principle. To
            tackle crime, which threatens the nation’s stability and peace, we
            must:
          </p>
          <ul>
            <li>
              Strengthen law enforcement with{" "}
              <strong>increased police presence</strong>.
            </li>
            <li>
              Utilize <strong>advanced surveillance technology</strong>.
            </li>
            <li>
              Implement <strong>judicial reforms</strong>.
            </li>
            <li>
              Promote <strong>transparency and accountability</strong> at all
              levels of governance.
            </li>
          </ul>
          <p>
            This will build trust among our people and attract investment for{" "}
            <strong>sustainable development</strong>.
          </p>
        </section>

        <section>
          <h2>Investing in Infrastructure</h2>
          <p>
            Investing in <strong>infrastructure</strong> is vital to unlocking
            the nation's potential. This includes:
          </p>
          <ul>
            <li>
              <strong>Reliable power generation</strong>.
            </li>
            <li>
              Efficient <strong>transportation networks</strong>.
            </li>
            <li>
              <strong>Industrialising townships and rural economies</strong> to
              connect communities and foster economic growth.
            </li>
          </ul>
        </section>

        <section>
          <h2>Pan-African Emancipation</h2>
          <p>
            As a <strong>Pan-African movement</strong>, UAT strives for the
            total <strong>emancipation of Africa</strong> from{" "}
            <strong>neo-colonialism</strong> policies that undermine our
            sovereignty. Our goal is to free Africans from the shackles of{" "}
            <strong>30 years of democratic illusion</strong>.
          </p>
        </section>
      </div>
      <Footer />
      <Copyright />
    </main>
  );
};

export default AboutUat;
