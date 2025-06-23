import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import usePhaseData from "../hooks/usePhaseData";
import parse from "html-react-parser";

const Phase04 = () => {
  const { phaseData, isLoading } = usePhaseData(4);
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    console.log(phaseData);
  }, [phaseData]);

  const ChapterLink = ({ chapterData, number }) => {
    return (
      <li key={`title-${number}`} className={ currentChapter === number ? 'is--active' : null }>
        <a
          className="Phase04__ChapterLink"
          onClick={() => {
            setCurrentChapter(number);
          }}
        >
          <h3>{chapterData.title}</h3>
          <p>{chapterData.author}</p>
        </a>
      </li>
    );
  };

  return (
    <Layout name="Phase04"  mode="light">
      <div className="Phase04__Title">
        <img src="/img/phase04/object-stories.png" alt="Object stories" />

      </div>
      <div className="Phase04__Content">
        {isLoading ? (
          <p>Loading...</p> // Show loading text when isLoading is true
        ) : phaseData ? (
          <div className="Phase04__Chapter">
            <ul className="Phase04__SideNav">
              {phaseData.map((chapterData, i) => (
                <ChapterLink
                  key={`chapterLink${i}`}
                  chapterData={chapterData}
                  number={i}
                />
              ))}
            </ul>
            <div className="Phase04__ChapterContent">
              <img src={phaseData[currentChapter].object_photo.src} />
              {parse(phaseData[currentChapter].story)}
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Phase04;
