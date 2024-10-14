import { Link, useNavigate } from "react-router-dom"
import Pokedex from "./components/Pokedex/Pokedex"
import CustomRoutes from "./routes/CustomRoutes"
// import Pokedex from "./components/Pokedex/Pokedex"
import { motion } from "framer-motion"
import './App.css'

export const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
)


function App(){
  const navigate=useNavigate()
  // MyComponent()
  return(
    <div className="root">
        <div className="heading">
          <h1 id="pokedex-heading">
            <Link to='/'>
              Pokedex
            </Link>
          </h1> 
          <CustomRoutes/>
        </div>
    </div>
  )
}
export default App