import { useEffect, useRef } from "react"
import { useChatStore, useStore } from "../../store/useStore"
import formatDate from "../../utils/FormatDate"


const ChatHistory = () => {

  const {Name,isDark,count} = useStore()
  const {chatMessages} = useChatStore()
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <>
    {
      chatMessages.length > 0 && count == 2 && (
        <div className="w-full h-full overflow-hidden " >
          <div ref={chatContainerRef} className=" relative w-full h-[75vh] p-2 md:p-4 overflow-y-scroll " >
           {
            chatMessages.length > 0 && chatMessages.reverse().map((item : any, idx : number) =>{
              if(item?.sender?.name == Name){
                return (
                    <div key={idx} className="chat chat-start">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="chat-header  ">
                        <span className=" font-semibold mr-4 " >{item?.sender?.name}</span>
                        <time className="text-xs opacity-50">{formatDate(item?.sender?.updated_at)}</time>
                      </div>
                      <div className="chat-bubble">{item?.message}</div>
                      <div className="chat-footer opacity-50">Delivered</div>
                    </div>
                )
              }else{
               return (
                  <div key={idx} className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="data:image/jpeg;base64,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" />
                  </div>
                </div>
                <div className="chat-header">
                <span className=" font-semibold mr-4 " >{item?.sender?.name}</span>
                  <time className="text-xs opacity-50">{formatDate(item?.sender?.updated_at)}</time>
                </div>
                <div className="chat-bubble">{item?.message}</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
                  </div>
               )
              }
            })
           }
           {
            count == 2 && (
              <div data-theme={`${isDark && 'dracula'}`} className={` flex flex-row gap-6 p-4 fixed bottom-2 ${!isDark && 'bg-slate-200'}  w-full `} >
              <input type="text" placeholder="Message" className="input input-bordered w-[65%]" />
              <button className=" btn " >Send</button>
              </div>
            )
           }
        </div>
        </div>
      )
    }
    </>
  )
}

export default ChatHistory