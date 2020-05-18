import React, { useState } from "react";
import ReactDOM from "react-dom";

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? good / all : 0;

  return (
    <div>
      <div>
        <h1>statistics</h1>
      </div>

      {all === 0 ? (
        <div>
          <p>No feedback given</p>
        </div>
      ) : (
        <table>
          <thead>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="netural" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </thead>
        </table>
      )}
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const setReview = (param) => () => {
    switch (param) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        setAll(all + 1);
        console.log("netural");
        break;
      case "bad":
        setBad(bad + 1);
        setAll(all + 1);
        console.log("bad");
        break;
      default:
        console.log("not such case");
        break;
    }
  };

  const statProps = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
      </div>
      <div>
        <button onClick={setReview("good")}>good</button>
        <button onClick={setReview("neutral")}>neutral</button>
        <button onClick={setReview("bad")}>bad</button>
      </div>
      <Statistics {...statProps} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
