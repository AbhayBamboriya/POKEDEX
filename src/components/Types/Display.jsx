import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBasketballBall } from "react-icons/fa";
import './Display.css'
import { Link } from "react-router-dom";
function Display({ name, url }) {
    const [sprite, setSprite] = useState(null);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const fetchSprite = async () => {
            if (!url) return;
            try {
                const res = await axios.get(url);

                console.log('for pucture0',res);
                
                setSprite(res?.data?.sprites?.other?.dream_world?.front_default)
            

            } catch (err) {
                setError(err);
                console.log(err);
            }
        };

        fetchSprite();
    }, [url]);

    if (error) {
        return 
    }
   
    return (
        <div className='pokemon'>
           
            <Link to={`/pokemon/${name}`}>
                <div className='pokemon-name'> <FaBasketballBall className='icon'/>{name}<FaBasketballBall className='icon'/></div>
                {sprite ? <div><img className="pokemon-image" src={sprite}/></div> :<h2>No Picture Available</h2>}
            </Link>

        </div>
    );
}

export default Display;
