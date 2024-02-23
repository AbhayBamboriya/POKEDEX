import axios from 'axios';
import './PokemonList.css'
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
function PokemonList(){
    // const[pokemonList,setPokemonlist]=useState([])
    // const [isLoading,setIsLoading]=useState(true)
    // const [pokedexUrl,setPokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon') 
    // const [nextUrl,setNextUrl]=useState('')
    // const[prevUrl,setPrevUrl]=useState('')


    const [pokemonListState,setPokemonListState]=useState({
        pokemonList:[],
        isLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:'',
        
    })


    async function downloadPokemons(){
        // setIsLoading(true)
        setPokemonListState((state)=>({...state,isLoading:true}))

        // const response=await axios.get(pokedexUrl) //download the list of 20 pokemon
        const response=await axios.get(pokemonListState.pokedexUrl)
        const pokemonResults=response.data.results  //get the arraay of pokemons from result

        // setPrevUrl(response.data.previous)
        // setNextUrl(response.data.next)
        setPokemonListState((state)=>({
            ...state,
            prevUrl:response.data.previous,
            nextUrl:response.data.next
        }))
        // iteratiing over the array of pokemons and using their url to create array of promises
        // that will download that  20 pokemons
        const pokemonResultPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url))

        //passing that array to axios.all
        const pokemonData=await axios.all(pokemonResultPromise) //array of 20 pokemon detailed data
       
       
        

        // iterating on the data of each pokemon and extrat the information
        const res=pokemonData.map((pokedata)=>{
            const pokemon=pokedata.data
            return  {name:pokemon.name,
                id:pokemon.id,
                image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
                types:pokemon.types
            }
        })
        // console.log(res);
        // setPokemonlist(res)
        // setIsLoading(false)

        setPokemonListState((state)=>({
            ...state,
            pokemonList:res,
            isLoading:false
        }))

        // setPokemon({
        //     name:response.data.name,
        //     image:response.data.sprites.other.dream_world.front_default,
        //     weight:response.data.weight,
        //     height:response.data.height,
        //     types:response.data.types.map((t)=>t.type.name)
        // })
    }


    // const [pokemonListState]=usePokemonList('https://pokeapi.co/api/v2/type/fire',true)

    useEffect(()=>{
        downloadPokemons()
    },[pokemonListState.pokedexUrl])






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
            <div>Pokemon List </div>
            <div className="pokemon-wrapper">
                    {/* {   
                        (isLoading)?'Loading......' :
                            pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                            // PokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
                        } */}
                        {   
                        (pokemonListState.isLoading)?'Loading......' :
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