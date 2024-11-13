import { useLayoutEffect, useState } from "react";
import "./Home.css";
import { Outlet, NavLink } from "react-router-dom";
import { linkify } from "../../helpers";

export default function Home() {
  const navItems = [
    { name: "North P&D", link: "https://northpnd.com" },
    // { name: "isitwf.com", link: "https://isitwf.com" },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCliwHW2THGTsKwNvNcF_Nlw",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/jpabadir",
    },
    { name: "Writing" },
    { name: "All the stuff I launched" },
    { name: "X", link: "https://twitter.com/jpabadir" },
    {
      name: "Goodreads",
      link: "https://www.goodreads.com/user/show/183330985-jean-philippe-abadir",
    },
    {
      name: "Genius",
      link: "https://genius.com/HipHopWorldwide",
    },
    { name: "Athletics" },
    { name: "Nomad List", link: "https://nomads.com/@jpabadir" },
    { name: "Investment Portfolio" },
    // { name: "Newsletter" },
    // { name: "AI Art" },
    { name: "What I'm listening to", link: "what-im-listening-to" },
    { name: "GitHub", link: "https://github.com/jpabadir" },
    // { name: "The Brag Doc" },
    { name: "LinkedIn", link: "https://linkedin.com/in/jpabadir" },
    {
      name: "A sweet little riddle. No one's solved it yet! Give it a shot.",
      link: "https://x.com/jpabadir/status/1451630095773356032",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {navItems.map((item) => {
            return (
              <div key={item.name}>
                {item.link && item.link.includes("https") ? (
                  <a
                    key={item.name}
                    target="_blank"
                    rel="noopener"
                    className={`Link NavLink text-glow`}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.link ? item.link : linkify(item.name)}
                    className={`Link NavLink text-glow`}
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
