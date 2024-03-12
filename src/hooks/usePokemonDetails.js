import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id){
    const[pokemon,setPokemon]=useState({})
    // console.log(id);
    let pokemonListHookResponse=[]
    async function download(){
        const response=await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemonOfSameType= axios.get(`http://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name :''}`)
        console.log(response.data);
        setPokemon(state=>({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name),
            // similarPokemon:pokemonOfSameType.data.pokemon.slice(0,4)
        }))


        pokemonOfSameType.then((response)=>{
            setPokemon(state=>({
                ...state,
                similarPokemon:response.data.pokemon.slice(0,5)
            }))
        })
        setPokemonListState({...pokemonListState,type: response.data.types ? response.data.types[0].type.name :''})
    }
     // custom url that will fetch details of every comman type of pokemon
     const {pokemonListState,setPokemonListState}= usePokemonList(); 
    
    useEffect(()=>{

        download()
        console.log("List-",pokemonListHookResponse.pokemonListState);
    },[])       //it will be render only at first time

    return [pokemon]
}
export default usePokemonDetails