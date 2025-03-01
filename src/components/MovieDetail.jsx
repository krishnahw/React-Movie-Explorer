
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../utility/Header'
import Favorite from './Favorite'
import WatchLaater from './WatchLaater'

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

      <div className=' flex rounded-2xl  border w-[97%] h-[68vh] m-5 gap-2 p-5 '>
            <img className=' rounded-2xl '
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
            />
            <div className=' font-serif m-3 gap-3  flex flex-col'>
            <p className='font-semibold text-xl'>Name: {movie.title}</p>
            <p className='font-semibold text-xl'>Date: {movie.release_date}</p>
            <p className='font-semibold text-xl'>Status: {movie.status}</p>
            <p className='font-semibold text-xl'>In Short: {movie.tagline}</p>
            <p className='font-semibold text-xl'>Duration: {movie.runtime}mins</p>
            <p className='font-semibold text-xl'>IMDB: {movie.vote_average}</p>
            <p className='font-semibold text-xl'>Overview: {movie.overview}</p>

            <div className='flex gap-5'>
               <Favorite value={movie.id} />
               <WatchLaater value={movie.id} />

            </div>
            </div>


          
      </div>

      
    </div>
  )
}

export default MovieDetail
