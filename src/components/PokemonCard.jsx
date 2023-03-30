import React from 'react';


function PokemonCard(props) {
  console.log(props);
  return ( 
    <div>
      <h2>{props.pokemon.name}</h2>
      <p>Type: {props.pokemon.type}</p>
      <p>Poids: {props.pokemon.weight}</p>
    </div>
  );
}

export default PokemonCard;