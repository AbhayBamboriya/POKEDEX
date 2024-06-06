import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonName(PokemonName){
    const[pokemon,setPokemon]=useState({
        similarPokemon:''
    })
    async function SameType(t){
        try{
            console.log('entered',t);
            const pokemonOfSameType=await axios.get(`https://pokeapi.co/api/v2/type/${t.type.name}`)
            // console.log('poke of same type',pokemonOfSameType);
            console.log('zx',pokemonOfSameType);
          
                setPokemon(state=>({
                    ...state,
                    
                    similarPokemonName:pokemonOfSameType.data.pokemon.slice(1,6)
                }))
            
            console.log('ov er');
        }
        catch(e){
            console.log(e.message);
        }
    }
    async function download(){
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
        console.log('using name',response);
        
        setPokemon(state=>({
            name:response?.data?.species?.name,
            image:response?.data?.sprites?.other?.dream_world?.front_default,
            id:response?.data?.id,
            height:response?.data?.height,
            weight:response?.data?.weight,
            types:response.data.types.map((t)=>t.type.name),
        }))
        console.log('begin');
        response.data.types.map((t)=>{
           SameType(t) 
        })
        console.log('end');
        
    }
    useEffect(()=>{
        download()
    },[])

    console.log('datals fetched',pokemon.similarPokemon);
    return  [pokemon]
}
export default usePokemonName