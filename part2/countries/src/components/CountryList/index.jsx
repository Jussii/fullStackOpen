import React from "react";

const CountryList = ({ countries, handleEvent }) => {
  return (
    <ul>
      {countries.map((country, i) => (
        <li key={i}>
          {country.name}{" "}
          <button
            onClick={() => {
              handleEvent(country.alpha2Code);
            }}
          >
            show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
