import { useState } from "react";
import PokemonList from "../Pokemonlist/PokemonList";
import Search from "../Search/Search";
import PokemonType from "./PokemonType";

function Types(type){
    // const [pokemon]=useTypes('water',false)
    const [searchTerm,setSearchTerm]=useState('')

    // console.log('to be render',pokemon);
    return (    

        <div className="pokedex-wrapper">  
        <button onClick={()=>navigate('/types')}><span>Search By Type</span></button>
        <Search updateSearchTerm={setSearchTerm} placeholder={'Enter Type of Pokemon'}/>
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