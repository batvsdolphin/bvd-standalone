import React, { useEffect, useRef } from "react";

const Phase01Entry = ({ data, count }) => {
  const { nate, sanju } = data;

  const sanjuAudioRef = useRef(null);
  const nateAudioRef = useRef(null);

  const handleAudioPlay = (audioRef) => {
    audioRef.current.play();
  };

  const handleAudioPause = (audioRef) => {
    audioRef.current.pause();
  };

  return (
    <li className="Phase01Entry">
      <div className="EntryContent">
        <div className="Hidden">
          <div className="EntryTitle">Day {count + 1}</div>
        </div>
        <div className="EntryLeft">
          <div className="AudioEntry" title="">
            <audio
              ref={sanjuAudioRef}
              src={sanju.audio}
              preload="auto"
            ></audio>
            <div
              className="AudioCircle hvr-pulse"
              style={{ borderColor: sanju.color }}
              title={sanju.description}
              onMouseEnter={() => handleAudioPlay(sanjuAudioRef)}
              onMouseLeave={() => handleAudioPause(sanjuAudioRef)}
            ></div>
            <div className="Hidden">
              <div className="AudioTitle" style={{ color: sanju.color }}>
                {sanju.sound_title}
              </div>
              <div className="AudioName">sanju</div>
            </div>
          </div>
        </div>
        <div className="EntryRight">
          <div className="AudioEntry" title="">
            <audio
              ref={nateAudioRef}
              src={nate.audio}
              preload="auto"
            ></audio>
            <div
              className="AudioCircle hvr-pulse"
              style={{ borderColor: nate.color }}
              title={nate.description}
              onMouseEnter={() => handleAudioPlay(nateAudioRef)}
              onMouseLeave={() => handleAudioPause(nateAudioRef)}
            ></div>
            <div className="Hidden">
              <div className="AudioTitle" style={{ color: nate.color }}>
                {nate.sound_title}
              </div>
              <div className="AudioName">nate</div>
            </div>
          </div>
        </div>
      </div>
      <div className="EntryShim"></div>
    </li>
  );
};

export default Phase01Entry;
