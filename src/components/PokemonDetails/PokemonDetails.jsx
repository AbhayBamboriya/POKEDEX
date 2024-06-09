import {Link,  useNavigate,  useParams } from "react-router-dom"
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";
import PokemonType from "../Types/PokemonType";
import { useState } from "react";

 


function PokemonDetails({pokemonName}){
    const [showComponent, setShowComponent] = useState({
        check:false,
        type:''
    });
    function handle(t){
        console.log('called',t);
        //  <PokemonType pokemonType={t} />
         console.log('dfkdfk');
         setShowComponent(state=>({
            ...state,
            check:true,
            type:t
         }));

        
    }
    const navigate=useNavigate()
    function send(p){
        console.log('ew');
    }
    console.log('chhheck',{pokemonName});
    let {id,pn}=useParams()
    console.log('bb',id);
    const [pokemon]=usePokemonDetails(id,pokemonName);


    
    return (
        <div className="pokemon-details-wrapper">
            {/* <button>Go Back</button> */}
            <div className="pokemon-name" ><span>{pokemon.name}</span></div>
            <img className="image pokemon-name" src={pokemon.image}/>
            <div className="pokemon-name">Height:{pokemon.height}</div>
            <div className="pokemon-name">Weight:{pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t) => <button key={t} onClick={()=>handle(t)}>{t}</button>)}
                
            </div>
            <br/>  
            {showComponent.check && console.log('output',showComponent)} 
            {showComponent.check && <PokemonType pokemonType={showComponent.type} />} 
            {!showComponent.check &&
            
                pokemon.types && pokemon.similarPokemon && 
                <div className="other">
                    <div className="message">More {pokemon.types[0]} type pokemons</div>
                    <div>
                        <ul>
                            {pokemon.similarPokemon.map((p) =>
                                <li key={p.pokemon.url} >
                                    <Link to={`/pokemonName/${p.pokemon.name}`}>{p.pokemon.name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    
                </div>
            }
        </div>
    )
    
} 

export default PokemonDetails


