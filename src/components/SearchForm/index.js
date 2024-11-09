import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import "./index.css"

const SearchForm = ({setSearchTerm}) =>{
    const [term, setTerm] = useState('')
const handleSearch =(e) =>{
    e.preventDefault()
    setSearchTerm(term)
}

return(
    <center>
        <form onSubmit={handleSearch} className="search-container" >
            <input type="text" 
                value={term} onChange={(e) => setTerm(e.target.value)} 
                className="search-input"
                placeholder="Search Books..."
            />
            <button type="submit" className="search-btn"><CiSearch/></button>
    </form>
    </center>
)
}
export default SearchForm