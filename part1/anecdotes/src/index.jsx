import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const ancLen = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(arbitaryZeroArray(ancLen));

  const randomAnecdote = () => {
    const rndIdx = getRandomInt(ancLen);
    setSelected(rndIdx);
  };

  const setVote = () => {
    const tempPoints = [...points];
    tempPoints[selected] += 1;
    setPoints(tempPoints);
  };

  const indexOfMaxValue = points.indexOf(Math.max(...points));

  const mostVotes = () => {
    console.log(Math.max(...points));
    const result = anecdotes[indexOfMaxValue];
    return result;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} points</div>
      <div>
        <button onClick={randomAnecdote}>next anecdote</button>
        <button onClick={setVote}>vote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{mostVotes()}</p>
        <p>has {points[indexOfMaxValue]} points</p>
      </div>
    </div>
  );
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const arbitaryZeroArray = (length) => {
  return new Array(length).fill(0);
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
