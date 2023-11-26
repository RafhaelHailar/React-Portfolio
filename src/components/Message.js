import { getMessage, updateMessage, sendMessage } from "./ChatContainer";
import FBIcons from "./FBIcons";
import { useState, useRef, useEffect } from "react";
import { dateTimeFormat } from "../utility";

const buttonClassess = "w-6 h-6 rounded-full flex justify-center items-center transition-all ";

const Message = ({id}) => {
   const message = getMessage(id); 
   const [_,statusUpdated] = useState(1);
    
   const messageForm = useRef();

   function updateStatus(error = null,sent = false) {
       message.sent = sent;
       message.error = error;
       updateMessage(id,message);
       statusUpdated(_ + 1);
   }
    
   useEffect(() => {
       if (!message.sent && !message.error) {
          sendMessage(messageForm.current,updateStatus);
       }
   });
   
   return (
          <div>
              {
                  (!message.sent && !message.error) &&
                      <form className="hidden" ref={messageForm} >
                        <input type="email" name="email" defaultValue={message.email} />
                        <input type="text" name="message" defaultValue={message.message} />
                        <input type="number" defaultValue={message.dateCreated} name="dateCreated"/>
                      </form>
              }
              <div className="text-grayte text-[0.6rem] text-center mb-2">{dateTimeFormat(new Date(Number(message.dateCreated)))}</div>
              <div>
                  <div>
                      <div className="flex w-full justify-end items-center gap-0.5 hiddenTools">
                          <div className="flex invisible px-0.5 gap-0.5">
                               <button className={buttonClassess + " scale-75 -mx-1"}>
                                  <FBIcons icon="moreVertically" color="rgba(255, 255, 255, 0.3" size="1.4rem"/>
                               </button>
                              <button className={buttonClassess + " scale-75 -mx-1"}>
                                  <FBIcons icon="reply" color="rgba(255, 255, 255, 0.3" size="1.4rem"/>
                               </button>
                              <button className={buttonClassess + " scale-75 -mx-1"}>
                                  <FBIcons icon="emoji" color="rgba(255, 255, 255, 0.3" size="0.9"/>
                               </button>
                          </div>
                          <div className="relative max-w-[10rem]">
                              <div className="bg-blueish w-full break-words rounded-xl text-xs p-2" >
                                  {message.message}   
                              </div>
                          </div>
                      </div>
                      <div className="text-right text-[0.6rem] text-grayte mr-1">
                           {message.sent ? "Sent" : message.error ? "Error" : "Sending"}
                      </div>
                  </div>
              </div>
          </div>
    );
}

export default Message;
