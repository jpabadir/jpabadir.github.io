import { useState } from 'react';
import './AIArt.css';

// First of 155 pics batch made on October 26, 2022
export default function AIArt() {
  function toggleScaleThumbnail(event) {
    event.currentTarget.getElementsByTagName('img')[0].classList.toggle('BlogThumbnailScaled');
  }

  const [userSetMaxWidth, setUserSetMaxWidth] = useState(300);
  const [easterEggAlreadyShown, setEasterEggAlreadyShown] = useState(false);

  function handleSliderChange(event) {
    setUserSetMaxWidth(event.target.value);

    if(!easterEggAlreadyShown) {
      document.getElementById('easterEgg').style.opacity = 1;
      setEasterEggAlreadyShown(true);
      setTimeout(hideEasterEgg, 5000);
    }
  }

  function hideEasterEgg() {
    document.getElementById('easterEgg').style.opacity = 0;
  }


  return (
    <div>
      <h1>A bit of AI Art I made with <a target="_blank" href="https://openai.com/dall-e-2/">DALL·E 2</a></h1>
      <h4>I like industrial landscapes and cyberpunk-looking stuff, so here you go, have like hundreds of pictures of it.</h4>
      <div>
        <input type="range" min="20" max="1000" value={userSetMaxWidth} className="slider" id="myRange" onChange={handleSliderChange} style={{ scale: '1.5' }} />{<div style={{ opacity: 0, transition: '1000ms' }} id="easterEgg">Good job, you discovered a functionality without it being explicitly labelled. You should be a software engineer.</div>}
      </div>
      {Array.from(Array(155).keys()).map(number => {
        const url = `/assets/ai-art/AI-Art-image-${number}.png`

        return <span key={url} onMouseEnter={toggleScaleThumbnail} onMouseLeave={toggleScaleThumbnail} style={{ overflow: 'hidden', display: 'inline-block', borderRadius: '15px' }} className="p-2">
          <a target="_blank" href={url}>
            <img src={url} style={{ width: `${userSetMaxWidth}px`, maxWidth: '100%', borderRadius: '15px', transition: '300ms' }} />
          </a>
        </span>
      })}
    </div >
  );
}
