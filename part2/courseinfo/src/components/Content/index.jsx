import React from "react";
import Part from "../Part";

const Content = ({ parts }) => {
  return (
    <table>
      <thead>
        {parts.map((part, i) => (
          <Part key={i} part={part.name} numOfExer={part.exercises} />
        ))}
      </thead>
    </table>
  );
};

export default Content;
