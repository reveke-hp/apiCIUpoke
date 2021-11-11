import React from "react"
import { useEffect, useState } from "react"
import "./pokestyle.css"
import PokemonThumb from "../Pokemon/Pokemon"

const Pokedex = () =>{
	const [todosLosPokemons, setTodosLosPokemons] = useState([])
	const [cargarMas, setCargarMas] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
 
   const gettodosLosPokemons = async () => {
	 const res = await fetch(cargarMas)
	 const data = await res.json()
 
	 setCargarMas(data.next)
 
	 function createPokemonObject(results)  {
	   results.forEach( async pokemon => {
		 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
		 const data =  await res.json()
		 setTodosLosPokemons( currentList => [...currentList, data])
		 await todosLosPokemons.sort((a, b) => a.id - b.id)
	   })
	 }
	 createPokemonObject(data.results)
   }
 
  useEffect(() => {
   gettodosLosPokemons()
  }, [])

	return(
		<div className="app-contaner">
      		<h1>Pokemon List</h1>
      	<div className="pokemon-container">
        <div className="all-container">
          {todosLosPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name.charAt(0).toUpperCase() + pokemonStats.name.slice(1)}
              type={pokemonStats.types[0].type.name}
            />)}
          
        </div>
          <button className="cargarMas" onClick={() => gettodosLosPokemons()}>Cargar Mas</button>
      </div>
    </div>
	)

}

export default Pokedex;