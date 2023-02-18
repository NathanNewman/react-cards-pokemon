import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
// import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("");
  // useAxis recieves two arguments, baseURL and subDirectory.
  // url is an array with the first item being the baseURL and the 2nd being the subDirectory.
  const [response, error] = useAxios(url[0], url[1]);

  // sets response data to pokemon and gives pokemon a uuid.
  // If error, alerts error. If no response, does nothing to avoid errors during unintentional calls of useEffect.
  useEffect(() => {
    if (error) alert(error);
    else if (response) {
      setPokemon((pokemon) => [...pokemon, { ...response, id: uuid() }]);
    }
  }, [response, error]);

  const addPokemon = (name) => {
    setUrl(["https://pokeapi.co/", `api/v2/pokemon/${name}`]);
  };
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
