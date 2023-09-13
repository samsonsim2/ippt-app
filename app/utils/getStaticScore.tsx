import { useAppContext } from "../context/AppContext";
import pushupTable from "../data/pushupTable";
import { runScoreTable, runTimes } from "../data/runTable";

import situpTable from "../data/situpTable";

export const getAgeGroup = (age: number): number => {
  let group = 1;

  while (age >= 22) {
    group += 1;
    age -= 3;
  }

  /* 
    Max age group is 14
    */
  if (group > 14) group = 14;

  console.log(group);

  return group;
};

type scoreType = {
    score:number,
    nextPointCounter:number
}

 

export const getStaticScore = (
  station: string,
  reps: number,
  ageGroup: number
): scoreType => {
  const scoreTable = station == "push-up" ? pushupTable : situpTable;
  let score = 0;
  const scoreList = scoreTable[ageGroup - 1];
  score = scoreList[reps - 1];

  /* 
  Get additional reps required for next point
  */
  let nextPointCounter = 0;

  for (const value of scoreList.slice(reps - 1)) {
    if (value == score && score!=25) {
        
      nextPointCounter++;

    } else {
      break;
    }
  }

   

  console.log(nextPointCounter);
  return {score:score,nextPointCounter:nextPointCounter};
};

export const getPushupScore = (reps: number, ageGroup: number): scoreType => {
  const station = "push-up";
  return getStaticScore(station, reps, ageGroup);
};

export const getSitupScore = (reps: number, ageGroup: number): scoreType => {
  const station = "sit-up";
  return getStaticScore(station, reps, ageGroup);
};

export const getRunScore = (time: number, ageGroup: number): scoreType => {
  let score = 0;

  let timeIndex = 0;

  for (let timing of runTimes) {
    if (time <= 510) {
      timeIndex = 60;
      break;
    } else if (time > 1100 || !time) {
      timeIndex = 1;
      break;
    } else if (time > timing) {
      timeIndex = runTimes.indexOf(timing);
      break;
    }
  }
  

  const scoreList = runScoreTable[ageGroup-1];
  score = scoreList[timeIndex - 1];

   /* 
  Get additional reps required for next point
  */
  let nextPointCounter = 0;

  for (const value of scoreList.slice(timeIndex-1)) {
    if (value == score && score!=50  ) {
      nextPointCounter++;
    } else {
      break;
    }
  }

   /* 
  Multiply by 10 because there is a difference of 10 seconds between each
  score on the score table 
  */
  nextPointCounter = nextPointCounter * 10;
console.log(nextPointCounter)
  console.log(timeIndex);
  console.log(scoreList);
  console.log(score);

return {score:score,nextPointCounter:nextPointCounter};
};

export const calcTimeInSecs = (mins: number, secs: number): number => {
  const time = mins * 60 + secs;

  return time;
};
