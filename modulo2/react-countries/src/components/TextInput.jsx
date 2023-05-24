import { useState } from "react";
import { allCountries } from "../data/countries";

export function TextInput({ onFilteredCountriesChange }) {
  const [countryFilter, setCountryFilter] = useState("");

  function handleCountryFilterChange(event) {
    const filter = event.currentTarget.value;
    setCountryFilter(filter);

    if (filter.length >= 3) {
      const filteredCountries = allCountries.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      });      
      onFilteredCountriesChange(filteredCountries);
    } else {
      onFilteredCountriesChange([]);
    }
  }

  /* Esse códigos eram o que estava usando antes de colocar os de cima */

  // function handleCountryFilterChange(event) {
  //   setCountryFilter(event.currentTarget.value);
  // }

  // Utilização do trim() é para tirar os espaços em branco e tem que implentar está no vídeo 3.5
  // const filteredDountries =
  //   countryFilter.length >= 3
  //     ? allCountries.filter(({ name }) => {
  //         return name
  //           .toLocaleLowerCase()
  //           .includes(countryFilter.toLocaleLowerCase());
  //       })
  //     : allCountries;

  // console.log(filteredDountries);

  return (
    <div>
      <label>informe o nome do pais (pelo menos 3 caracteres) </label>
      <input
        autoFocus
        id="1"
        value={countryFilter}
        onChange={handleCountryFilterChange}
      ></input>
    </div>
  );
}
