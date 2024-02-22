import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import './PokemonDetails.css'
// import usePokemonList from "../../hooks/usePokemonList";
function PokemonDetails(){
    const {id}=useParams();
    const[pokemon,setPokemon]=useState({})
    // console.log(id);
    async function download(){
        const response=await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(response.data);

        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
        })
    }


    // const [pokemonListState]=usePokemonList('https://pokeapi.co/api/v2/type/fire',true)

    useEffect(()=>{
        download()
    },[])       //it will be render only at first time

    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name" ><span>{pokemon.name}</span></div>
            <img className="image pokemon-name" src={pokemon.image}/>
            <div className="pokemon-name">Height:{pokemon.height}</div>
            <div className="pokemon-name">Weight:{pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>
            {/* <div>
                More Fire Type pokemon
                <ul>
                    {pokemonListState.pokemonList && pokemonListState.pokemonList.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
            </div> */}
        </div>
    )
}   

export default PokemonDetails


