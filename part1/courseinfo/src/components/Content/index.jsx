import React from "react";
import Part from "../Part";

const Content = ({ parts }) => {
  return (
    <div>
      {<Part part={parts[0].name} numOfExer={parts[0].exercises} />}
      {<Part part={parts[1].name} numOfExer={parts[1].exercises} />}
      {<Part part={parts[2].name} numOfExer={parts[2].exercises} />}
    </div>
  );
};

export default Content;
