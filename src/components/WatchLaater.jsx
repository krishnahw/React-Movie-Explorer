import { toast } from "react-toastify";


const WatchLaater = (id) => {

    const watchLater = async () =>{
        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`
            },
            body: JSON.stringify({media_type: 'movie', media_id: id.value, watchlist: true})
        };

        try {
         const respons = await fetch('https://api.themoviedb.org/3/account/21701058/watchlist', options)

         const data = await respons.json()

          if(data.success){
                 toast.success(" Movie added to WatchLater!", { position: "top-right",pauseOnHover: true, closeOnClick: true,});
               }else{
                 toast.error(" An error occurred while adding to WatchLater.", {
                   position: "top-right",
                 });
               }
            
        } catch (error) {
            console.log('fetch error', error);
 
            toast.error(" An error occurred while adding to favorites." , { position: "top-right",pauseOnHover: true, closeOnClick: true,  })
            
        }
            
        
          
         
        
    }


  return (
    <div className="mt-5">
       <button className="bg-cyan-700 p-3 text-xl rounded font-medium" onClick={watchLater}>Add To WatchLater</button>
      
    </div>
  )
}

export default WatchLaater
