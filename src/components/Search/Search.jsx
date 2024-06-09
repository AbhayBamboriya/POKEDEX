import useDebounce from '../../hooks/useDebounce'
import Preloader from '../PreLoader/PreLoader'
import './Search.css'
function Search({updateSearchTerm,placeholder}){
    const debouncedCallback=useDebounce((e)=>updateSearchTerm(e.target.value))
    return (
        <div className='search-wrapper'>
            <input 
                id='pokemon-name-search'
                type="text"
                placeholder={`${placeholder}`}
                onChange={debouncedCallback}
               
            />
        </div>
    )
}

export default Search