import Layout from "../components/Layout";
import Phase01Entry from "../components/phase01/Phase01Entry";
import usePhaseData from "../hooks/usePhaseData";

const Phase01 = () => {

  const { phaseData, isLoading } = usePhaseData(1);

  return (
    <Layout name="Phase01" mode="light">
      <div className="Phase01__Title">
        <img src="/img/phase01/ten-seconds.png" alt="Ten Seconds" />
      </div>
      <div className="Phase01__Entries">
        {isLoading ? (
          <p>Loading...</p> // Show loading text when isLoading is true
        ) : phaseData ? (
          phaseData.map((item, i) => <Phase01Entry key={`phaseItem${i}`} data={item} count={i} />)
        ) : null}
      </div>
    </Layout>
  );
};

export default Phase01;
