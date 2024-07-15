import { useChatStore, useStore } from "../../store/useStore"
import formatDate from "../../utils/FormatDate";

const Contact = ({chat}: {chat: any}) => {

  const {isDark,setCount,setName} = useStore();
  const {fetchChatMessages} = useChatStore()

  const getInitials = (name: string): string => {
    const nameArray = name.trim().split(' ');
    if (nameArray.length === 1) {
      return nameArray[0].charAt(0).toUpperCase();
    }
    return nameArray[0].charAt(0).toUpperCase() + nameArray[1].charAt(0).toUpperCase();
  };

  return (
    <div 
      className= {` border-b-[1px] ${isDark? 'border-b-slate-700' : 'border-b-slate-200'} p-2 flex flex-row gap-4  relative ${isDark ? " hover:bg-slate-700 " : "hover:bg-slate-200" } transition-all`} 
      onClick={() =>{
        setName(chat?.creator?.name)
        fetchChatMessages(chat?.id)
        setCount(2)
      } }
    >
        <div className="avatar placeholder">
          <div className=" bg-sky-300 text-white font-semibold w-14 rounded-full">
            <span>{getInitials(chat?.creator?.name || "Name")}</span>
          </div>
        </div>
        <div className=" flex flex-col justify-center " >
            <span className=" Name font-semibold " >{chat?.creator?.name || "Name"} </span>
            <span className=" text-xs text-slate-400 font-semibold " >random message jooho adfsefsda ohoihi fsdfsd</span>
        </div>
        <div className=" absolute top-5 right-2 text-xs font-semibold text-slate-400 " > {formatDate(chat?.creator?.updated_at)}</div>
    </div>
  )
}

export default Contact