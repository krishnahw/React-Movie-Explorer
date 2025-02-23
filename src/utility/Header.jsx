import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between p-5 bg-emerald-700">
        <h1 className="font-semibold text-3xl">Movies</h1>
        <button
          onClick={handleHome}
          className="hover:bg-emerald-400 rounded hover:scale-120 transition-transform text-xl "
        >
          Home
        </button>
      </div>

      <Search />
    </>
  );
};

export default Header;
