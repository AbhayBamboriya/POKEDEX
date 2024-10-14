import { useState } from "react";
import PokemonList from "../Pokemonlist/PokemonList";
import Search from "../Search/Search";
import PokemonType from "./PokemonType";
import { useNavigate } from "react-router-dom";
// import '../Pokedex/Pokedex.css'
import '../Pokedex/Pokedex.css'
function Types(type){
    // const [pokemon]=useTypes('water',false)
    const [searchTerm,setSearchTerm]=useState('')
    const navigate=useNavigate()
    // console.log('to be render',pokemon);
    return (    

        <div className="pokedex-wrapper">  
        
        <div className="search">
            <Search updateSearchTerm={setSearchTerm} placeholder={'Enter Type of Pokemon'}/>
            <button onClick={()=>navigate('/')} className="btn"><span>Search By Name</span></button>
        </div>
        {/* {searchTerm} */}
        {/* whenever the key in pokemonDeetails changs then rerendering will take place
            so for rerendering only key prop is used */}
            {/* console.log(searchTerm); */}
        {!searchTerm?<PokemonList/>:<PokemonType key={searchTerm} pokemonType={searchTerm} 
        />}
    </div>

    )
}
export default Types