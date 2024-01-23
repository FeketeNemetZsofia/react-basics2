import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState(null)
  const [searchString, setSearchString] = useState("")

  useEffect(() => console.log(countries), [countries])
  //console.log(countries)
  console.log(searchString)

  useEffect(() => {
    console.log("running fetch")
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div className="App">
      <input type='text' onChange={event => setSearchString(event.target.value)} />
      {countries && countries
        .filter(country => country.name.common.includes(searchString))
        .map((country, index) => 
          <div key={index}>{country.name.common}</div>
        )
      }
    </div>
  );
}

export default App;