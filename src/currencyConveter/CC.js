import axios from "axios";
export default class CurrencyConveter {
  constructor() {
    this.Base_url = `https://api.exchangerate.host/symbols`;
    this.symbols = [];
  }

  async fetchSymbols() {
    await axios.get(`https://api.exchangerate.host/symbols`).then((res) => {
      //this.symbols = [...res.data.symbols];
      for (const iterator of Object.entries([res.data.symbols][0])) {
        console.log(iterator);
      }
      this.symbols = this.symbols;
    });
  }
  convert(cur1, cur2) {
    axios
      .get(`https://api.exchangerate.host/convert?from=${cur1}&to=${cur2}`)
      .then((res) => {
        console.log(res.data.rates);
      });
  }
}
