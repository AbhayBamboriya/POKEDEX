import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(PokemonName,id){
    const[pokemon,setPokemon]=useState({})
    // console.log(id);
    // let pokemonListHookResponse=[]
    async function download(){
        // to handle the error regarding axios thatswhy use try catch
        try{
            let response;
            if(PokemonName){
                response=await axios.get(`http://pokeapi.co/api/v2/pokemon/${PokemonName}`)
            }
            else  response=await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
            const pokemonOfSameType= axios.get(`http://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name :''}`)
            
            // console.log("responswe",pokemonOfSameType);
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
                    similarPokemon:response.data.pokemon.slice(1,6),
                    // url:response.data.pokemon.url
                    
                }))
            })
            
            setPokemonListState({...pokemonListState,type: response.data.types ? response.data.types[0].type.name :''})
    

        }
        catch(e){
                console.log("Something went wrong");
        }
       
    }
     // custom url that will fetch details of every comman type of pokemon
    //  const {pokemonListState,setPokemonListState}= usePokemonList(); 
    const{pokemonListState,setPokemonListState}=useState({})
    
    useEffect(()=>{
        
        download()
        // console.log("List-",pokemonListHookResponse.pokemonListState);
    },[])       //it will be render only at first time

    return [pokemon]
}
export default usePokemonDetails