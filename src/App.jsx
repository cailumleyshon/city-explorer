import { useState } from 'react'
import axios from 'axios'
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({})
  const [search, setSearch] = useState("")
  const [map, setMap] = useState("")

  async function getLocation(e) {
    e.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const res = await axios.get(API);
    setLocation(res.data[0]);
    getMap();
  }

  function getMap(e) {
    let latitude = location.lat
    let longitude = location.lon
    setMap(`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&format=png&center=${latitude},${longitude}&zoom=10`)
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }
  
  return (
    <>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Type your desired location..." />
        <button>Explore! 🌎</button>
      </form>
      <h2>{location.display_name}</h2>
      <h3>📍{location.latitude},{location.longitude}</h3>
      <img src={map} />
    </>
  )
}

export default App
