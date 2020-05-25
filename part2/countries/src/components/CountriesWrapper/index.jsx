import React, { useState, useEffect } from "react";
import CountryList from "../CountryList";
import CountryInfo from "../CountryInfo";

const TooMany = () => {
  return <div>Too many matches</div>;
};

const CountriesWrapper = ({ countries }) => {
  const [clickedCountryState, setClickedCountryState] = useState(false);
  const [clickedCountry, setClickedCountry] = useState({});

  const getCountryByA2C = (a2c) => {
    const result = countries.find((e) => e.alpha2Code === a2c);
    setClickedCountryState(true);
    setClickedCountry(result);
  };

  const CountryListProps = {
    countries: countries,
    handleEvent: getCountryByA2C,
  };

  useEffect(() => {
    setClickedCountryState(false);
    setClickedCountry({});
  }, [countries]);

  const getRenderCase = (rCase) => {
    switch (rCase) {
      case "tooMany":
        return <TooMany />;
      case "list":
        return <CountryList {...CountryListProps} />;
      case "country":
        return <CountryInfo country={countries[0]} />;
      case "clicked":
        return <CountryInfo country={clickedCountry} />;
      default:
        return <></>;
    }
  };

  if (clickedCountryState) {
    return getRenderCase("clicked");
  }
  if (countries.length === 1) return getRenderCase("country");
  if (countries.length > 10) return getRenderCase("tooMany");
  if (2 < countries.length < 10) return getRenderCase("list");
};

export default CountriesWrapper;
