import { useEffect, useState } from "react";
import Header from "../utility/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1)

  useEffect(() => {
    homeTab(page);
  }, [page]);

  const homeTab = async (pageNumber) => {
    try {
      const respons = await fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );

      const result = await respons.json();
      setData(result);
    } catch (error) {
      console.log("Error in fetch", error);
    }
  };

 

  return (
    <div>
      <Header />

      <h1 className="flex justify-end mt-5 w-[30%] text-3xl font-bold">Trending Now</h1>

      <div className="grid grid-flow-col grid-rows-5 gap-15 mt-10 mb-10 justify-center">
        {data?.results?.map((e, idx) => {
          return (
           
            
              <Link to={`/movie_detail/${e.id}`} key={e.id}>
                 <div
              className="flex flex-col  w-[200px] h-[400px] p-4 border rounded  font-serif shadow-2xl "
              key={idx}
              >
              <img className="rounded-xl"
                src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                alt={e.title}
              />
              <p>Name: {e.title}</p>
              <p> Date: {e.release_date}</p>
              <p>IMDB:{e.vote_average}</p>
            </div>
              </Link>
              
          );
        })}
      </div>

        <div className="flex justify-center gap-4 mt-5 mb-3">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous

          </button>
          <span className="text-xl font-bold">{page}</span>
          <button onClick={() => setPage((prev) => prev + 1)} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>

    </div>
  );
};

export default Home;
