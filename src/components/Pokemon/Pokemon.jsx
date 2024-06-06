import { Link } from 'react-router-dom'
import './Pokemon.css'
import { Bs0SquareFill } from "react-icons/bs";
import { FaBasketballBall } from "react-icons/fa";
function Pokemon({name,image,id}){  
    
    return (
        <div className='pokemon'>
           
            <Link to={`/pokemon/${id}`}>
            <div className='pokemon-name'> <FaBasketballBall className='icon'/>{name}<FaBasketballBall className='icon'/></div>
            <div><img className="pokemon-image" src={image}/></div>
            </Link>

        </div>
    )
}
export default Pokemon