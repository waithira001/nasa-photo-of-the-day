import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import components from "./components"


function App() {
  const [nasaData, setNasaData] = useState('')
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=aqCLHCWG0DstgzbaBmqygK6afz9raTDXkwBdBL7u')
      .then(res => {
        setNasaData(res.data)
      })
      .catch(res => {
        console.log(res.data)
      })
    },[])
  return (
    <div className="App">
      <p>
      Image of the Day <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
