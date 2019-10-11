import React from 'react'
import styled from "styled-components";

const StyledCharacterCard = styled.div`
    width:250px;
    height:300px;
    background-color:#000b;
    color: white;
    margin-bottom:20px;
`;

export default function CharacterCard(props) {
    return (
        <StyledCharacterCard>
            <h2 className="name">{props.character.name}</h2>
            <i className="birth-year">Born: {props.character.birth_year}</i>
            <p className="height stats">Height: {props.character.height}</p>
            <p className="mass stats">Mass: {props.character.mass}</p>
            <p className="hair-color stats">Hair Color: {props.character.hair_color}</p>
            <p className="skin-color stats"> Skin Color: {props.character.skin_color}</p>
            <p className="eye-color stats">Eye Color: {props.character.eye_color}</p>
            <p className="gender stats">Gender :{props.character.gender}</p>
        </StyledCharacterCard>
    )
}
