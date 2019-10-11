import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components";
import axios from "axios";
import CharacterContainer from './components/CharacterContainer';
import Button from './components/Button';

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

  const leftClick = () => {
    if (buttonEval.previous == null) {
      return null;
    } else {
      setUrl(buttonEval.previous)
    }
  }
  const rightClick = () => {
    if (buttonEval.next == null) {
      return null;
    } else {
      setUrl(buttonEval.next)
    }
  }


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterContainer characters={characters}></CharacterContainer>
      <Button className="left" onClick={leftClick} name={"U+00AB"}></Button>
      <Button className="right" onClick={rightClick} name={"U+00BB"}></Button>
    </div>
  );
}

export default App;
