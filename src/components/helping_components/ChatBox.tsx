import { FaArrowLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useStore,useChatStore } from "../../store/useStore";
import ChatHistory from "./ChatHistory";
import { useEffect } from "react";

const ChatBox = () => {

    const {setCount, Name, isDark, count} = useStore();
    const {chatMessages} = useChatStore()

    useEffect(() => {
      console.log(chatMessages.reverse())
    },[chatMessages.length])

    const getInitials = (name: string): string => {
        const nameArray = name.trim().split(' ');
        if (nameArray.length === 1) {
          return nameArray[0].charAt(0).toUpperCase();
        }
        return nameArray[0].charAt(0).toUpperCase() + nameArray[1].charAt(0).toUpperCase();
      };

  return (
    <div className=" w-full h-full md:w-[75%] overflow-y-hidden " >
        <div data-theme={`${isDark && 'dracula'}`} className={` ${!isDark && 'bg-slate-200'} ${ count == 2 ? ' w-full flex flex-row sticky top-0 items-center p-4 border-b-[1px] ' : 'hidden' } `} >
            <button className={` md:hidden `} onClick={() => setCount(1)} ><FaArrowLeft/></button>
            <div className="avatar placeholder">
          <div className=" ml-6 bg-sky-300 text-white font-semibold w-14 rounded-full">
            <span>{getInitials(Name)}</span>
          </div>
        </div>
        <div className=" flex flex-col justify-center ml-3 " >
            <span className=" Name font-semibold " >{Name}</span>
            <span className=" text-xs text-slate-400 font-semibold " >15 members</span>
        </div>
        <div className=" ml-auto dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1"><BsThreeDotsVertical/></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        </div>
        <ChatHistory/>
    </div>
  )
}

export default ChatBox