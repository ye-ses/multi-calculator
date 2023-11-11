import { evaluate, round } from "mathjs";

class Calculator {
  constructor(expression, textBox) {
    this.expression = expression;
    this.textBox = textBox;
    this.bracket = true;
    this.period = true;
    this.showHistory = false;
    this.answerOn = false;
    this.answer = "0";
    this.history = [];
  }
  reset() {
    this.bracket = true;
    this.period = true;
    this.showHistory = false;
    this.answerOn = false;
    this.answer = "0";
  }
  looseOperator(key) {
    if (
      key == "+" ||
      key == "-" ||
      key == "/" ||
      key == "(" ||
      key == "*" ||
      key == ""
    ) {
      return true;
    }
    return false;
  }
  clear() {
    this.textBox.value = "";
    this.reset();
  }
  delete() {
    this.textBox.value = this.textBox.value.substring(
      0,
      this.textBox.value.length - 1
    );
  }
  switcher(button) {
    switch (button.class) {
      case "screenFunctions":
        if (button.id === "delete") {
          this.delete();
        } else {
          if (button.id === "clear") {
            this.clear();
          }
        }
        break;
      case "number":
        this.write(button);
        break;
      case "operator":
        if (this.answerOn) {
          this.answerOn = false;
        }
        if (button.id === "equal") {
          this.evaluate();
        }
        this.writeOperator(button);
        this.period = true;
        break;
      default:
        break;
    }
  }
  writeBrackets() {
    const key = this.textBox.value.slice(-1);
    if (key == "" || key == undefined) {
      this.textBox.value += "(";
      this.bracket = !this.bracket;
    }
    if (!this.looseOperator(key)) {
      this.textBox.value += this.bracket ? "*(" : ")";
      this.bracket = !this.bracket;
    }
  }
  writeOperator(button) {
    const key = this.textBox.value.slice(-1);
    if (button.value === "()") {
      this.writeBrackets();
    } else {
      if (button.value === "+/-") {
        this.textBox.value += "-";
      } else {
        if ((
          button.value !== "=" &&
          key !== ")" &&
          key !== "+" &&
          key !== "-" &&
          key !== "/" &&
          key !== "(" &&
          key !== "*" &&
          key !== ""
        ) && (this.textBox.value !== "")) {
          if (button.value === "%") {
            if (key !== "%") {
              this.textBox.value += button.value;
            }
          } else {
            this.textBox.value += button.value;
          }
        }
      }
    }
  }
  write(button) {
    if (this.answerOn) {
      this.clear();
      this.answerOn = false;
    }
    if (button.id !== "period") {
      this.textBox.value += button.value;
    } else {
      if (this.period) {
        this.textBox.value += button.value;
        this.period = !this.period;
      }
    }
  }
  // toggleBrackets() {
  //   const value = this.bracket ? "(" : ")";
  //   this.textBox.value += value;
  //   this.bracket = !this.bracket;
  // }
  evaluate() {
    const key = this.textBox.value.slice(-1);
    if (this.looseOperator(key) || !this.bracket) {
      return;
    }
    const expression = this.textBox.value;
    this.clear();
    const initAnswer = evaluate(expression);
    this.answer = round(initAnswer * 1000000000) / 1000000000;
    const hist = expression + " = " + this.answer;
    if (this.history.length >= 5) {
      this.history.shift();
      this.history.push(hist);
    } else {
      this.history.push(hist);
    }
    this.textBox.value += this.answer;
    this.answerOn = true;
  }
}
export default Calculator;
