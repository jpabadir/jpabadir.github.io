import React from "react";

const DateTimeSince = () => {
  const [seconds, setSeconds] = React.useState(12);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {(() => {
        const e = Math.abs(new Date() - new Date("January 7, 2016"));
        const t = Math.floor(e / 31557600000);
        const n = Math.floor((e % 31557600000) / 2629800000);
        const r = Math.floor((e % 2629800000) / 86400000);
        const a = Math.floor((e % 86400000) / 3600000);

        return (
          <div style={{ color: "darkblue", fontWeight: 800 }}>
            <br />
            {t} years, {n} months, {r} days, {a} hours,{" "}
            {Math.floor((e % 3600000) / 60000)} minutes, and {seconds} seconds.
          </div>
        );
      })()}
    </div>
  );
};

export default function WhatImListeningTo() {
  return (
    <div>
      <div>
        Since I'm 15, I've been adding all the songs I like to one single
        playlist. I'd embed it here but I'm too lazy to make an API integration.
        So here's a link to it for now.
      </div>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://open.spotify.com/playlist/0tNZxeXarPcCifpcHivzRW?si=6996b223ee2e4883"
      >
        The playlist
      </a>
      <br />
      <br />
      <div>
        In consolation, here's a gimmicky JS thing that shows how long it's been
        since I've been maintaining that playlist.
      </div>
      <DateTimeSince />
    </div>
  );
}
