import React, { useEffect, useRef, useState } from "react";

const Phase01Entry = ({ data, count }) => {
  const { nate, sanju } = data;

  const sanjuAudioRef = useRef(null);
  const nateAudioRef = useRef(null);
  const sanjuTimerRef = useRef(null);
  const nateTimerRef = useRef(null);

  const [sanjuCountdown, setSanjuCountdown] = useState(0);
  const [nateCountdown, setNateCountdown] = useState(0);

  const handleAudioPlay = (audioRef, setCountdown, timerRef) => {
    audioRef.current.play();
    setCountdown(10);
    
    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAudioPause = (audioRef, setCountdown, timerRef) => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCountdown(0);
    clearInterval(timerRef.current);
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
              onMouseEnter={() => handleAudioPlay(sanjuAudioRef, setSanjuCountdown, sanjuTimerRef)}
              onMouseLeave={() => handleAudioPause(sanjuAudioRef, setSanjuCountdown, sanjuTimerRef)}
            >
              {sanjuCountdown > 0 && (
                <div className="CountdownTimer" style={{ color: sanju.color }}>
                  :{sanjuCountdown.toString().padStart(2, '0')}
                </div>
              )}
            </div>
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
              onMouseEnter={() => handleAudioPlay(nateAudioRef, setNateCountdown, nateTimerRef)}
              onMouseLeave={() => handleAudioPause(nateAudioRef, setNateCountdown, nateTimerRef)}
            >
              {nateCountdown > 0 && (
                <div className="CountdownTimer" style={{ color: nate.color }}>
                  :{nateCountdown.toString().padStart(2, '0')}
                </div>
              )}
            </div>
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
