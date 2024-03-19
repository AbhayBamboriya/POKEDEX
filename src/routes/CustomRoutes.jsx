    import { Routes ,Route} from "react-router-dom"
    import Pokedex from "../components/Pokedex/Pokedex"
    import PokemonDetails from "../components/PokemonDetails/PokemonDetails"
    // import PokemonList from "../components/Pokemonlist/PokemonList"
    function CustomRoutes(){
        return(
            <Routes>
                <Route path="/" element={<Pokedex/>}/>
                <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
                <Route path="/pokemon/:pn" element={<PokemonDetails/>}/>

            </Routes>
        )
    }
    export default CustomRoutes