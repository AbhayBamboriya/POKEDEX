import PokemonList from "../Pokemonlist/PokemonList"
import Search from "../Search/Search"
// CSS
import './Pokedex.css'
function Pokedex(){
    return (    
        <div className="pokedex-wrapper">  
            
            <Search/>
            <PokemonList/>
        </div>
    )
}
export default Pokedex