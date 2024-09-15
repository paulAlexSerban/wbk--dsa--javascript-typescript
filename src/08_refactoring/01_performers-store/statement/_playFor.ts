import { Performance, Play, Plays } from "../types";
import playsJson from "../data/plays.json";

const playFor = (aPerformance: Performance, plays: Plays = playsJson): Play => {
  return plays[aPerformance.playID] 
};

export default playFor;
