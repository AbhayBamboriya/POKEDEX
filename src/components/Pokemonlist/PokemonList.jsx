import axios from 'axios';
import './PokemonList.css'
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import Preloader from '../PreLoader/PreLoader';
import usePokemonList from '../../hooks/usePokemonList';
function PokemonList(){

    // use custom hooks here
    const{pokemonListState,setPokemonListState}=usePokemonList(false);    

    // const {PokemonListState,setPokemonListState}=usePokemonList('https://pokeapi.co/api/v2/pokemon',false);
    return(
        // <div className="pokemon-list-wrapper">
        //     <div>Pokemon List </div>
        //     <div className="pokemon-wrapper">
        //             {(PokemonListState.isLoading)?'Loading......' : 
        //                     PokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
        //                 }
        //     </div>
        //     <div className="controls">
        //         {/* <button disabled={prevUrl==null} onClick={()=> setPokedexUrl(prevUrl)}> 
        //             Prev
        //         </button>
        //         <button disabled={nextUrl==null} onClick={()=>setPokedexUrl(nextUrl)}>
        //             Next
        //         </button> */}
        //         <button disabled={PokemonListState.prevUrl==null} onClick={()=> {
        //             const urlToSet=PokemonListState.prevUrl
        //             setPokemonListState({...PokemonListState,pokedexUrl:urlToSet})
        //         }}> 
        //             Prev
        //         </button>
        //         <button disabled={PokemonListState.nextUrl==null} onClick={()=>{
        //             const urlToSet=PokemonListState.nextUrl
        //             setPokemonListState({...PokemonListState,pokedexUrl:urlToSet})
        //         }}>
        //             Next
        //         </button>
        //     </div>
               
        // </div>
        <div className="pokemon-list-wrapper">
            {/* <div>Pokemon List </div> */}
            <div className="pokemon-wrapper">
                    {/* {   
                        (isLoading)?'Loading......' :
                            pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                            // PokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                        } */}
                        {   
                        
                        (pokemonListState.isLoading)?<Preloader/> :
                        pokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                            // PokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                        }
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
                {/* <button disabled={PokemonListState.prevUrl==null} onClick={()=> {
                    const urlToSet=PokemonListState.prevUrl
                
                }}> 
                    Prev
                </button>
                <button disabled={PokemonListState.nextUrl==null} onClick={()=>{
                    const urlToSet=PokemonListState.nextUrl
                
                }}>
                    Next
                </button> */}
            </div> 
           
    </div>
    
    )
}
export default PokemonList