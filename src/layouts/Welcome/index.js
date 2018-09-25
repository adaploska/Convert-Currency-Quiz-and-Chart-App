import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "./welcome.css";
let arrayDates = [];
let arrayValues = [];

function chartData() {
  axios
    .get("http://api.nbp.pl/api/cenyzlota/last/30/?format=json")
    .then(result => {
      for (let i = 0; i < result.data.length; i++) {
        arrayDates.push(result.data[i].data);
        arrayValues.push(result.data[i].cena);
      }
    });

  return {
    labels: arrayDates,
    datasets: [
      {
        label: "Gold Price",
        data: arrayValues
      }
    ]
  };
}

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chartData()
    };
  }

  render() {
    return (
      <div>
        <h4> Price of 1g of gold (in the sample of 1000)</h4>
        <div className="graphContainer">
          <Line data={this.state.data} width={800} height={250} />
        </div>
      </div>
    );
  }
}
