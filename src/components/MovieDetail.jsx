
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../utility/Header'

const MovieDetail = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState('')
    
    useEffect(() => {
      const fetchMovieDetail = async () =>{
        try {
            const respons = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                {
                  headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                  },
                }
              );

              const data =  await respons.json()
              console.log(data);
              
              setMovie(data)

        } catch (error) {
            console.log("Error fetching movie detail", error);
        }
      }

      fetchMovieDetail()
     
    }, [id])
    
    
  return (
    <div>
      <Header/>

      <div className=' flex rounded-2xl border w-[97%] h-[68vh] m-5 gap-2 p-5 '>
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
            />
            <div className='flex flex-col'>
            <p>Name: {movie.original_title}</p>
            <p>Date: {movie.release_date}</p>
            <p>Status: {movie.status}</p>
            <p>In Short: {movie.tagline}</p>
            <p>Duration: {movie.runtime}mins</p>
            <p>IMDB: {movie.vote_average}</p>
            <p>Overview: {movie.overview}</p>
            </div>
      </div>
    </div>
  )
}

export default MovieDetail
