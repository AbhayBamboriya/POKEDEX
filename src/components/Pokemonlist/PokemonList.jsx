import axios from 'axios';
import './PokemonList.css'
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import Preloader from '../PreLoader/PreLoader';
import usePokemonList from '../../hooks/usePokemonList';
function PokemonList(){

    const{pokemonListState,setPokemonListState}=usePokemonList(false);    

    return(
    
        <div className="pokemon-list-wrapper">
    
            <div className="pokemon-wrapper">
                    
                        {   
                        (pokemonListState.isLoading)?<Preloader/> :
                        pokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                          
                        }
                        {/* {console.log('pokemon',pokemonListState)} */}
            </div>
            <div className="controls">
                <button disabled={pokemonListState.prevUrl==null} onClick={()=> {
                    const urlToSet=pokemonListState.prevUrl
                    setPokemonListState({
                        ...pokemonListState,
                        pokedexUrl:urlToSet
                    })}}> 
                    
                    Previ
                </button>
                <button disabled={pokemonListState.nextUrl==null} onClick={()=> {
                    // console.log(nextUrl);
                    const urlToSet=pokemonListState.nextUrl
                    setPokemonListState({
                        ...pokemonListState,
                        pokedexUrl:urlToSet
                    })}}>
                        
                        {/* console.log(pokemonListState); */}
                    Next
                </button>
            </div> 
           
    </div>
    
    )
}
export default PokemonList