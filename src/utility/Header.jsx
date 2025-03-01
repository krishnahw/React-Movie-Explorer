import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between p-5 bg-black text-white">
        <h1 className="font-semibold text-3xl font-serif">Movies</h1>
        <button
          onClick={handleHome}
          className="hover:bg-gray-700 p-2 rounded hover:scale-120 transition-transform text-xl font-serif"
        >
          Home
        </button>
      </div>

      <Search />
    </>
  );
};

export default Header;
