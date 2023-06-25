export default class DSTClass {
  constructor(distance, unit) {
    this.distance = distance;
    this.unit = unit;
  }

  convert = () => {
    switch (this.unit) {
      case "mm":
        this.distance *= 0.0000006214;
        break;
      case "cm":
        this.distance *= 0.000006214;
        break;
      case "m":
        this.distance *= 0.000621;
        break;
      case "km":
        this.distance *= 0.621;
        break;
      case "inch":
        this.distance *= 0.00001578;
        break;
      case "feet":
        this.distance *= 0.000189;
        break;
      case "miles":
        this.distance *= 1;
        break;
      case "yards":
        this.distance *= 0.000568;
        break;
    }
    this.mm = parseFloat((this.distance * 1609344).toFixed(5));
    this.cm = parseFloat((this.distance * 160934.4).toFixed(5));
    this.inch = parseFloat((this.distance * 63360).toFixed(5));
    this.feet = parseFloat((this.distance * 5280).toFixed(5));
    this.yards = parseFloat((this.distance * 1760).toFixed(5));
    this.m = parseFloat((this.distance * 1609.344).toFixed(5));
    this.km = parseFloat((this.distance * 1.609).toFixed(5));
    this.miles = parseFloat((this.distance / 1).toFixed(5));
  };
}
