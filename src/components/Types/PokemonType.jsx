import useTypes from "../../hooks/useTypes"
import './PokemonType.css';
import Display from "./Display";
function PokemonType(pokemonType){
    const typesOfPokemon=useTypes(pokemonType,true)
    return(
        <div className="pokemon-list-wrapper">
          <div className="pokemon-wrapper">
            {
                typesOfPokemon[0]?.res?.map((p)=>{
                    return <Display name={p.name} url={p.url} key={p.name}/>
                })
            }
            </div>
        </div>
    )
}
export default PokemonType