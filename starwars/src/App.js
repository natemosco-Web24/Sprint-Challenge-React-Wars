import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://swapi.co/api/people/")
  const [buttonEval, setButtonEval] = useState({})
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
        setButtonEval(response.data);
      })
      .catch(error => {
        console.log("error from axios", error);
      })
  }, [url])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
