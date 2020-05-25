import React from "react";
import Weather from "../Weather";

const CountryInfo = (props) => {
  const { country } = props;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map((l, i) => (
          <li key={i}>{l.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={"Flag"} height="100" />
      <Weather city={country.capital} />
    </div>
  );
};

export default CountryInfo;
