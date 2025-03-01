
import { toast } from "react-toastify";

const Favorite = (id) => {

    


   const addMovieFavorite = async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify({
        media_type: "movie", 
        media_id: id.value, 
        favorite: true, 
      })
    };

    try {
      const respons = await fetch(`https://api.themoviedb.org/3/account/21701058/favorite`, options);

      const data = await respons.json();
      
      

      if(data.success){
        toast.success(" Movie added to favorites!", { position: "top-right",pauseOnHover: true, closeOnClick: true,style: { background: "#333", color: "#fff" } });
      }else{
        toast.error(" An error occurred while adding to favorites.", {
          position: "top-right",
        });
      }


    } catch (error) {
      console.log('fetch error', error);
 
      toast.error(" An error occurred while adding to favorites." , { position: "top-right",pauseOnHover: true, closeOnClick: true,style: { background: "#333", color: "#fff", padding:"5px", fontSize:"20px" }  })
      
    }
   }
  return (
    <div className="mt-5 font-serif">
       <button className="bg-amber-400 p-3 text-xl rounded font-medium" onClick={addMovieFavorite}>Add To Favorite</button>
       
    </div>
  )
}

export default Favorite

