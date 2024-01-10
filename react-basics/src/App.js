import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState("")
  const [timerId, setTimerId] = useState(0)

  useEffect(() => {
    console.log(timerId)
  }, [timerId])

  useEffect(() => {
    clearTimeout(timerId)
    
    setTimerId(setTimeout(() => {
      if (searchName.length > 0) {
        fetch(`https://restcountries.com/v3.1/name/${searchName}`)
          .then(res => res.json())
          .then(data => setCountries(data))
      } else {
        fetch("https://restcountries.com/v3.1/all")
          .then(res => res.json())
          .then(data => setCountries(data))
      } 
    }, 2000))
  }, [searchName])

  /* useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setTimeout(() => setCountries(data), 1000))
  }, []) */

  return (
    <div className="App">
      {countries ? <Countries countries={countries} setSearchName={setSearchName}/> : <p>loading...</p>}
    </div>
  );
}

export default App;