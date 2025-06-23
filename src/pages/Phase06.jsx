import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import usePhaseData from "../hooks/usePhaseData";
import parse from "html-react-parser";
import { useAudioPlayer } from "react-use-audio-player";

const Phase06 = () => {
  const { phaseData, isLoading } = usePhaseData(6);

  const Entry = ({name, data }) => {

    return(
      <div>
        <h3>{data[`${name}_title`]}</h3>
          {parse(data[`${name}_description`])}
          <Player url={data[`${name}_audio_file`]} />
      </div>
    )

    console.log(name, data);
  }

  const Player = ({ url }) => {
    const [currentSong, setCurrentSong] = useState(0);
    const { togglePlayPause, stop, playing, load, getPosition } =
      useAudioPlayer();

    useEffect(() => {
      load([currentSong], {
        autoplay: true,
      });
    }, [currentSong, load]);

    const frameRef = useRef();
    const [pos, setPos] = useState(0);

    useEffect(() => {
      const animate = () => {
        setPos(getPosition());
        frameRef.current = requestAnimationFrame(animate);
      };

      frameRef.current = window.requestAnimationFrame(animate);

      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
      };
    }, [getPosition]);

    return (
      <div
        className="Player"
        style={{
          border: playing ? "1px solid red" : "1px solid gray",
        }}
      >
        <p>0:{pos.toFixed(0).padStart(2, "0")}</p>

        <button
          onClick={() => {
            if (!currentSong) {
              setCurrentSong(url);
            } else {
              togglePlayPause();
            }
          }}
        >
          {playing ? "PAUSE" : "PLAY"}
        </button>
        <button
          onClick={() => {
            stop();
          }}
        >
          <p>RESET</p>
        </button>
      </div>
    );
  };

  return (
    <Layout name="Phase06"  mode="dark">
      <div className="Phase06__Title">{/* <img src={Phase06Logo} /> */}</div>
      <div className="Phase06__Content">
        {isLoading ? (
          <p>Loading...</p> // Show loading text when isLoading is true
        ) : phaseData ? (
          <div className="Phase06__Prompts">
            {phaseData.map((prompt, i) => (
              <div key={`clip${i}`} className={`Phase06__${prompt.slug}`}>
                <h3><span style={{fontSize: 100}}>{prompt.emoji}</span> - {prompt.title}</h3>
                <Entry name="nate" data={prompt.nate} />
                <Entry name="sanju" data={prompt.sanju} />

              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Phase06;
