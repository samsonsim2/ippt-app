import { useState, useEffect, useReducer, useContext, useRef } from "react";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  calcTimeInSecs,
  getPushupScore,
  getRunScore,
  getSitupScore,
  getStaticScore,
} from "../utils/getStaticScore";
 
type Time = {
  mins: number;
  secs: number;
};

type AppContextType = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;

  ageGroup: number;
  setAgeGroup: React.Dispatch<React.SetStateAction<number>>;

  pushupReps: number;
  setPushupReps: React.Dispatch<React.SetStateAction<number>>;

  pushupScore: number;
  setPushupScore: React.Dispatch<React.SetStateAction<number>>;

  pushupNextPoint: number;
  setPushupNextPoint: React.Dispatch<React.SetStateAction<number>>;


  situpReps: number;
  setSitupReps: React.Dispatch<React.SetStateAction<number>>;

  situpScore: number;
  setSitupScore: React.Dispatch<React.SetStateAction<number>>;

  situpNextPoint: number;
  setSitupNextPoint: React.Dispatch<React.SetStateAction<number>>;


  setReps: any;

  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;

  runScore:number;
  setRunScore:React.Dispatch<React.SetStateAction<number>>;

  runNextPoint:number;
  setRunNextPoint: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = React.createContext<AppContextType | null>(null);

// Create Provider
const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [ageGroup, setAgeGroup] = useState(1);

  const [pushupReps, setPushupReps] = useState(1);
  const [pushupScore, setPushupScore] = useState(0);
  const [pushupNextPoint,setPushupNextPoint]=useState(0)

  const [situpReps, setSitupReps] = useState(1);
  const [situpScore, setSitupScore] = useState(0);
  const [situpNextPoint,setSitupNextPoint]=useState(0)

  const [time, setTime] = useState<Time>({ mins: 18, secs:30 });
  const [timeInSecs,setTimeInSecs]= useState(0)
  const [runScore, setRunScore] = useState(0);
  const [runNextPoint,setRunNextPoint]=useState(0)


  const limitReps = (reps: number): number => {
    if (!reps || reps == 0) {
      return 1;
    } else if (reps > 60) {
      return 60;
    } else {
      return reps;
    }
  };

  const setReps = (station: string, reps: number): void => {
    let newReps = limitReps(reps);

    if (station == "push-up") {
      setPushupReps(newReps);
      console.log(typeof pushupReps);
    }

    if (station == "sit-up") {
      setSitupReps(newReps);
    }
  };

  useEffect(() => {
    setPushupScore(getPushupScore(pushupReps, ageGroup).score);
    setPushupNextPoint(getPushupScore(pushupReps, ageGroup).nextPointCounter)
    setSitupScore(getSitupScore(situpReps, ageGroup).score);
    setSitupNextPoint(getSitupScore(situpReps, ageGroup).nextPointCounter)
    setTimeInSecs(calcTimeInSecs(time.mins,time.secs))
    setRunScore(getRunScore(timeInSecs,ageGroup).score)
    setRunNextPoint(getRunScore(timeInSecs,ageGroup).nextPointCounter)
    setScore(pushupScore + situpScore + runScore);
  }, [pushupReps, ageGroup, pushupScore, situpReps, situpScore,time,timeInSecs,runScore]);

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        ageGroup,
        setAgeGroup,
        pushupReps,
        setPushupReps,
        pushupScore,
        setPushupScore,
        pushupNextPoint,
        setPushupNextPoint,
        situpReps,
        setSitupReps,
        situpScore,
        setSitupScore,
        situpNextPoint,
        setSitupNextPoint,
        setReps,
        time,
        setTime,
        runScore,
        setRunScore,
        runNextPoint,
        setRunNextPoint,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
