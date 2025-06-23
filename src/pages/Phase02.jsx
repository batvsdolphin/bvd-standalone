import { useState } from "react";
import Layout from "../components/Layout";
// import Phase02Logo from "./../img/phase02/panels-title.png";
import usePhaseData from "./../hooks/usePhaseData"

const Phase02 = () => {
  const [currentComic, setCurrentComic] = useState(0);
  const comicTitles = [
    "Droid Sans Mono",
    "Pole & Dot",
    "The Murderous Lighthouse",
  ];

  const { phaseData, isLoading } = usePhaseData(2);

  return (
    <Layout name="Phase02"  mode="light">
      <div className="Phase02__Title">
        <img src="/img/phase02/panels-title.png" alt="Panels" />
      </div>
      <div className="Phase02__Entries">
        {isLoading ? (
          <p>Loading...</p> // Show loading text when isLoading is true
        ) : phaseData ? (
          <div>
            <div className="Phase02__ComicTitles">
              <ul>
                {comicTitles.map((title, i) => (
                  <li>
                    <button
                      className={ i === currentComic ? 'isCurrent': null}
                      onClick={() => {
                        setCurrentComic(i);
                      }}
                    >
                      Week {i + 1} - {comicTitles[i]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="Phase02__Panels">
              {phaseData[currentComic].map((item, i) => (
                <img key={i} title={item.img.alt} src={item.img.src} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Phase02;
