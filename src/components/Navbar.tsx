import { useStore } from "../store/useStore";
import  Drawer  from "./Drawer";
import { IoMdSearch } from "react-icons/io";
import Tab from "./Tab";

const Navbar = () => {

  const {isDark} = useStore();

    return (
      <div className=" sticky top-0 z-50 " >
        <nav data-theme={`${isDark ? 'dracula': 'aqua'}`} className=" p-4 flex flex-row justify-between items-center text-white">
        <div className="container flex flex-row gap-8 items-center mx-auto">
          <Drawer/>
          <h1 className="text-lg font-semibold ">Telegram</h1>
        </div>
        <div className=" w-6 " ><IoMdSearch size='lg' /></div>
      </nav>
      <Tab/>
      </div>
    );
  };
  
  export default Navbar;