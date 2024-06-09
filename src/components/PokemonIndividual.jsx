import { Link, useParams } from "react-router-dom";
import usePokemonName from "../hooks/usePokemonName";
import './pokemonindividual.css'
function PokemonIndividual(){
    const {name}=useParams()
    // console.log('checking ehere',name);
    const [pokemon]= usePokemonName(name)
    // console.log('in pokemon individual',pokemon);
    return(
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name" ><span>{pokemon.name}</span></div>
            <img className="image pokemon-name" src={pokemon.image} width={400} height={400}/>
            <div className="pokemon-name">Height:{pokemon.height}</div>
            <div className="pokemon-name">Weight:{pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>
            <br/>   
              {/* <hr />     */}
              {/* conditon */} 

              {console.log('in pokemon individual',pokemon)}
              
            {
            
                pokemon.similarPokemonName  && 
                <div className="other">
                    <div className="message">More {pokemon.types[0]} type pokemons</div>
                 <ul>
                 {  pokemon.similarPokemonName.map((p) =><li key={p.p.pokemon.name}>
                               {/* { console.log('ppppppp',p?.p?.pokemon?.name)} */}
                               {console.log('pppppp',p)}
                        <Link to={`/pokemonName/${p.p.pokemon.name}`}>{p.p.pokemon.name}</Link>
                     
                    </li>)}
                 </ul>
                    
                </div>
            }

           
        </div>
    )
}
export default PokemonIndividual