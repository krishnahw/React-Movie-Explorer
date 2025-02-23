import { Link, useLocation } from "react-router-dom"
import Header from "../utility/Header"


const SearchDetail = () => {

    const location = useLocation()

    const {results } = location.state || {}
    console.log(results)

    if(!results){
        return <p>No results available.</p>
    }
  return (
    <div>
      <Header/>
      <h1 className="flex justify-end mt-5 w-[30%] text-3xl font-bold">Search Result</h1>
        <div className="grid grid-flow-col grid-rows-5 gap-15 mt-10 mb-10 justify-center">
        {results.map((e,idx)=>{
           return(
             <Link to={`/movie_detail/${e.id}`} key={e.id}>
              <div
            className="flex flex-col  w-[200px] h-[400px] p-4 border rounded shadow overflow-x-auto "
            key={idx}
          >
             <img
              src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
              alt="Mufasa"
            />
            <p>Name: {e.title}</p>
            <p> Date: {e.release_date}</p>
            <p>IMDB:{e.vote_average}</p>
          </div>
             </Link>
           )
            
      })}
        </div>
    </div>
  )
}

export default SearchDetail
