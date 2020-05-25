import React, { useState } from "react";
import CountriesWrapper from "../CountriesWrapper";

const CountrySearch = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? countries
    : countries.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div>
      find countries
      <input type="text" value={searchTerm} onChange={handleChange} />
      <CountriesWrapper countries={results} />
    </div>
  );
};

export default CountrySearch;
