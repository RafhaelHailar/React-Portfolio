import { Link } from "react-router-dom";
import FBIcons from "./FBIcons";

const buttonClassess = "w-6 h-6 rounded-full flex justify-center items-center";
const buttonColors = "rgba(255, 255, 255, 0.3)";

const Chat = () => {
  return (
    <div className="fixed flex flex-col w-64 h-3/6 bg-blackish right-16 bottom-0 rounded text-white" style={{boxShadow: "0 0 2px rgba(0,0,0,0.8)"}}>
      <div className="flex justify-between items-center" style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
        <div className="relative flex items-center ">
          <button className="absolute h-full py-1.5 px-1.5">
            <Link to="" className="inline-block w-8 h-8 rounded-full overflow-hidden flex">
              <img src="https://images.ctfassets.net/ww1ie0z745y7/2ZLgATkZvsbHjsnrPRzBYu/e592901dccc526622e39898e9271a7ef/Goldfish.jpeg?q=75" width="100%"/>
            </Link>
          </button>
          <button className="flex pl-11 pr-2 items-center gap-2 py-3.5 h-full ">
            <div className="text-xs font-bold">Rafhael Hailar</div>
            <FBIcons icon="drop" color={buttonColors} size="0.5rem" />
          </button>
        </div>
        <div className="flex px-0.5 ">
          <button className={buttonClassess}>
            <FBIcons icon="call" color={buttonColors} size=".8rem" />   
          </button>
          <button className={buttonClassess}>
            <FBIcons icon="videoCall" color={buttonColors} size=".8rem" />
          </button>
          <button className={buttonClassess}>
            <FBIcons icon="minimize" size="1.5rem" color={buttonColors} />
          </button>
          <button className={buttonClassess}>
            <FBIcons icon="closeChat" color={buttonColors} size="1.2rem"/>
          </button>
        </div>
      </div>
      <div className="flex-1 ">

      </div>
      <div className="flex items-center py-2 gap-1 px-1" style={{borderTop: "1px solid rgba(255,255,255, 0.1)"}}>
        <button className={buttonClassess}>
          <FBIcons icon="addMore" size="1rem" color={buttonColors} />
        </button>
        <button className={buttonClassess}>
          <FBIcons icon="chatFile" size="1rem" color={buttonColors} />
        </button>
        <button className={buttonClassess}>
          <FBIcons icon="chatSticker" size="1rem" color={buttonColors}  />
        </button>
        <button className={buttonClassess}>
          <FBIcons icon="chatGif" size="1rem" color={buttonColors}  />
        </button>
        <div className="w-32 rounded-full bg-grayish py-1 pl-3 pr-1 flex items-center">
          <input type="text" className="w-full bg-transparent outline-none text-xs" placeholder="Aa"/>
          <button className="flex items-center justify-center rounded-full p-1">
            <FBIcons icon="chatEmoji" size="1rem"/>
          </button>
        </div>
        <button className="flex items-center justify-center rounded-full p-1">
          <FBIcons icon="chatLike" size="1rem" color={buttonColors} />
        </button>
      </div>
    </div>
  )
}

export default Chat;