import { PureComponent } from "react";

export default class DST  {
  constructor() {
    this.speed = 0;
    this.distance = 0;
    this.time = 0;
    this.sUnit = "m/s";
    this.dUnit = "m";
    this.tUnit = "sec";
    this.speedCheck = false;
    this.distanceCheck = false;
    this.timeCheck = false;
  }
  resetValues(){ 
    this.speed = 0;
    this.distance = 0;
    this.time = 0;
    this.sUnit = "m/s";
    this.dUnit = "m";
    this.tUnit = "sec";
  }
  setSpeedCheck(speedCheck){
    this.speedCheck = speedCheck;
  }
  setDistanceCheck(distanceCheck){
    this.distanceCheck = distanceCheck; 
  }
  setTimeCheck(timeCheck){
    this.timeCheck = timeCheck; 
  }
  convertSpeed(speed, sUnit) {
    if (speed === 0) {
      return;
    }
    switch (sUnit) {
      case "m/s":
        this.speed = parseFloat((speed).toFixed(3));
        break;
      case "km/h":
        this.speed = parseFloat((speed / 3.6).toFixed(3));
        break;
      case "mi/h":
        this.speed = parseFloat((speed / 2.237).toFixed(3));
        break;
    }
  }
  convertDistance(distance, dUnit) {
    if (distance === 0) {
      return;
    }
    switch (dUnit) {
      case "mm":
        this.distance = parseFloat((distance / 1000).toFixed(3));
        break;
      case "cm":
        this.distance = parseFloat((distance / 100).toFixed(3));
        break;
      case "inch":
        this.distance = parseFloat((distance / 39.37).toFixed(3));
        break;
      case "feet":
        this.distance = parseFloat((distance / 3.281).toFixed(3));
        break;
      case "yards":
        this.distance = parseFloat((distance / 1.094).toFixed(3));
        break;
      case "m":
        this.distance = parseFloat((distance * 1).toFixed(3));
        break;
      case "km":
        this.distance = parseFloat((distance * 1000).toFixed(3));
        break;
      case "miles":
        this.distance = parseFloat((distance * 1069).toFixed(3));
        break;
    }
  }
  convertTime(time, tUnit) {
    if (time === 0) {
      return;
    }
    switch (tUnit) {
      case "milliSec":
        this.time = parseFloat((time / 1000).toFixed(3));
        break;
      case "sec":
        this.time = parseFloat((time / 1).toFixed(3));
        break;
      case "min":
        this.time = parseFloat((time * 60).toFixed(3));
        break;
      case "hour":
        this.time = parseFloat((time * 3600).toFixed(3));
        break;
    }
  }
  evaluate(speed, sUnit, distance, dUnit, time, tUnit) {
    if (this.speed != speed || this.sUnit != sUnit) {
      this.convertSpeed(speed, sUnit);
      this.calculateTime();
      this.calculateDistance();
    }

    if (this.time != time || this.tUnit != tUnit) {
      this.convertTime(time, tUnit);
      this.calculateSpeed();
      this.calculateDistance();
    }

    if (this.distance != distance || this.dUnit != dUnit) {
      this.convertDistance(distance, dUnit);
      this.calculateTime();
      this.calculateSpeed();
    }
  }
  calculateTime() {  
      if(this.timeCheck){
      this.time = parseFloat((this.distance / this.speed).toFixed(3));
    }
  }
  calculateSpeed() { 
      if(this.speedCheck){
      this.speed = parseFloat((this.distance / this.time).toFixed(3));
    }
  }
  calculateDistance() { 
      if(this.distanceCheck){
      this.distance = parseFloat((this.time * this.speed).toFixed(3));
    }
  }
}
