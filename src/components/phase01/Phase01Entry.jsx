import React, { useEffect, useRef, useState } from "react";

const Phase01Entry = ({ data, count }) => {
  const { nate, sanju } = data;

  const sanjuAudioRef = useRef(null);
  const nateAudioRef = useRef(null);
  const sanjuTimerRef = useRef(null);
  const nateTimerRef = useRef(null);

  const [sanjuCountdown, setSanjuCountdown] = useState(0);
  const [nateCountdown, setNateCountdown] = useState(0);
  const [sanjuPlaying, setSanjuPlaying] = useState(false);
  const [natePlaying, setNatePlaying] = useState(false);

  // Detect touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const handleAudioPlay = (audioRef, setCountdown, timerRef, setPlaying) => {
    audioRef.current.play();
    setCountdown(10);
    setPlaying(true);

    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAudioPause = (audioRef, setCountdown, timerRef, setPlaying) => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCountdown(0);
    setPlaying(false);
    clearInterval(timerRef.current);
  };

  const handleAudioToggle = (audioRef, setCountdown, timerRef, isPlaying, setPlaying) => {
    if (isPlaying) {
      handleAudioPause(audioRef, setCountdown, timerRef, setPlaying);
    } else {
      handleAudioPlay(audioRef, setCountdown, timerRef, setPlaying);
    }
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
              {...(!isTouchDevice && {
                onMouseEnter: () => handleAudioPlay(sanjuAudioRef, setSanjuCountdown, sanjuTimerRef, setSanjuPlaying),
                onMouseLeave: () => handleAudioPause(sanjuAudioRef, setSanjuCountdown, sanjuTimerRef, setSanjuPlaying)
              })}
              {...(isTouchDevice && {
                onClick: () => handleAudioToggle(sanjuAudioRef, setSanjuCountdown, sanjuTimerRef, sanjuPlaying, setSanjuPlaying)
              })}
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
              {...(!isTouchDevice && {
                onMouseEnter: () => handleAudioPlay(nateAudioRef, setNateCountdown, nateTimerRef, setNatePlaying),
                onMouseLeave: () => handleAudioPause(nateAudioRef, setNateCountdown, nateTimerRef, setNatePlaying)
              })}
              {...(isTouchDevice && {
                onClick: () => handleAudioToggle(nateAudioRef, setNateCountdown, nateTimerRef, natePlaying, setNatePlaying)
              })}
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
