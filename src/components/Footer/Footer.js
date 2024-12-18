import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  audio.autoplay = false;
  audio.src = url;

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Footer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button className="btn-neon mb-4" onClick={toggle}>
        {playing ? "Pause music" : "Play music"}
      </button>
      {
        <div style={{ opacity: playing ? 1 : 0, transition: "200ms" }}>
          <div className="neon-text flicker" style={{ fontSize: "16px" }}>
            NOW PLAYING: TIGGI HAWKE - HIGH SEASON
          </div>
        </div>
      }
    </div>
  );
};

export default Footer;
