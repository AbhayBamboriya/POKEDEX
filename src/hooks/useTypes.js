import axios from "axios";
import { useEffect, useState } from "react";





function useTypes(type,flag){
    const[pokemon,setPokemon]=useState({
        // types:type,
        // name:'',
        // url:''

    })
    async function download(){
       const pokemonOfSameType= await axios.get(`https://pokeapi.co/api/v2/type/${type?.pokemonType}`)
       
       const res=pokemonOfSameType?.data?.pokemon.map((p)=>{
           return{
                name:p.pokemon.name,
                url:p.pokemon.url
           }
       })

       setPokemon((state)=>({
        ...state,
        res
    }))
    } 
    
   useEffect(()=>{
    download()
   },[type,flag])
    return [pokemon]
}
export default useTypes