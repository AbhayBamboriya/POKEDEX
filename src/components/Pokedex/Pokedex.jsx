import { useEffect, useState } from "react"
import PokemonList from "../Pokemonlist/PokemonList"
import Search from "../Search/Search"
// CSS
import './Pokedex.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails"
function Pokedex(){
    const [searchTerm,setSearchTerm]=useState('')
  
    return (    
        <div className="pokedex-wrapper">  
            
            <Search updateSearchTerm={setSearchTerm}/>
            {searchTerm}
            {/* whenever the key in pokemonDeetails changs then rerendering will take place
                so for rerendering only key prop is used */}
            {!searchTerm?<PokemonList/>:<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    )
}
export default Pokedex