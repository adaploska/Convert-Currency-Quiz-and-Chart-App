import React from "react";

import "./exchange.css";
import axios from "axios";
let array = [];
export class Exchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "EUR",
      toCurrency: "PLN",
      count: 1,
      currencies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://api.nbp.pl/api/exchangerates/tables/a/")
      .then(result => {
        array.push({ code: "PLN", value: 1.0 }); //d;aczego 1 liczba nan
        for (let i = 0; i < result.data[0].rates.length; i++) {
          array.push({
            code: result.data[0].rates[i].code,
            value: result.data[0].rates[i].mid
          });

          this.setState({
            currencies: array
          });
        }
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  }

  eventChanceHandler = event => {
    let newValue = event.target.value;
    this.setState({
      count: newValue.replace(/,/g, ".") //change comma to dot
    });
  };

  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    }
    if (event.target.name === "to") {
      this.setState({ toCurrency: event.target.value });
    }
  };

  handlerClickBTN = cur => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      if (isNaN(this.state.count)) {
        this.setState({ result: "Please enter a number" });

        return;
      }

      for (let i = 0; i < array.length; i++) {
        const result =
          (this.state.fromCurrency / this.state.toCurrency) * this.state.count;
        this.setState({
          result: result.toFixed(2)
        });
      }
    } else {
      this.setState({ result: "select two different currencies" });
    }
  };

  render() {
    return (
      <div className="converter container">
        <h2>
          <i className="fas fa-hand-holding-usd " />{" "}
          <span className="maincolor">Convert</span> <span>currency</span>
        </h2>
        <div className="form">
          <input
            name="count"
            type="text"
            value={this.state.count}
            onChange={this.eventChanceHandler}
          />
          <select
            name="from"
            onChange={event => this.selectHandler(event)}
            value={this.state.fromCurrency}
          >
            {this.state.currencies.map((cur, index) => (
              <option key={index} value={cur["value"]}>
                {cur["code"]}
              </option>
            ))}
          </select>
          <select
            name="to"
            onChange={event => this.selectHandler(event)}
            value={this.state.toCurrency}
          >
            {this.state.currencies.map((cur, index) => (
              <option key={index} value={cur["value"]}>
                {cur["code"]}
              </option>
            ))}
          </select>
          <button onClick={this.handlerClickBTN}>Convert</button>

          <h3> {this.state.result}</h3>
        </div>
      </div>
    );
  }
}
