import React, { useEffect, useState } from "react";
import axios from "axios";
import CountrySearch from "./components/CountrySearch";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const CountrySearchProps = {
    countries: countries,
  };
  return (
    <div>
      <CountrySearch {...CountrySearchProps} />
    </div>
  );
};

export default App;
