import { Link } from "react-router-dom";
import FBIcons from "./FBIcons";
import { useState } from "react";

const buttonClassess = "w-6 h-6 rounded-full flex justify-center items-center transition-all ";

const Chat = ({onShowChat,onHideChat,chatBox}) => {
  const [isTyping,setIsTyping] = useState(false); 
  const [buttonColor,setButtonColor] = useState("rgba(255,255,255,0.3)");
  
   return (
    <div className="fixed flex h-3/6 right-0 bottom-0 rounded text-white z-[100]">
        <div tabIndex={1} ref={chatBox} className="flex flex-col h-full flex-1 bg-blackish"  style={{boxShadow: "0 0 2px rgba(0,0,0,0.8)"}}  onFocus={() => setButtonColor("#0866FF")} onBlur={() => setButtonColor("rgba(255,255,255, 0.3)")}>   
          <div className="flex justify-between items-center" style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
            <div className="relative flex items-center ">
              <button className="absolute h-full py-1.5 px-1.5">
                <Link to="" className="inline-block w-8 h-8 rounded-full overflow-hidden flex">
                  <img src="https://images.ctfassets.net/ww1ie0z745y7/2ZLgATkZvsbHjsnrPRzBYu/e592901dccc526622e39898e9271a7ef/Goldfish.jpeg?q=75" width="100%"/>
                </Link>
              </button>
              <button className="flex pl-11 pr-2 items-center gap-2 py-3.5 h-full ">
                <div className="text-xs font-bold">Rafhael Hailar</div>
                <FBIcons icon="drop" color={buttonColor} size="0.5rem" />
              </button>
            </div>
            <div className="flex px-0.5 ">
              <button className={buttonClassess}>
                <FBIcons icon="call" color={buttonColor} size=".8rem" />   
              </button>
              <button className={buttonClassess}>
                <FBIcons icon="videoCall" color={buttonColor} size=".8rem" />
              </button>
              <button className={buttonClassess}>
                <FBIcons icon="minimize" size="1.5rem" color={buttonColor} />
              </button>
              <button className={buttonClassess} onClick={onHideChat}>
                <FBIcons icon="closeChat" color={buttonColor} size="1.2rem"/>
              </button>
            </div>
          </div>
          <div className="flex-1 ">

          </div>
          <div className={"flex items-center py-2 px-1 " + (!isTyping ? "gap-1" : "gap-0") } style={{borderTop: "1px solid rgba(255,255,255, 0.1)"}}>
            <button className={buttonClassess}>
              <FBIcons icon="addMore" size="1rem" color={buttonColor} />
            </button>
            <button className={buttonClassess + (isTyping ? " w-0" : "")}>
              <FBIcons icon="chatFile" size="1rem" color={buttonColor} />
            </button>
            <button className={buttonClassess + (isTyping ? " w-0" : "")}>
              <FBIcons icon="chatSticker" size="1rem" color={buttonColor}  />
            </button>
            <button className={buttonClassess + (isTyping ? " w-0" : "")}>
              <FBIcons icon="chatGif" size="1rem" color={buttonColor}  />
            </button>
            <div className={"w-32 rounded-full flex-1 bg-grayish py-1 pl-3 pr-1 flex items-center " + (isTyping && "mx-1") }>
              <input type="text" className="w-full bg-transparent outline-none text-xs" placeholder="Aa" onChange={event => {
                  if (event.target.value === "") setIsTyping(false);
                  else setIsTyping(true);
               }}/>
              <button className="flex items-center justify-center rounded-full p-1">
                <FBIcons icon="chatEmoji" size="1rem" color={buttonColor}/>
              </button>
            </div>
            {
              isTyping ?
                <button className="flex items-center justify-center rounded-full p-1">
                  <FBIcons icon="send" size="1rem" color={buttonColor} />
                </button> :
                 <button className="flex items-center justify-center rounded-full p-1">
                  <FBIcons icon="chatLike" size="1rem" color={buttonColor} />
                </button>
            }
          </div>
       </div>
       <div className="flex items-end justify-center">
         <div className="px-4 pb-10 relative flex" onClick={onShowChat}>
            <div className="userChatMin">
                <button className="rounded-full overflow-hidden">
                  <div className="w-10 h-10 rounded-full flex">
                     <img src="https://images.ctfassets.net/ww1ie0z745y7/2ZLgATkZvsbHjsnrPRzBYu/e592901dccc526622e39898e9271a7ef/Goldfish.jpeg?q=75" width="100%" />
                  </div>
                </button>
                <div className="hidden">
                    <button className="flex rounded-full bg-blackish absolute right-2 top-0 -mt-1">
                        <FBIcons icon="close" size="0.5" />
                    </button>
                </div>
            </div>
            <div className="hidden">
                <div className="arrowLRight absolute rounded-lg bg-blackish text-xs w-36 right-full">
                    <div className="p-2" >
                        <div className="font-bold">Rafhael Hailar</div>
                        <div className="text-grayte">You: Hello, Handome..</div>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Chat;
