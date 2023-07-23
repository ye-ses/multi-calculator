export default class DST {
  //  sUnit = "m/s";
  //  dUnit = "m";
  //  tUnit = "s";
  constructor(speed, sUnit, distance, dUnit, time, tUnit) {
    this.speed = this.convertSpeed(speed, sUnit);
    this.distance = this.convertDistance(distance, dUnit);
    this.time = this.convertTime(time, tUnit);
    this.evaluate();
  }
  convertSpeed(speed, sUnit) {
    if (speed == 0) {
      return;
    }
    switch (sUnit) {
      case "m/s":
        return speed;
      case "km/h":
        return speed / 3.6;
      case "mi/h":
        return speed / 2.237;
    }
  }
  convertDistance(distance, dUnit) {
    if (distance == 0) {
      return;
    }
    switch (dUnit) {
      case "mm":
        return parseFloat((distance / 1000).toFixed(3));
      case "cm":
        return parseFloat((distance / 100).toFixed(3));
      case "inch":
        return parseFloat((distance / 39.37).toFixed(3));
      case "feet":
        return parseFloat((distance / 3.281).toFixed(3));
      case "yards":
        return parseFloat((distance / 1.094).toFixed(3));
      case "m":
        return parseFloat((distance * 1).toFixed(3));
      case "km":
        return parseFloat((distance * 1000).toFixed(3));
      case "miles":
        return parseFloat((distance * 1069).toFixed(3));
    }
  }
  convertTime(time, tUnit) {
    if (time == 0) {
      return;
    }
    switch (tUnit) {
      case "milliSec":
        return parseFloat((time / 1000).toFixed(3));
      case "sec":
        return parseFloat((time / 1).toFixed(3));
      case "min":
        return parseFloat((time * 60).toFixed(3));
      case "hour":
        return parseFloat((time * 3600).toFixed(3));
    }
  }
  evaluate() {
    if (this.time === 0) {
      this.time = this.calculateTime();
    }
    if (this.speed === 0) {
      this.speed = this.calculateSpeed();
    }
    if (this.distance === 0) {
      this.distance = this.calculateDistance();
    }
  }
  calculateTime() {
    return parseFloat((this.distance / this.speed).toFixed(3));
  }
  calculateSpeed() {
    return parseFloat((this.distance / this.time).toFixed(3));
  }
  calculateDistance() {
    return parseFloat((this.time * this.speed).toFixed(3));
  }
}
