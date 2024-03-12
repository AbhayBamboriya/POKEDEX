import { useParams } from "react-router-dom"
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";
// import usePokemonList from "../../hooks/usePokemonList";
function PokemonDetails(){
    const {id}=useParams();
    const [pokemon]=usePokemonDetails(id);
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
                // console.log("poke type" ,pokemon.types)
                pokemon.types && pokemon.similarPokemon && 
                <div>
                    More {pokemon.types[0]} type pokemons
                    <ul>
                   {  pokemon.similarPokemon  .map((p) => <li key={p.pokemon.id}>{p.pokemon.name}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}   

export default PokemonDetails


