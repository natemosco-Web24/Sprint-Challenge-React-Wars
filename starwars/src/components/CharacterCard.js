import React from 'react'
import styled from "styled-components";

const StyledCharacterCard = styled.div`
    width:300px;
    height:500px;
    background-color:#000b;
    color: white;
`;

export default function CharacterCard(props) {
    return (
        <StyledCharacterCard>
            <h2 className="name">props.character.name</h2>
            <i className="birth-year">props.character.birth_year</i>
            <p className="height stats">props.character.height</p>
            <p className="mass stats">props.character.mass</p>
            <p className="hair-color stats">props.character.hair_color</p>
            <p className="skin-color stats">props.character.skin_color</p>
            <p className="eye-color stats">props.character.eye_color</p>
            <p className="gender stats">props.character.gender</p>
        </StyledCharacterCard>
    )
}
