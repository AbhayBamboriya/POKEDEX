import { useState } from "react"
import PokemonList from "../Pokemonlist/PokemonList"
import Search from "../Search/Search"
// CSS
import './Pokedex.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails"
import { useNavigate } from "react-router-dom"
function Pokedex(){
    const navigate=useNavigate()
    const [searchTerm,setSearchTerm]=useState('')
  
    return (    
        <div className="pokedex-wrapper">  
            <button onClick={()=>navigate('/types')}><span>Search By Type</span></button>
            <Search updateSearchTerm={setSearchTerm} placeholder={'Enter Name of Pokemon'}/>
            {/* {searchTerm} */}
            {/* whenever the key in pokemonDeetails changs then rerendering will take place
                so for rerendering only key prop is used */}
                {/* console.log(searchTerm); */}
            {!searchTerm?<PokemonList/>:<PokemonDetails key={searchTerm} pokemonName={searchTerm} 
            />}
        </div>
    )
}
export default Pokedex