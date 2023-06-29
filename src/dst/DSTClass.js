export default class DSTClass {
  constructor(distance, unit) {
    this.distance = distance;
    this.unit = unit;
  }

  convertMM() {
    this.mm = parseFloat((this.distance / 1).toFixed(5));
    this.cm = parseFloat((this.distance / 10).toFixed(5));
    this.inch = parseFloat((this.distance / 25.4).toFixed(5));
    this.feet = parseFloat((this.distance / 304.8).toFixed(5));
    this.yards = parseFloat((this.distance / 914.4).toFixed(5));
    this.m = parseFloat((this.distance / 1000).toFixed(5));
    this.km = parseFloat((this.distance / 1000000).toFixed(5));
    this.miles = parseFloat((this.distance / 1609000).toFixed(5));
  }
  convertCM() {
    this.mm = parseFloat((this.distance * 10).toFixed(5));
    this.cm = parseFloat((this.distance / 1).toFixed(5));
    this.inch = parseFloat((this.distance / 2.54).toFixed(5));
    this.feet = parseFloat((this.distance / 30.48).toFixed(5));
    this.yards = parseFloat((this.distance / 91.44).toFixed(5));
    this.m = parseFloat((this.distance / 100).toFixed(5));
    this.km = parseFloat((this.distance / 100000).toFixed(5));
    this.miles = parseFloat((this.distance / 160900).toFixed(5));
  }
  convertInch() {
    this.mm = parseFloat((this.distance * 25.4).toFixed(5));
    this.cm = parseFloat((this.distance * 2.54).toFixed(5));
    this.inch = parseFloat((this.distance / 1).toFixed(5));
    this.feet = parseFloat((this.distance / 12).toFixed(5));
    this.yards = parseFloat((this.distance / 36).toFixed(5));
    this.m = parseFloat((this.distance / 39.37).toFixed(5));
    this.km = parseFloat((this.distance / 39370).toFixed(5));
    this.miles = parseFloat((this.distance / 63360).toFixed(5));
  }
  convertFeet() {
    this.mm = parseFloat((this.distance * 304.8).toFixed(5));
    this.cm = parseFloat((this.distance * 30.48).toFixed(5));
    this.inch = parseFloat((this.distance * 12).toFixed(5));
    this.feet = parseFloat((this.distance / 1).toFixed(5));
    this.yards = parseFloat((this.distance / 3).toFixed(5));
    this.m = parseFloat((this.distance / 3.281).toFixed(5));
    this.km = parseFloat((this.distance / 3281).toFixed(5));
    this.miles = parseFloat((this.distance / 5280).toFixed(5));
  }
  convertYards() {
    this.mm = parseFloat((this.distance * 914.4).toFixed(5));
    this.cm = parseFloat((this.distance * 91.44).toFixed(5));
    this.inch = parseFloat((this.distance * 36).toFixed(5));
    this.feet = parseFloat((this.distance * 3).toFixed(5));
    this.yards = parseFloat((this.distance / 1).toFixed(5));
    this.m = parseFloat((this.distance / 1.094).toFixed(5));
    this.km = parseFloat((this.distance / 1094).toFixed(5));
    this.miles = parseFloat((this.distance / 1760).toFixed(5));
  }
  convertM() {
    this.mm = parseFloat((this.distance * 1000).toFixed(5));
    this.cm = parseFloat((this.distance * 100).toFixed(5));
    this.inch = parseFloat((this.distance * 39.37).toFixed(5));
    this.feet = parseFloat((this.distance * 3.281).toFixed(5));
    this.yards = parseFloat((this.distance * 1.094).toFixed(5));
    this.m = parseFloat((this.distance / 1).toFixed(5));
    this.km = parseFloat((this.distance / 1000).toFixed(5));
    this.miles = parseFloat((this.distance / 1069).toFixed(5));
  }
  convertKM() {
    this.mm = parseFloat((this.distance * 1000000).toFixed(5));
    this.cm = parseFloat((this.distance * 100000).toFixed(5));
    this.inch = parseFloat((this.distance * 39370).toFixed(5));
    this.feet = parseFloat((this.distance * 3281).toFixed(5));
    this.yards = parseFloat((this.distance * 1094).toFixed(5));
    this.m = parseFloat((this.distance * 1000).toFixed(5));
    this.km = parseFloat((this.distance / 1).toFixed(5));
    this.miles = parseFloat((this.distance / 1.069).toFixed(5));
  }
  convertMiles() {
    this.mm = parseFloat((this.distance * 1609344).toFixed(5));
    this.cm = parseFloat((this.distance * 160934.4).toFixed(5));
    this.inch = parseFloat((this.distance * 63360).toFixed(5));
    this.feet = parseFloat((this.distance * 5280).toFixed(5));
    this.yards = parseFloat((this.distance * 1760).toFixed(5));
    this.m = parseFloat((this.distance * 1609.344).toFixed(5));
    this.km = parseFloat((this.distance * 1.609).toFixed(5));
    this.miles = parseFloat((this.distance / 1).toFixed(5));
  }
  convert = () => {
    switch (this.unit) {
      case "mm":
        this.convertMM();
        break;
      case "cm":
        this.convertCM();
        break;
      case "m":
        this.convertM();
        break;
      case "km":
        this.convertKM();
        break;
      case "inch":
        this.convertInch();
        break;
      case "feet":
        this.convertFeet();
        break;
      case "miles":
        this.convertMiles();
        break;
      case "yard":
        this.convertYards();
        break;
    }
  };
}
