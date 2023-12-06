import { Link } from "react-router-dom";
import FBIcons from "./FBIcons";
import { useState, useEffect, useRef } from "react";
import { getViewerEmail, setViewerEmail, createMessage, getMessages} from "./ChatContainer.js";
import RafhaelHailarImage from "../images/rafhael_hailar.jpg";
import { stringLimitter } from "../utility";
import Message from "./Message";

const buttonClassess = "w-6 h-6 rounded-full flex justify-center items-center transition-all ";
const buttonClassVaryingW = buttonClassess.replace("w-6","");

const ChatDisplayState = {
     hidden: "hidden",
     shown: "shown",
     minimized: "minimize"
}

/*
 *  Pure / Side Effect function
 *  @params {JS regular object} container
 *  @params {REACT state setter} setDisplay
 *
 *  @result --create the handlers for the state of display for the chat
*/
function chatDisplayHandlers(container,setDisplay) {
    container.show = function() {
        setDisplay(ChatDisplayState.shown);
    }

    container.hide = function() {
        setDisplay(ChatDisplayState.hidden);
    }

    container.minimize = function() {
        setDisplay(ChatDisplayState.minimized);
    }
}

const Chat = ({setChatDisplay}) => {
  const [isTyping,setIsTyping] = useState(false); 
  const [buttonColor,setButtonColor] = useState("rgba(255,255,255,0.3)");
  const [chatDisplay,setDisplay] = useState(ChatDisplayState.hidden);

  const [isEmailSet,setIsEmailSet] = useState(getViewerEmail() !== "" && getViewerEmail() !== null && getViewerEmail() !== undefined);

  const [messages,setMessages] = useState(getMessages());
  const messagesContainer = useRef();

  //set up the handlers
  useEffect(() => {
    chatDisplayHandlers(setChatDisplay,setDisplay);
  },[setChatDisplay]);

  const chatForm = useRef();
  const chatInput = useRef();

  useEffect(() => {
    messagesContainer.current.scrollTo(0,messagesContainer.current.scrollHeight);
  },[messages,chatDisplay]);

  useEffect(() => {
     if (chatDisplay === ChatDisplayState.shown && isEmailSet) chatInput.current.focus();
  },[chatDisplay,isEmailSet]);
 
  function handleSetEmail(event) {
      event.preventDefault();
      setIsEmailSet(setViewerEmail(event.target.email.value));
  }

  function isNotShown() {
    return chatDisplay !== ChatDisplayState.shown;
  }

   return (
    <div className="fixed flex h-96 right-0 bottom-0 rounded text-white z-[100]">
        <div tabIndex={1}  className={"flex flex-col h-full flex-1 relative  bg-blackish " + (isNotShown() && "hidden")}  style={{boxShadow: "0 0 2px rgba(0,0,0,0.8)"}}  onFocus={() => setButtonColor("#0866FF")} onBlur={() => setButtonColor("rgba(255,255,255, 0.3)")}>   
          <div className="flex justify-between items-center" style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
            <div className="relative flex items-center ">
              <button className="absolute h-full py-1.5 px-1.5">
                <Link to="" className="inline-block w-8 h-8 rounded-full overflow-hidden flex">
                  <img src={RafhaelHailarImage} alt="Rafhael Hailar" width="100%"/>
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
              <button className={buttonClassess} onClick={() => setChatDisplay.minimize()}>
                <FBIcons icon="minimize" size="1.5rem" color={buttonColor}/>
              </button>
              <button className={buttonClassess} onClick={() => setChatDisplay.hide()}>
                <FBIcons icon="closeChat" color={buttonColor} size="1.2rem"/>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col relative">
              <div ref={messagesContainer} className="flex-1 flex flex-col max-h-[17.4rem] py-1 pr-1.5 overflow-auto" >
                  {
                      (messages).map((message,index) => {
                           return <Message key={index} id={index} />
                       })
                  }
              </div>
              <div className={"pl-1 text-[0.5rem] text-grayte " + (!isEmailSet && "hidden")}> 
                <span>{getViewerEmail()}</span>   
                <button onClick={()  => setIsEmailSet(false)} className="ml-0.5 text-blueish no-hover"> change email</button>
              </div>
              <div className={"flex items-center py-2 px-1 w-64 " + (isTyping ? "gap-0" : "gap-1") } style={{borderTop: "1px solid rgba(255,255,255, 0.1)"}}>
                <button className={buttonClassess}>
                  <FBIcons icon="addMore" size="1rem" color={buttonColor} />
                </button>
                <button className={buttonClassVaryingW + (isTyping ? " w-0" : " w-6")}>
                  <FBIcons icon="chatFile" size="1rem" color={buttonColor} />
                </button>
                <button className={buttonClassVaryingW + (isTyping ? " w-0" : " w-6")}>
                  <FBIcons icon="chatSticker" size="1rem" color={buttonColor}  />
                </button>
                <button className={buttonClassVaryingW + (isTyping ? " w-0" : " w-6")}>
                  <FBIcons icon="chatGif" size="1rem" color={buttonColor}  />
                </button>
                <div className={"w-32 rounded-2xl flex-1 bg-grayish py-1 pl-3 pr-1 flex items-center flex" + (isTyping && "mx-1")}>
                  <div className="relative text-xs w-40">
                      <div contentEditable="true" ref={chatInput} className={"bg-transparent outline-none "} onInput={event => {
                          if (event.target.innerHTML === "" || event.nativeEvent.inputType === "insertParagraph") {
                              setIsTyping(false);
                              event.target.innerHTML = "";
                          }else {
                              chatForm.current.message.value = event.target.innerHTML.replaceAll("<br>","\n").replaceAll("&nbsp;"," ");
                              setIsTyping(true);
                          }
                       }} onKeyDown={(event) => {
                            if (!event.shiftKey && event.key === "Enter" && isTyping) {
                                createMessage(chatForm.current,setMessages);
                                chatForm.current.reset();
                            }
                        }}>
                      </div>
                      <form className="hidden" ref={chatForm}>
                          <input type="email" defaultValue={getViewerEmail()} name="email" />
                          <input type="text" name="message"/>
                          <input type="number" defaultValue={Number(new Date())} name="dateCreated"/>
                      </form>
                      <div className={"top-0 absolute text-grayte " + (isTyping && "hidden") }>Aa</div>
                  </div>
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
              <div className={"absolute flex justify-center h-full w-full z-50 " + (isEmailSet && "hidden")} style={{backgroundColor: "rgba(0,0,0,0.5"}}>
                     <div className="flex flex-col items-center gap-1 mt-16">
                        <div className="w-16 h-16 rounded-full overflow-hidden ">
                           <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt='user profile'/>
                        </div>
                        <div className="font-bold">Set Email</div>
                        <form className="flex flex-col items-center gap-1" onSubmit={handleSetEmail}>
                            <div className="bg-blackish rounded-lg">
                                <input type="email" name="email" className="px-2 text-sm py-1 bg-transparent outline-none" />
                            </div> 
                            <button className="bg-blueish font-bold px-5 py-1 ">SET</button>
                        </form>
                     </div>
              </div>
             
           </div>
       </div>
       <div className="flex flex-col items-end justify-end p-5">
         <div>
            <div className={"relative flex " + (chatDisplay !== ChatDisplayState.minimized && "hidden")} >
                <div className="userChatMin">
                    <button className="rounded-full overflow-hidden" onClick={() => setChatDisplay.show()}>
                      <div className="w-10 h-10 rounded-full flex">
                         <img src={RafhaelHailarImage} alt="Rafhael Hailar"  width="100%" />
                      </div>
                    </button>
                    <div className="hidden">
                        <button className="flex rounded-full bg-blackish absolute -right-1.5 top-0 -mt-1" onClick={() => setChatDisplay.hide()}>
                            <FBIcons icon="close" size="0.5" />
                        </button>
                    </div>
                </div>
                <div className="hidden">
                    <div className="arrowLRight absolute rounded-lg bg-blackish text-xs w-36 right-full mr-3">
                        <div className="p-2" >
                            <div className="font-bold">Rafhael Hailar</div>
                            {   messages.length > 0 &&
                                <div className="text-grayte">You: {stringLimitter(messages[messages.length - 1].message,15)}</div>
                            }
                        </div>
                    </div>
                </div>
             </div>
         </div>
         <div>
             <div>
                    <button className="bg-grayish rounded-full overflow-hidden" onClick={() => setChatDisplay.show()} >
                      <div className="w-10 h-10 items-center justify-center rounded-full flex">
                          <FBIcons icon="writeMessage" size={0.8} />
                      </div>
                    </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
