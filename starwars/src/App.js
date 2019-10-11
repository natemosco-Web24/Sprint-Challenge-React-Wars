import React, { useEffect, useState } from 'react';
import './App.css';
import styled from "styled-components";
import axios from "axios";
import CharacterContainer from './components/CharacterContainer';
import Button from './components/Button';

const StyledSpan = styled.span`
  font-size:40px; 
  font-weight:700;
  color:white;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://swapi.co/api/people/")
  const [buttonEval, setButtonEval] = useState({})
  const [allCharacters, setAllCharacters] = useState([])
  const [uselesDependencyHolder, setUselesDependencyHolder] = useState([])
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

  //THIS NEXT USE EFFECT IS FOR THE FILTER STRETCH GOAL
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 1 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=2")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 2 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=3")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 3 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=4")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 4 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=5")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 5 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=6")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 6 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=7")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 7 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=8")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 8 error", error)
      })
    axios
      .get("https://swapi.co/api/people/?page=9")
      .then(response => {
        setAllCharacters([...allCharacters, ...response.data.results])
      })
      .catch(error => {
        console.log("axios 9 error", error)
      })
    console.log("allCharacters", allCharacters)
  }, [uselesDependencyHolder])

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
      <Button className="left" onClick={leftClick} name={"\u00AB"}></Button>
      <StyledSpan>Page</StyledSpan>
      <Button className="right" onClick={rightClick} name={"\u00BB"}></Button>
    </div>
  );
}

export default App;
