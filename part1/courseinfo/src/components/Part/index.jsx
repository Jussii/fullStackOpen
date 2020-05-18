import React from "react";

const Part = (props) => {
  const { part, numOfExer } = props;

  return (
    <div>
      <p>
        {part} {numOfExer}
      </p>
    </div>
  );
};

export default Part;
