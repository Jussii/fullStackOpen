import React from "react";

const Total = ({ parts }) => {
  const total = (arr) => {
    const result = arr.reduce((a, b) => ({
      exercises: a.exercises + b.exercises,
    }));
    return result.exercises;
  };

  return (
    <div>
      <p>Total of {total(parts)} exercies</p>
    </div>
  );
};

export default Total;
