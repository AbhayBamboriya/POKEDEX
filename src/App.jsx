import { Link, useNavigate } from "react-router-dom"
import Pokedex from "./components/Pokedex/Pokedex"
import CustomRoutes from "./routes/CustomRoutes"
// import Pokedex from "./components/Pokedex/Pokedex"
import './App.css'

function App(){
  const navigate=useNavigate()
  return(
    <div className="root">
      <h1 id="pokedex-heading">
        <Link to='/'>
          Pokedex
        </Link>
      </h1> 
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <CustomRoutes/>
    </div>
  )
}
export default App