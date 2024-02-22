import { Link } from "react-router-dom"
import Pokedex from "./components/Pokedex/Pokedex"


function App(){
  return(
    <>
      <h1 id="pokedex-heading">
        <Link to='/'>
          Pokedex
        </Link>
      </h1>
      <Pokedex/>
   
    </>
  )
}
export default App