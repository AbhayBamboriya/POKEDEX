import axios from "axios";
import { useEffect, useState } from "react";

function useType(type){
    const[pokemon,setPokemon]=useState({})
    // console.log(id);
    // let pokemonListHookResponse=[]
    async function download(){
        // to handle the error regarding axios thatswhy use try catch
        try{
            const pokemonOfSameType= axios.get(`https://pokeapi.co/api/v2/type/${type}`)
            
            // console.log("responswe",pokemonOfSameType);
            console.log("dfdf"+response.data);
            // setPokemon(state=>({
            //     name:response.data.name,
            //     image:response.data.sprites.other.dream_world.front_default,
            //     id:id,
            //     weight:response.data.weight,
            //     height:response.data.height,
            //     types:response.data.types.map((t)=>t.type.name),
            //     // similarPokemon:pokemonOfSameType.data.pokemon.slice(0,4)
            // }))
    
            
            // pokemonOfSameType.then((response)=>{
            //     setPokemon(state=>({
            //         ...state,
                   
            //         similarPokemon:response.data.pokemon.slice(1,6),
            //         // url:response.data.pokemon.url
                    
            //     }))
            // })
            
            // setPokemonListState({...pokemonListState,type: response.data.types ? response.data.types[0].type.name :''})
    

        }
        catch(e){
                console.log("Something went wrong");
        }
       
    }
    useEffect(()=>{
        download()
    },[])       
    return [pokemon]
}
export default usePokemonDetails