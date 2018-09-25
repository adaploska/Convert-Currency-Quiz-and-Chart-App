import React from "react";
import axios from "axios/index";
import "./quiz.css";

let array = [];
let arr = [];
let answer1wrong = "";
let answer2wrong = "";
let allAnswers = [];

//shuffle function
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

//function show all score in quiz
class Show extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.item}</div>
      </div>
    );
  }
}
export class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countQuestions: 1,
      blockAnsw: false,
      Allpoints: 0,
      isHidden: true
    };
  }

  componentDidMount() {
    //get elemen from API
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(result => {
        for (let i = 0; i < result.data.length; i++) {
          array.push({
            name: result.data[i].name,
            capital: result.data[i].capital
          });
          arr = array[Math.floor(Math.random() * array.length - 1)];
          answer1wrong = array[Math.floor(Math.random() * array.length - 1)];
          answer2wrong = array[Math.floor(Math.random() * array.length - 1)];
        }
        allAnswers = [
          { capitals: answer1wrong, answer: "wrong" },
          { capitals: answer2wrong, answer: "wrong" },
          {
            capitals: { name: arr.name, capital: arr.capital },
            answer: "correct"
          }
        ];
        this.setState({
          randoms: arr.name,
          allansw: shuffle(allAnswers)
        });
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  }

  //function check answer
  HandlerClickButton = element => {
    if (element["answer"] === "correct") {
      this.setState({
        Allpoints: this.state.Allpoints + 1
      });
    } else {
      this.setState({
        Allpoints: this.state.Allpoints + 0
      });
    }
  };
  //function show next question
  ClickButtonNext = e => {
    if (this.state.countQuestions === 10) {
      this.setState({
        blockAnsw: true
      });
    } else {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(result => {
          for (let i = 0; i < result.data.length; i++) {
            array.push({
              name: result.data[i].name,
              capital: result.data[i].capital
            });
            arr = array[Math.floor(Math.random() * array.length - 1)];
            answer1wrong = array[Math.floor(Math.random() * array.length - 1)];
            answer2wrong = array[Math.floor(Math.random() * array.length - 1)];
          }
          allAnswers = [
            { capitals: answer1wrong, answer: "wrong" },
            { capitals: answer2wrong, answer: "wrong" },
            {
              capitals: { name: arr.name, capital: arr.capital },
              answer: "correct"
            }
          ];
          this.setState({
            randoms: arr.name,
            allansw: shuffle(allAnswers),
            countQuestions: this.state.countQuestions + 1
          });
          console.log(this.state.allansw);
        })
        .catch(err => {
          console.log("Error", err.message);
        });
    }
  };

  //function show all points
  ClickAllPoints = e => {
    console.log(this.state.Allpoints);
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  //function restart game
  PlayAgain = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(result => {
        for (let i = 0; i < result.data.length; i++) {
          array.push({
            name: result.data[i].name,
            capital: result.data[i].capital
          });
          arr = array[Math.floor(Math.random() * array.length - 1)];
          answer1wrong = array[Math.floor(Math.random() * array.length - 1)];
          answer2wrong = array[Math.floor(Math.random() * array.length - 1)];
        }
        allAnswers = [
          { capitals: answer1wrong, answer: "wrong" },
          { capitals: answer2wrong, answer: "wrong" },
          {
            capitals: { name: arr.name, capital: arr.capital },
            answer: "correct"
          }
        ];
        this.setState({
          randoms: arr.name,
          allansw: shuffle(allAnswers),
          countQuestions: this.state.countQuestions + 1,
          blockAnsw: false,
          countQuestions: 1,
          Allpoints: 0
        });
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  };

  render() {
    return (
      <div className="quizContainer">
        <h4>
          {" "}
          {this.state.countQuestions} What is the capital of{" "}
          <span className="maincolor">{this.state.randoms}</span>{" "}
        </h4>
        <div className="buttonContainer">
          {allAnswers.map((element, index) => (
            <button
              key={index}
              onClick={() => this.HandlerClickButton(element)}
              disabled={this.state.blockAnsw}
              className="BtnCapital"
            >
              {element["capitals"].capital}
            </button>
          ))}
        </div>
        <div className="buttonContainer">
          <button
            onClick={this.ClickButtonNext}
            disabled={this.state.blockAnsw}
          >
            Next
          </button>
          <div>
            <button onClick={this.ClickAllPoints.bind(this)}>Score</button>

            {!this.state.isHidden && <Show item={this.state.Allpoints} />}
          </div>
          <button onClick={this.PlayAgain}>Play again</button>
        </div>
      </div>
    );
  }
}
