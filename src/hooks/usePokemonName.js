import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonName(PokemonName){
    const[pokemon,setPokemon]=useState({
        similarPokemon:''
    })
    const [filling,setFilling]=useState({
        fitlerPokemon:''
    })
    async function SameType(t){
        try{
            const pokemonOfSameType=await axios.get(`https://pokeapi.co/api/v2/type/${t.type.name}`)
            const tempArray = [];
            let     i=1,flag=true,breaking=false;
            pokemonOfSameType?.data?.pokemon.map((p)=>{
                if(breaking)    return
                if(tempArray.length==5){
                    breaking=true
                    return
                }
                if(PokemonName!=p.pokemon.name && !flag){
                    tempArray.push({p,type:t.type.name});   
                }
                else if (PokemonName==p.pokemon.name){
                    flag=false
                }
                i++;
            })
            setFilling(state=>({
                ...state,
                fitlerPokemon:tempArray
            }))

                setPokemon(state=>({
                    ...state,
                    similarPokemonName:tempArray
                }))
        }
        catch(e){
            console.log(e.message);
        }
    }
    async function download(){
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
        setPokemon(state=>({
            name:response?.data?.species?.name,
            image:response?.data?.sprites?.other?.dream_world?.front_default,
            id:response?.data?.id,
            height:response?.data?.height,
            weight:response?.data?.weight,
            types:response.data.types.map((t)=>t.type.name),
        }))
        response.data.types.map((t)=>{
           SameType(t) 
        })
    }
    useEffect(()=>{
        download()
    },[PokemonName])
    return  [pokemon]
}
export default usePokemonName