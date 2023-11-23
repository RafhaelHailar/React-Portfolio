import { Link } from "react-router-dom";
import FBIcons from "./FBIcons";
import { useState, useEffect, useRef } from "react";
import { viewerEmail, setViewerEmail } from "./ChatContainer.js";

const buttonClassess = "w-6 h-6 rounded-full flex justify-center items-center transition-all ";
const buttonClassVaryingW = buttonClassess.replace("w-6","");

const Chat = ({chatStates,chatDisplay,setChatDisplay}) => {
  const [isTyping,setIsTyping] = useState(false); 
  const [buttonColor,setButtonColor] = useState("rgba(255,255,255,0.3)");

  const [isEmailSet,setIsEmailSet] = useState(viewerEmail !== null);

  const chatInput = useRef();
  useEffect(() => {
     if (chatDisplay === chatStates.shown && isEmailSet) chatInput.current.focus();
  },[chatDisplay,chatStates.shown]);

  function handleSetEmail(event) {
      event.preventDefault();
      setIsEmailSet(setViewerEmail(event.target.email.value));
  }
   return (
    <div className="fixed flex h-96 right-0 bottom-0 rounded text-white z-[100]">
        <div tabIndex={1}  className={"flex flex-col h-full flex-1 relative  bg-blackish " + (chatDisplay !== chatStates.shown && "hidden")}  style={{boxShadow: "0 0 2px rgba(0,0,0,0.8)"}}  onFocus={() => setButtonColor("#0866FF")} onBlur={() => setButtonColor("rgba(255,255,255, 0.3)")}>   
          <div className="flex justify-between items-center" style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
            <div className="relative flex items-center ">
              <button className="absolute h-full py-1.5 px-1.5">
                <Link to="" className="inline-block w-8 h-8 rounded-full overflow-hidden flex">
                  <img src="https://images.ctfassets.net/ww1ie0z745y7/2ZLgATkZvsbHjsnrPRzBYu/e592901dccc526622e39898e9271a7ef/Goldfish.jpeg?q=75" alt="Rafhael Hailar" width="100%"/>
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
              <button className={buttonClassess} onClick={() => setChatDisplay(chatStates.minimized)}>
                <FBIcons icon="minimize" size="1.5rem" color={buttonColor}/>
              </button>
              <button className={buttonClassess} onClick={() => setChatDisplay(chatStates.hidden)}>
                <FBIcons icon="closeChat" color={buttonColor} size="1.2rem"/>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
              <div className="flex-1 flex flex-col justify-end py-1 ">
                  <div>
                    <div className="text-grayte text-xs text-center mb-2">Wed 6:02 PM</div>
                    <div>
                        <div>
                            <div className="flex w-full justify-end items-center gap-0.5 hiddenTools">
                                <div className="flex invisible px-0.5 gap-0.5">
                                     <button className={buttonClassess + " scale-75 -mx-1"}>
                                        <FBIcons icon="moreVertically" color="rgba(255, 255, 255, 0.3" size="1.3rem"/>
                                     </button>
                                    <button className={buttonClassess + " scale-75 -mx-1"}>
                                        <FBIcons icon="reply" color="rgba(255, 255, 255, 0.3" size="1.3rem"/>
                                     </button>
                                    <button className={buttonClassess + " scale-75 -mx-1"}>
                                        <FBIcons icon="emoji" color="rgba(255, 255, 255, 0.3" size="0.8"/>
                                     </button>
                                </div>
                                <div className="relative max-w-[10rem]">
                                    <div className="bg-blueish word-wrap w-full rounded-2xl text-xs p-2">
                                        Hello my friend, I am your old friend asdsadsa sdasd   
                                    </div>
                                </div>
                            </div>
                            <div className="text-right text-xs text-grayte mr-1">
                                Sent
                            </div>
                        </div>
                    </div>
                 </div>
                 <div>
                    <div className="text-grayte text-xs text-center mb-2">Wed 6:02 PM</div>
                    <div>
                        <div>
                            <div className="flex w-full justify-end items-center gap-0.5 hiddenTools">
                                <div className="flex invisible px-0.5 gap-0.5">
                                     <button className={buttonClassess + " scale-75 -mx-1"}>
                                        <FBIcons icon="moreVertically" color="rgba(255, 255, 255, 0.3" size="1.3rem"/>
                                     </button>
                                    <button className={buttonClassess + " scale-75 -mx-1"}>
                                        <FBIcons icon="reply" color="rgba(255, 255, 255, 0.3" size="1.3rem"/>
                                     </button>
                                    <button className={buttonClassess + " scale-75 -mx-1"}>
                                        <FBIcons icon="emoji" color="rgba(255, 255, 255, 0.3" size="0.8"/>
                                     </button>
                                </div>
                                <div className="relative flex-1 w-40">
                                    <div className="bg-blueish word-wrap w-full rounded-2xl text-xs p-2">
                                          HELLO MY FRIEND IF YOU READ THIS MESSAGE YOU ARE  PROABBLY GAY
                                    </div>
                                </div>
                            </div>
                            <div className="text-right text-xs text-grayte mr-1">
                                Sent
                            </div>
                        </div>
                    </div>
                 </div>
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
                          if (event.target.innerHTML === "") {
                              setIsTyping(false);
                              
                          }else setIsTyping(true);
                       }}>
                      </div>
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
                        <form className="flex flex-col items-center" onSubmit={handleSetEmail}>
                            <div className="bg-blackish rounded-lg">
                                <input type="email" name="email" className="px-2 text-sm py-1 bg-transparent outline-none" />
                            </div> 
                            <button className="bg-blueish font-bold px-5 py-1 rounded">SET</button>
                        </form>
                     </div>
              </div>
           </div>
       </div>
       <div className="flex flex-col items-end justify-end p-5">
         <div>
            <div className={"relative flex " + (chatDisplay !== chatStates.minimized && "hidden")} >
                <div className="userChatMin">
                    <button className="rounded-full overflow-hidden" onClick={() => setChatDisplay(chatStates.shown)}>
                      <div className="w-10 h-10 rounded-full flex">
                         <img src="https://images.ctfassets.net/ww1ie0z745y7/2ZLgATkZvsbHjsnrPRzBYu/e592901dccc526622e39898e9271a7ef/Goldfish.jpeg?q=75" alt="Rafhael Hailar"  width="100%" />
                      </div>
                    </button>
                    <div className="hidden">
                        <button className="flex rounded-full bg-blackish absolute -right-1.5 top-0 -mt-1" onClick={() => setChatDisplay(chatStates.hidden)}>
                            <FBIcons icon="close" size="0.5" />
                        </button>
                    </div>
                </div>
                <div className="hidden">
                    <div className="arrowLRight absolute rounded-lg bg-blackish text-xs w-36 right-full mr-3">
                        <div className="p-2" >
                            <div className="font-bold">Rafhael Hailar</div>
                            <div className="text-grayte">You: Hello, Handome..</div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
         <div>
             <div>
                    <button className="bg-grayish rounded-full overflow-hidden" onClick={() => setChatDisplay(chatStates.shown)} >
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
