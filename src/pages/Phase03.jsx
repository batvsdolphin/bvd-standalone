import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import usePhaseData from "../hooks/usePhaseData";
import parse from "html-react-parser";

const Phase03 = () => {
  const [selected, setSelected] = useState(0);
  const [showResponse, setShowResponse] = useState(null); // 'show_sanju' | 'show_nate' | null
  const { phaseData, isLoading } = usePhaseData(3);

  useEffect(() => {
    setShowResponse(null); // Reset response when changing selection
  }, [selected]);

  // Use original classnames for containers, but keep <img> for images
  const Grid = () => (
    <div className="III-Grid js-grid">
      <ul>
        {phaseData.map((item, i) => (
          <li key={i} data-id={item.id}>
            <img
              className="image"
              src={item.image.thumbnail}
              alt={item.sanju.title || `Blot ${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              onClick={() => setSelected(i + 1)}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  const Selection = () => {
    const current = phaseData[selected - 1];
    return (
      <div
        className={`III-Single III-Single-Width${
          showResponse ? " " + showResponse : ""
        }`}
      >
        <div className="III-Entry-Buttons">
          <button
            className={`js-show-response${
              showResponse === "show_sanju" ? " is-Showing" : ""
            }`}
            data-show="show_sanju"
            onClick={() =>
              setShowResponse(
                showResponse === "show_sanju" ? null : "show_sanju"
              )
            }
          >
            <small>Sanju</small>
            <h4>{current.sanju.title}</h4>
          </button>
          <button
            className={`js-show-response${
              showResponse === "show_nate" ? " is-Showing" : ""
            }`}
            data-show="show_nate"
            onClick={() =>
              setShowResponse(showResponse === "show_nate" ? null : "show_nate")
            }
          >
            <small>Nate</small>
            <h4>{current.nate.title}</h4>
          </button>
          <div className="u-clearboth"></div>
        </div>
        <div className="III-Response III-Response-Sanju">
          <div className="ResponseText js-responseText">
            {parse(current.sanju.response)}
          </div>
          <small>Sanju</small>
        </div>
        <div className="III-Response III-Response-Nate">
          <div className="ResponseText">{parse(current.nate.response)}</div>
          <small>Nate</small>
        </div>
        <div className="III-Response-Image">
          <img
            className="js-postImage"
            src={current.image.src}
            data-id={current.id}
            title={`This one's a ${current.credit}-Blot`}
            alt="Rorschach Blot"
            style={{
              width: showResponse ? "45%" : "75%",
              height: "auto",
              margin: "0 auto",
              display: "block",
              paddingTop: showResponse ? 70 : 50,
            }}
          />
        </div>
        <div className="u-clearboth"></div>
        <div className="III-Nav">
          <div className="III-Single-Width">
            {selected > 1 ? (
              <button
                className="III-Nav-NextPrev III-Nav-Previous js-nav"
                data-id={phaseData[selected - 2]?.id}
                onClick={() => setSelected(selected - 1)}
                aria-label="Previous"
              ></button>
            ) : (
              <div className="III-Nav-NextPrev III-Nav-HoldPrevious"></div>
            )}
            {selected < phaseData.length ? (
              <button
                className="III-Nav-NextPrev III-Nav-Next js-nav"
                data-id={phaseData[selected]?.id}
                onClick={() => setSelected(selected + 1)}
                aria-label="Next"
              ></button>
            ) : (
              <div className="III-Nav-NextPrev III-Nav-HoldNext"></div>
            )}
            <button
              className="III-Nav-Grid js-show-grid"
              onClick={() => setSelected(0)}
              aria-label="Grid"
            ></button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout name="Phase-III" mode="light">
      <div className="Phase-III__Title">
        <img src="/img/phase03/rorschach-title.jpg" alt="Rorschach" />
      </div>
      <main className="Phase-III III-Content u-innerWidth">
        {isLoading ? (
          <p>Loading...</p>
        ) : phaseData ? (
          selected === 0 ? (
            <Grid />
          ) : (
            <Selection />
          )
        ) : null}
      </main>
    </Layout>
  );
};

export default Phase03;
