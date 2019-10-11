import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer(props) {
    return (
        <div>
            {props.characters.map((character, index) => {
                <CharacterCard key={index} character={character}></CharacterCard>
            })}
        </div>
    )
}
