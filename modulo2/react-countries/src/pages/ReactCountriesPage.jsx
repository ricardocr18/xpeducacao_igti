import { useState } from "react";
import { Countries } from "../components/Countries";
import { TextInput } from "../components/TextInput";

export function ReactCountriesPage() {
  const [filteredCountries, setFilteredCountries] = useState([]);

  function handleFilteredCountriesChange(countries) {
    setFilteredCountries(countries);
  }

  return (
    <div>
      <TextInput onFilteredCountriesChange={handleFilteredCountriesChange} />
      <Countries filteredCountries={filteredCountries} />
    </div>
  );
}
