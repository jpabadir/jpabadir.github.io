import { useLayoutEffect, useState } from 'react';
import './Home.css';

export default function Home() {
  const [videoHeight, setVideoHeight] = useState(300);

  useLayoutEffect(() => {
    function updateVideoHeight() {
      setVideoHeight(document.getElementById('myVideo').offsetWidth / 1.78);
    }
    window.addEventListener('resize', updateVideoHeight);
    updateVideoHeight();
    return () => window.removeEventListener('resize', updateVideoHeight);
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <p>Welcome to my website!</p>
            <p>My name is JP. I'm a software engineer, and I also like to do other stuff, like create content and invest in stocks.</p>
          </div>
          <div className="col-12 col-lg-6">
            <iframe
              width="100%"
              height={videoHeight}
              src="https://www.youtube-nocookie.com/embed/OBzSOglT6U4?controls=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              id="myVideo"
              className="StaticShadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
