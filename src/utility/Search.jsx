import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = () => {
   const [query, setQuery] = useState('')
   const navigate = useNavigate();

   const handleSearch = async () =>{
    if(!query) return;
    try {
      const respons = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`
, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      const data = await respons.json()

      navigate('/search' , {state:{results : data.results}})
      console.log(data)
      
    } catch (error) {
      console.error('Error searching movies:', error);
    }
   }

  return (
    <div className="mt-5 w-full flex justify-center gap-5  p-5">
      <input  className="w-[50%]   p-2 rounded-xl border" type="text" placeholder="Search Movie..." value={query} onChange={(e) =>{setQuery(e.target.value)}} />
      <button className="bg-blue-500 rounded-xl p-2 hover:scale-95" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
