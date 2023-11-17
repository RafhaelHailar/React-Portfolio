import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import FBIcons from './FBIcons';
import { Link } from 'react-router-dom';

const NavigationBar = ({ss}) => {
   
    return (
        <div className="sticky top-0 w-full bg-blackish px-3 py-1 flex justify-between z-10 relative overflow-hidden" style={{boxShadow: "0 .5px .1px rgba(255,255,255,.15)"}}>
            <div className='flex justify-center items-center gap-2'>
                <Link to="/home">
                    <FBIcons icon="fbIconModified" color="none" size="2em" />
                </Link>
                <div className='bg-grayish inline-flex gap-2 items-center py-2 px-2.5 rounded-full'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-grayte text-xs'/>
                    <input type="text" className="bg-transparent outline-none text-white text-xs w-full" placeholder='Search Rafhael' size={22}/>
                </div>
            </div>
            <div className='flex nav-links absolute w-full justify-center -z-10'>
                <Link to="/home">
                    <FBIcons icon="home" size="1.2em" color="#B0B3B8"></FBIcons>
                </Link>
                <Link to="/video">
                    <FBIcons icon="video" size="1.2em" color="#B0B3B8"></FBIcons>
                </Link>
                <Link to="/groups">
                    <FBIcons icon="groups" size="1.2em" color="#B0B3B8"></FBIcons>
                </Link>
                <Link to="/gaming">
                    <FBIcons icon="gaming" size="1.2em" color="#B0B3B8"></FBIcons>
                </Link>
            </div>
            <div className='flex nav-actions'>
                <button>
                    <FBIcons icon="menu" size="1em" color="white"></FBIcons>
                </button>
                <button ref={ss} onClick={() => alert("HEYO")}>
                    <FBIcons icon="messenger" size="1em" color="white"></FBIcons>
                </button>
                <button>
                    <FBIcons icon="notification" size="1em" color="white"></FBIcons>
                </button>
                <button className='profile'>
                    <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt='user profile'/>
                </button>
            </div>
        </div>
    );
}

export default NavigationBar;