import { Link } from "react-router-dom"
import Pokedex from "./components/Pokedex/Pokedex"
import CustomRoutes from "./routes/CustomRoutes"
// import Pokedex from "./components/Pokedex/Pokedex"
import './App.css'

function App(){
  return(
    <>
      <h1 id="pokedex-heading">
        <Link to='/'>
          Pokedex
        </Link>
      </h1> 
      <CustomRoutes/>
    </>
  )
}
export default App