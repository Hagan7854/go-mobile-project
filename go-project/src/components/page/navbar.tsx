import { FaBell, FaLock, FaSearch } from "react-icons/fa";
import { Icon } from "../ui/icon";
import { ProfilePic } from "@/assets/icons";
import { Link } from "react-router-dom";
import { useSidebar } from "@/sidebarcontext";

const Navbar = () => {
  const { sidebarToggle } = useSidebar();

  return ( 
    <>

<nav className="flex justify-between ml-64 h-16  items-center">
      <div className="flex items-center flex-row gap-2">
        <Icon name="Menu" color="green" className="cursor-pointer" onClick={sidebarToggle} />
        <div className="flex flex-row items-center gap-2 bg-[#F8F8F8] py-1 px-3 rounded-2xl">
          <FaSearch className="text-gray-400 w-5" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-[#F8F8F8] placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-row justify-around items-center gap-3">
        <FaBell className="text-green-500 w-6" />
        <img src={ProfilePic} alt="profile picture" className="w-6" />
        <p className="text-green-500 text-base font-medium cursor-pointer ">
            <Link to="/login">
            Logout
            </Link></p>
        <FaLock className="text-green-500 w-6" />
      </div>
    </nav>
    </>
    
  );
};

export default Navbar;
