import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import body from "./body";
import Navbar from "./nav";
import styled from "styled-components";


function App() {
  const [nasaData, setNasaData] = useState('')


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=bFnzGs0ui4bTcLqSA3DQgV9IHgadFW0AKLeGVsOL')
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
      <body nasaAPI = {nasaData} />
      </p>
    </div>
  );
}

export default App;
