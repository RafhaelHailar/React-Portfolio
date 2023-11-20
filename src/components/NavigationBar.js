import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import FBIcons from './FBIcons';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = ({ss}) => {
    const location = useLocation();
    let currPath = location.pathname.split("/"); // get all the paths and put it in array
    currPath = currPath[currPath.length - 1]; // get the last path
    const isPathPreview = currPath === "preview";

    return (
        <div className={"sticky top-0 w-full bg-blackish px-3 py-1 flex z-10 relative " + (isPathPreview ? "justify-end" : "justify-between")} style={{borderBottom: "1px solid rgba(255,255,255,.15)"}}>
            <div className={'flex justify-center items-center gap-2 ' + (isPathPreview && "hidden") }>
                <Link to="/home">
                    <FBIcons icon="fbIconModified" color="none" size="2em" />
                </Link>
                <div className='bg-grayish inline-flex gap-2 items-center py-2 px-2.5 rounded-full'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-grayte text-xs'/>
                    <input type="text" className="hidden lg:inline  bg-transparent outline-none text-white text-xs w-full" placeholder='Search Rafhael' size={22}/>
                </div>
            </div>
            <div className={'flex nav-links absolute top-0 py-1 left-0 hidden md:flex  gap-x-1 items-center h-full  w-full justify-center -z-10 ' + (isPathPreview && "md:hidden")}>
	    {["home","video","groups","gaming"].map(link => {
		return <Link to={"/" + link} key={link} className="xl:px-10 px-7 rounded-md inline-block h-full flex items-center">
			    <FBIcons icon={link} size="1.2em" color="#B0B3B8" />
		       </Link>
    	     })}
            </div>
            <div className='flex nav-actions'>
                <button className="md:hidden flex">
                    <FBIcons icon="addMore2" size="1em" color="white"></FBIcons>
                </button>
                <button className="hidden md:flex">
                    <FBIcons icon="menu" size="1em" color="white"></FBIcons>
                </button>
                <button ref={ss} onClick={() => alert("HEYO")} className="flex">
                    <FBIcons icon="messenger" size="1em" color="white"></FBIcons>
                </button>
                <button className="flex">
                    <FBIcons icon="notification" size="1em" color="white"></FBIcons>
                </button>
                <button className='profile flex'>
                    <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt='user profile'/>
                </button>
            </div>
        </div>
    );
}

export default NavigationBar;
