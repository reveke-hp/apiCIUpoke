import React from "react";
import Axios from "axios";
import {useState} from "react";
import "./buscadorStyle.css";


const Buscador = () => {
  const [nombrePokemon,setNombrePokemon] = useState("");
  const [pokemonElegido, setPokemonElegido] = useState(false);
  const [pokemon,setPokemon] = useState({
            name: "",
            img: "", 
            species: "",
            type: "",
            hp: "",
            attack: "",
            defense: "",
  });

  const buscarPokemon = () =>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(
      (response) => {
        setPokemon({
            name: nombrePokemon,
            img: response.data.sprites.other.dream_world.front_default,
            species: response.data.species.name, 
            type: response.data.types[0].type.name,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
          });
          setPokemonElegido(true)
      }
    )
  }

  return(
      <div className="buscador">
        <h2 className="titulo">Busqueda de Pokemon</h2>
          <input type="text" onChange={(event) =>{
              setNombrePokemon(event.target.value);
              }
          } 
          />
          <br></br>
          <br></br>
          <button onClick={buscarPokemon}>Buscar Pokemon</button>
          <div className="displaySeleccion">{!pokemonElegido ? (
          <h1>Porfavor elija un Pokemon</h1>
          ): (
              <>
              <h1>{nombrePokemon}</h1>
              <img src={pokemon.img}/>
              <h3>Especie: {pokemon.species.charAt(0).toUpperCase() + pokemon.species.slice(1)}</h3>
              <h3>Tipo: {pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}</h3>
              <h4>Hp: {pokemon.hp}</h4>
              <h4>Ataque: {pokemon.attack}</h4>
              <h4>Defensa: {pokemon.defense}</h4>
          </>
          )}
             
          </div>
      </div>
  )
    
}

export default Buscador;