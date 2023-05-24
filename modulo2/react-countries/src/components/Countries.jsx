export function Countries({ filteredCountries }) {
    return (
      <div>
        {filteredCountries.length > 0 ? (
            <ul >
          {filteredCountries.map((country) => (
            
                <li key={country.id}>
                <li>{country.name}</li>
                <li>{country.capital}</li>
                </li>
                
                       
          ))}
          </ul> 
        ) : (
          <h1>País não encontrado</h1>
        )}
      </div>
    );
  }

// Aqui seria mais uma forma de descrever o resultado da pesquia na tela tirando as tags <ul> e <li>
//<h1 key={country.id}>País: {country.name} e sua capital é {country.capital}</h1>