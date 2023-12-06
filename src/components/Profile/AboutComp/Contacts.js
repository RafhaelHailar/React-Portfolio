import FBIcons from "../../FBIcons";


const Contacts = () => {
  return (
    <div className='py-1.5 px-3 text-white'>
        <ul className="flex flex-col gap-5">
            <li className="text-sm">
                <div className="font-bold mb-3">Contact info</div>
                <div className="text-grayte font-bold text-xs">
                   <div className="flex gap-3" >
                       <FBIcons icon="call" size="1rem" color="rgba(255,255,255,.3" />
                       <span>0999-716-3580</span>
                   </div>
                </div>
            </li>
           <li className="text-sm">
                <div className="font-bold mb-3">Websites and social links</div>
                <div className="text-grayte font-bold text-xs">
                   <div className="flex gap-3" >
                       <FBIcons icon="github" size="1.7rem" />
                       <a href="https://github.com/RafhaelHailar" rel="noreferrer" target="_blank"  className="active hover:underline"  >https://github.com/RafhaelHailar</a>
                   </div>
                </div>
            </li>
            <li className="text-sm">
                <div className="font-bold mb-3">Basic info</div>
                <div className="text-grayte font-bold text-xs">
                   <div className="flex gap-3" >
                        <span>
                            <FBIcons icon="basicInfo" size="18rem"/>
                        </span>
                       <span>A competent and passionate web developer who is experience in making a responsive and funtioning websites.</span>
                   </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Contacts
