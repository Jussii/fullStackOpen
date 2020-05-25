import React from "react";

const Part = (props) => {
  const { part, numOfExer } = props;

  return (
    <tr>
      <td>{part}</td>
      <td>{numOfExer}</td>
    </tr>
  );
};

export default Part;
