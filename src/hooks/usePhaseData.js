import { useState, useEffect } from 'react';
import { phaseData as allPhaseData } from '../data/transformData';

const usePhaseData = (phaseNumber) => {
  const [phaseData, setPhaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Get the data for the specified phase
    const phaseKey = `phase${phaseNumber}`;
    const data = allPhaseData[phaseKey] || [];
    
    // Reverse to match original order (newest first)
    setPhaseData([...data].reverse());
    setIsLoading(false);
  }, [phaseNumber]);

  return { phaseData, isLoading };
};

export default usePhaseData;
