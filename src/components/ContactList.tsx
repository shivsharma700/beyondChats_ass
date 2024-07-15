import { useEffect } from "react";
import Contact from "./helping_components/Contact";
import { useChatStore, useStore } from "../store/useStore";

const ContactList = () => {
  const { chatList, fetchChats, isLoading } = useChatStore();
  const { isDark } = useStore();

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  return (
    <div data-theme={`${isDark ? 'dim' : 'cupcake'}`} className="flex flex-col w-full h-full">
      <div className=" w-full h-[85vh]  overflow-y-scroll md:border-r-[1px]">
        {isLoading ? (
          <div className="w-full mt-10 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            {chatList.length > 0 && chatList.map((item: any, idx: number) => (
              <Contact key={idx} chat={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactList;
