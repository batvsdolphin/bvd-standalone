import { useState, useRef } from "react";
import Layout from "../components/Layout";
import usePhaseData from "../hooks/usePhaseData";
import parse from "html-react-parser";

const Phase05 = () => {
  const { phaseData, isLoading } = usePhaseData(5);

  const Player = ({ url }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlay = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play().catch((error) => {
            console.log("Audio play error:", error);
            alert("Audio file not available");
          });
          setIsPlaying(true);
        }
      }
    };

    const handleStop = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || 0);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    return (
      <div
        className="Player"
        style={{
          border: isPlaying ? "1px solid #D0021B" : "1px solid #eee",
        }}
      >
        <audio
          ref={audioRef}
          src={url}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
          preload="metadata"
        />
        <p>
          {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </p>
        <button className="Button" onClick={handlePlay}>
          {isPlaying ? "PAUSE" : "PLAY"}
        </button>
        <button className="Button" onClick={handleStop}>
          RESET
        </button>
      </div>
    );
  };

  return (
    <Layout name="Phase05 Phase-V" mode="light">
      <div className="Phase-V__Title">
        <img src="/img/phase05/bar-none-title.png" alt="Bar None" />
      </div>
      <main>
        <ul className="Entries">
          {isLoading ? (
            <p>Loading...</p>
          ) : phaseData ? (
            phaseData.map((clip, i) => (
              <li className="Entry" key={`clip${i}`}>
                <div className="Entry__Title">{clip.title}</div>
                <div className="Entry__Author">{clip.author}</div>
                <div className="Entry__Description">
                  {parse(clip.description)}
                </div>
                <Player url={clip.audio_file} />
              </li>
            ))
          ) : null}
        </ul>
      </main>
    </Layout>
  );
};

export default Phase05;
