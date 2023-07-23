import  styled  from "styled-components";  
import Accordion from "./Accordion";
import { useEffect, useState } from "react";
import DST from "./DST.class";

function DSTForm() {
  const speedOptions=["mi/h","km/h","m/s"],
  distanceOptions=["mm", "cm", "inch", "feet", "yard", "m", "km", "miles"],
  timeOptions=["milliSec","sec","min","hour"];
  const[speed,setSpeed] = useState(0);
  const[distance,setDistance] = useState(0);
  const[time,setTime] = useState(0);
  const[sUnit,setSUnit] = useState(speedOptions[0]);
  const[dUnit,setDUnit] = useState(distanceOptions[0]);
  const[tUnit,setTUnit] = useState(timeOptions[0]); 
  let evaluator = new DST(speed, sUnit, distance, dUnit, time, tUnit);
  const changeSpeed = (s)=>{
    setSpeed(s); 
    evaluator.speed = speed;
   // evaluator.evaluate();
    setSpeed(evaluator.speed); 
    setDistance(evaluator.time); 
    setTime(evaluator.distance); 
    console.log(speed);
    console.log(distance);
  }
  const changeDistance = (s)=>{
    setDistance(s);
    evaluator.distance = distance;
   // evaluator.evaluate();
    setSpeed(evaluator.speed); 
    setDistance(evaluator.time); 
    setTime(evaluator.distance); 
    console.log(speed);
    console.log(distance);
  }
  const changeTime = (s)=>{
    setTime(s);
    evaluator.time = time;
   // evaluator.evaluate();
    setSpeed(evaluator.speed); 
    setDistance(evaluator.time); 
    setTime(evaluator.distance); 
  }
  const changeSpeedUnit = (s)=>{
    setSUnit(s); 
   //evaluator.evaluate();
    setSpeed(evaluator.speed); 
    setDistance(evaluator.time); 
    setTime(evaluator.distance); 
  }
  const changeDistanceUnit = (s)=>{
    setDUnit(s);
   //evaluator.evaluate();
    setSpeed(evaluator.speed); 
    setDistance(evaluator.time); 
    setTime(evaluator.distance); 
  }
  const changeTimeUnit = (s)=>{
    setTUnit(s);
   // evaluator.evaluate();
    setSpeed(evaluator.speed); 
    setDistance(evaluator.time); 
    setTime(evaluator.distance); 
  }
  return ( 
    <STDcontainer>   
      <Accordion Aname="Speed" lbl1="Enter the speed given" lbl2="Select the speed unit" opts={speedOptions} vFunk={changeSpeed} uFunk={changeSpeedUnit}/>
      <Accordion Aname="Distance" lbl1="Enter the distance given" lbl2="Select the distance unit" opts={distanceOptions} vFunk={changeDistance} uFunk={changeDistanceUnit}/>
      <Accordion Aname="Time" lbl1="Enter the time value given" lbl2="Select the time unit" opts={timeOptions} vFunk={changeTime} uFunk={changeTimeUnit}/>
      <span>{speed}</span><span>{sUnit}</span>
      <span>{distance}</span><span>{dUnit}</span>
      <span>{time}</span><span>{tUnit}</span> 
    </STDcontainer>
  )
}
const STDcontainer = styled.div`
  padding: 1em 6em 1em 1em;
  align-self: left;
  display: flex;
  flex-direction: column;
  border-radius: 0 2.5em 0 0;
  background: linear-gradient(160deg,white,60%,var(--secondary-dark));
  gap:0.5em;
`

export default DSTForm
