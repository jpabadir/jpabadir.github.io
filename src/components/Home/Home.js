import { useLayoutEffect, useState } from "react";
import "./Home.css";
import { Outlet, NavLink } from "react-router-dom";
import { linkify } from "../../helpers";

export default function Home() {
  const navItems = [
    // {
    //   name: "YouTube",
    //   link: "https://www.youtube.com/channel/UCliwHW2THGTsKwNvNcF_Nlw",
    // },
    // { name: "Articles" },
    { name: "Twitter", link: "https://twitter.com/jpabadir" },
    { name: "Books I've read", link: "books-i-read" },
    // { name: "Countries I've been to", link: "countries" },
    // { name: "Investment Portfolio" },
    // { name: "Newsletter" },
    { name: "AI Art" },
    // { name: "All the stuff I launched" },
    { name: "What I'm listening to", link: "what-im-listening-to" },
    { name: "Github", link: "https://github.com/jpabadir" },
    { name: "LinkedIn", link: "https://linkedin.com/in/jpabadir" },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {navItems.map((item) => {
            return (
              <div>
                {item.link && item.link.includes("https") ? (
                  <a
                    key={item.name}
                    target="_blank"
                    rel="noopener"
                    className="Link NavLink"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.link ? item.link : linkify(item.name)}
                    className="Link NavLink"
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            );
          })}
          {/* <iframe
            width="100%"
            height={videoHeight}
            src="https://www.youtube-nocookie.com/embed/f-lWdbBqrXk?controls=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="myVideo"
            className="StaticShadow"
          /> */}
        </div>
      </div>
    </div>
  );
}
