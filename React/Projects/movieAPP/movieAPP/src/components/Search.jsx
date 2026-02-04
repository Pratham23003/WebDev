const Search = ({searchTerm, setSearchTerm}) => {
    return(
        <div className="search">
            <div className="">
                <img src="./search.svg" alt="Search" />
                <input 
                    type = "text" 
                    placeholder="Search for a movie.." 
                    value = {searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                ></input>
                
            </div>
        </div>
    )
}
export default Search;