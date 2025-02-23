import { useEffect, useState } from "react";
import Header from "../utility/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    homeTab();
  }, []);

  const homeTab = async () => {
    try {
      const respons = await fetch(
        `https://api.themoviedb.org/3/discover/movie`,
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

  console.log(data);

  return (
    <div>
      <Header />

      <h1 className="flex justify-end mt-5 w-[30%] text-3xl font-bold">Trending Now</h1>

      <div className="grid grid-flow-col grid-rows-5 gap-15 mt-10 mb-10 justify-center">
        {data?.results?.map((e, idx) => {
          return (
           
            
              <Link to={`/movie_detail/${e.id}`} key={e.id}>
                 <div
              className="flex flex-col  w-[200px] p-4 border rounded shadow overflow-x-auto "
              key={idx}
              >
              <img
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
    </div>
  );
};

export default Home;
