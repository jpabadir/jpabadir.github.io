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
    // { name: "Articles" },
    { name: "X", link: "https://twitter.com/jpabadir" },
    // { name: "Books I've read", link: "books-i-read" },
    {
      name: "Goodreads",
      link: "https://www.goodreads.com/user/show/183330985-jean-philippe-abadir",
    },
    { name: "Athletics" },
    { name: "Places I've been", link: "places" },
    { name: "Investment Portfolio" },
    // { name: "Newsletter" },
    { name: "AI Art" },
    // { name: "All the stuff I launched" },
    { name: "What I'm listening to", link: "what-im-listening-to" },
    { name: "GitHub", link: "https://github.com/jpabadir" },
    // { name: "The Brag Doc" },
    { name: "LinkedIn", link: "https://linkedin.com/in/jpabadir" },
    {
      name: "A sweet little riddle. No one's solved it yet! Give it a shot.",
      link: "https://x.com/jpabadir/status/1451630095773356032",
    },
  ];

  const [clickCount, setClickCount] = useState(0);

  function showEasterEgg() {
    document.getElementById("easterEgg").style.opacity = 1;
    setTimeout(hideEasterEgg, 1000);
  }

  function hideEasterEgg() {
    if (!document.getElementById("easterEgg")) return;
    if (clickCount < 9) {
      document.getElementById("easterEgg").style.opacity = 0;
    }
    if (clickCount == 0) {
      setClickCount((clickCount) => clickCount + 1);
    } else {
      setTimeout(() => setClickCount((clickCount) => clickCount * 2), 1000);
    }
  }

  var renderStuff;
  if (clickCount == 0) {
    renderStuff = (
      <div>
        Well, how about you show me your personal website? Is it better? Yeah,
        didn't think so.
      </div>
    );
  } else {
    renderStuff = <div>{new Array(clickCount).fill("🖕")}</div>;
  }

  return (
    <div className="container">
      <div
        className="text-muted"
        id="easterEgg"
        style={{ transition: "500ms", opacity: 0 }}
      >
        {renderStuff}
      </div>
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
        {/* <div className="text-muted mt-5">
          Somewhere on this website, there's a neat little demonstration of
          compound interest. Can you find it?
        </div> */}
      </div>
      <div className="row" style={{ marginTop: "120px" }}>
        <h5 style={{ color: "rgb(100,100,100)", fontSize: "12px" }}>
          If you think my site's ugly, you should check out{" "}
          <a href="https://www.paulgraham.com/" target="_blank" rel="noopener">
            Paul Graham's
          </a>
          . If he can make billions with that, surely I can make millions with
          this.
        </h5>
      </div>
    </div>
  );
}
