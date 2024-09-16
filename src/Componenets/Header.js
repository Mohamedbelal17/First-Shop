import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <header className="p-4 flex  justify-between items-center text-center border-b-2 border-r-gray-300 fixed top-0 bg-white w-full z-40 ">
        <h1 className="font-semibold text-xl">FakeShop</h1>
        <Link to="/Cart">
          <FaCartShopping />
        </Link>
      </header>
    </Link>
  );
}

export default Header;
