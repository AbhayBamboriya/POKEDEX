import axios from "axios";
import { useEffect, useState } from "react";





// let type=''
// flag=true search by the name of type
function useTypes(type,flag){
    const[pokemon,setPokemon]=useState({
        // types:type,
        // name:'',
        // url:''

    })
    // console.log('typing',type);
    async function download(){
    //    console.log('ddfifdifidfidfd');
       const pokemonOfSameType= await axios.get(`https://pokeapi.co/api/v2/type/${type.pokemonType}`)
    //    console.log('bug',pokemonOfSameType);
       const res=pokemonOfSameType?.data?.pokemon.map((p)=>{
            // console.log('printin',p.pokemon.name);
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
    console.log('df');
    download()
   },[type,flag])
    console.log('checking once',pokemon);
    return [pokemon]
}
export default useTypes