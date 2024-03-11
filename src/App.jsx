import { Link } from "react-router-dom"
import Pokedex from "./components/Pokedex/Pokedex"
import CustomRoutes from "./routes/CustomRoutes"
// import Pokedex from "./components/Pokedex/Pokedex"


function App(){
  return(
    <>
      {/* <Preloader/> */}
    
      <h1 id="pokedex-heading">
        <Link to='/'>
          Pokedex
        </Link>
      </h1> 
      {/* <Pokedex/> */}
      <CustomRoutes/>

    </>
  )
}
export default App