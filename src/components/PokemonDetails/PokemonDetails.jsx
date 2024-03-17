import {useParams } from "react-router-dom"
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";
import axios from "axios";
// import Download from "../Download/Download";
// import { useEffect, useState } from "react";

function PokemonDetails({pokemonName}){
    console.log(pokemonName);
    let {id}=useParams()
    const [pokemon]=usePokemonDetails(id,pokemonName);
    // const [check,setcheck]=useState('')
    // let Name;
    // useEffect(()=>{
    //     PokemonDetails({Name})
    // },[setcheck])
    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name" ><span>{pokemon.name}</span></div>
            <img className="image pokemon-name" src={pokemon.image}/>
            <div className="pokemon-name">Height:{pokemon.height}</div>
            <div className="pokemon-name">Weight:{pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>
            <br/>   
              
              {/* conditon */} 
              
            {
            
                pokemon.types && pokemon.similarPokemon && 
                <div className="other">
                    <div className="message">More {pokemon.types[0]} type pokemons</div>
                    <ul>
                   {  pokemon.similarPokemon.map((p) => <li key={p.pokemon.url} onClick={()=>{
                                console.log(p.pokemon.name)
                                //  this.PokemonDetails(name)
                                // {name && <PokemonDetails pokemonName={name}></PokemonDetails>}
                                {p.pokemon.name && PokemonDetails(p.pokemon.name)}
                        
                           
                        {/* </PokemonDetails>                                  */}

                   }
       
                   }
                    // {<PokemonDetails  pokemonName={p.pokemon.name} key={p.pokemon.url} />}
                    // PokemonDetails(p.pokemon.url,p.pokemon.name)
                

                   
                   > 
                   
                        {p.pokemon.name}
                    </li>)}
                    </ul>
                    
                </div>
            }
        </div>
    )
    
} 
async function Downloading(name){
    console.log(name);
   const searchByName=await axios.get(`http://pokeapi.co/api/v2/pokemon/${name}`)
   Id=searchByName.data.id
   console.log(Id);  
   {PokemonDetails()}
}


export default PokemonDetails


