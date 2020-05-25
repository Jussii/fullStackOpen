import React from "react";

const Filter = (props) => {
  const { filterTerm, setFilterTerm } = props;

  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  };

  return (
    <div>
      filter: <input type="text" value={filterTerm} onChange={handleFilter} />
    </div>
  );
};

export default Filter;
