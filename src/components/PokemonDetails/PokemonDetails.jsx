import {Link,  useParams } from "react-router-dom"
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";




function PokemonDetails({pokemonName}){
    function send(p){
        console.log('ew');
    }
    console.log('chhheck',{pokemonName});
    let {id,pn}=useParams()
    console.log('bb',id);
    const [pokemon]=usePokemonDetails(id,pokemonName);


    
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
                 {  pokemon.similarPokemon.map((p) =><li key={p.pokemon.url} >
                    
                        
                        {/* <div onClick={()=><Pokemon name={p.pokemon.name} image={p.pokemon.image} id={p.pokemon.id}/>}> */}
                        {/* <Link to={`/pokemon/${id}` }>{p.pokemon.name}</Link> */}
                        <Link to={`/pokemonName/${p.pokemon.name}`}>{p.pokemon.name}</Link>

                        {/* </div> */}
                     
                    </li>)}
                 </ul>
                    
                </div>
            }
        </div>
    )
    
} 

export default PokemonDetails


