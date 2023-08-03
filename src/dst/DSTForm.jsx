import  styled  from "styled-components";  
import Accordion from "./Accordion";
import { useEffect, useState } from "react";
import DST from "./DST.class";
import { ActionButton } from "../buttons";
import { Label } from "../inputs";

function DSTForm() {
  const speedOptions=["mi/h","km/h","m/s"],
  distanceOptions=["mm", "cm", "inch", "feet", "yard", "m", "km", "miles"],
  timeOptions=["milliSec","sec","min","hour"];
  const[speed,setSpeed] = useState(0);
  const[distance,setDistance] = useState(0);
  const[time,setTime] = useState(0); 
  const[sUnit,setSUnit] = useState(speedOptions[2]);
  const[dUnit,setDUnit] = useState(distanceOptions[5]);
  const[tUnit,setTUnit] = useState(timeOptions[1]);  
  const[speedCheck,setspeedCheck] = useState(false);
  const[distanceCheck,setdistanceCheck] = useState(false);
  const[timeCheck,settimeCheck] = useState(false);
  const[evaluator,setEvaluator] = useState(new DST()); 

   function reset(){
       setTime(0);
       setDistance(0);
       setSpeed(0);
       setSUnit(speedOptions[2]);
       setDUnit(distanceOptions[5]);
       setTUnit(timeOptions[1]);   
       evaluator.resetValues();
  }
  const changeSpeed = (s)=>{
    s = Number(s);
    setSpeed(s);    
    evaluator.evaluate(s, sUnit, distance, dUnit, time, tUnit); 
    setEvaluator(evaluator);  
  }
  const changeDistance = (d)=>{ 
    d = Number(d);
    evaluator.evaluate(speed, sUnit, d, dUnit, time, tUnit);
    setDistance(d); 
  }
  const changeTime = (t)=>{
    t = Number(t);
    evaluator.evaluate(speed, sUnit, distance, dUnit, t, tUnit); 
    setTime(t);  
  }
  const changeSpeedUnit = (sU)=>{
    evaluator.evaluate(speed, sU, distance, dUnit, time, tUnit); 
    setSUnit(sU); 
  }
  const changeDistanceUnit = (dU)=>{
    setDUnit(dU);
    evaluator.evaluate(speed, sUnit, distance, dU, time, tUnit);  
  }
  const changeTimeUnit = (tU)=>{
    setTUnit(tU);
    evaluator.evaluate(speed, sUnit, distance, dUnit, time, tU); 
  }
  function speedChecked(){ 
    reset();
    setspeedCheck(true);
    setdistanceCheck(false);
    settimeCheck(false); 
    evaluator.setSpeedCheck(true);
    evaluator.setDistanceCheck(false);
    evaluator.setTimeCheck(false); 
  }
  function distanceChecked(){ 
    reset();
    setdistanceCheck(true);
    setspeedCheck(false);
    settimeCheck(false);
    evaluator.setDistanceCheck(true);
    evaluator.setSpeedCheck(false);
    evaluator.setTimeCheck(false); 
  }
  function timeChecked(){ 
    reset();
    settimeCheck(true);
    setspeedCheck(false);
    setdistanceCheck(false);
    evaluator.setTimeCheck(true);
    evaluator.setSpeedCheck(false);
    evaluator.setDistanceCheck(false); 
  }
  return ( 
    <STDcontainer>   
    <p>Select what you want to calculate</p> 
      <div className="header">
       <div className="selector"> 
      <input type="radio" className="rd" name="choice" value="Speed" id="speed" required onChange={speedChecked}/>
       <Label htmlFor="speed">Speed</Label>
        <input type="radio" className="rd" name="choice" value="Distance" id="distance" onChange={distanceChecked}/>
      <Label htmlFor="distance">Distance</Label>
        <input type="radio" className="rd" name="choice" value="Time" id="time" onChange={timeChecked}/>
        <Label htmlFor="time">Time</Label>
       </div>
      <ActionButton onClick={reset} >Reset</ActionButton> 
      </div>     
      {
        speedCheck && 
        <> 
        <Accordion Aname="Distance" lbl1="Enter the distance given" lbl2="Select the distance unit" 
        opts={distanceOptions} vFunk={changeDistance} uFunk={changeDistanceUnit} value={distance} u={dUnit}/> 
        <Accordion Aname="Time" lbl1="Enter the time value given" lbl2="Select the time unit" 
        opts={timeOptions} vFunk={changeTime} uFunk={changeTimeUnit} value={time} u={tUnit}/>
        </>
      }
      {
        distanceCheck && 
        <>
        <Accordion Aname="Time" lbl1="Enter the time value given" lbl2="Select the time unit" 
        opts={timeOptions} vFunk={changeTime} uFunk={changeTimeUnit} value={time} u={tUnit}/> 
        <Accordion Aname="Speed" lbl1="Enter the speed given" lbl2="Select the speed unit" opts={speedOptions}
         vFunk={changeSpeed} uFunk={changeSpeedUnit} value={speed} u={sUnit}/>
        </> 

      }
      {
        timeCheck &&  
        <>
        <Accordion Aname="Speed" lbl1="Enter the speed given" lbl2="Select the speed unit" opts={speedOptions}
         vFunk={changeSpeed} uFunk={changeSpeedUnit} value={speed} u={sUnit}/> 
         <Accordion Aname="Distance" lbl1="Enter the distance given" lbl2="Select the distance unit" 
         opts={distanceOptions} vFunk={changeDistance} uFunk={changeDistanceUnit} value={distance} u={dUnit}/>
        </>
      }
      <Answers> 
        <h3>According to the values you entered,and/ selected, below are the results....</h3>

        <p>For a given distance of <span>{evaluator.distance} {evaluator.dUnit}</span> ,(distance is always converted to meters)</p>
        <p>and the speed of <span>{evaluator.speed} {evaluator.sUnit}</span> ,(speed is always converted to m/s)</p>
        <p>The time it would take to cover the distance will be <span>{evaluator.time}{evaluator.tUnit}</span>.(Time is always converted to seconds)</p>
      
      </Answers> 
    </STDcontainer>
  )
}
const STDcontainer = styled.div`
.header{
  display:flex;
  align-items: center;
  justify-content: space-between;
}
 .selector{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:.4em;
 }
  padding: 1em 6em 1em 1em;
  align-self: left;
  display: flex;
  flex-direction: column;
  border-radius: 0 2.5em 0 -1em;
  background: linear-gradient(160deg,white,60%,var(--secondary-dark));
  gap:0.5em;
  button{  
    height:90%;
    align-self: flex-end;
    background: linear-gradient(45deg,var(--primary-light),var(--primary-dark));  
  }
  @media (max-width: 530px) { 
    padding: 1em 3em 1em 1em;
  }  
  @media (max-width: 370px) { 
    padding: .8em;
    font-size:90%;
  }  
  @media (max-width: 330px) { 
    padding: .5em;
    font-size:80%;
  }  
`
const Answers = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: nowrap;
 gap:0.6em;
 align-items: center;
 justify-content: center; 
 h3{
  line-height: 1;
 text-align: center; 
  background: linear-gradient(13deg,var(--text-dark),var(--text-grey)); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
 }
 p{
  align-self: flex-start; 
  line-height: 1;
 }
  span{
    background: linear-gradient(45deg,var(--primary-dark),lime); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export default DSTForm
