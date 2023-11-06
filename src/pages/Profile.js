import FBIcons from "../components/FBIcons";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const currentLocation = location.pathname.replace("/rafhael/","");
    return (
        <>
            <div className="bg-blackish p-x70" >
                <button>
                    <div className="bg-black rounded overflow-hidden" style={{height: "23rem"}}>
                        <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg" width="100%" />
                    </div>
                </button>
                <div className="px-7">
                    <div className="h-20 flex justify-between  items-end">
                        <div className="flex justify-between items-end gap-4">
                            <button>
                                <div className="rounded-full bg-black" style={{padding: "0.2rem"}}>
                                    <div className="bg-lime-600 rounded-full overflow-hidden flex align-center justify-center" style={{width: "8.5rem",height: "8.5rem"}}>
                                        <img src="https://images.ctfassets.net/ww1ie0z745y7/2ZLgATkZvsbHjsnrPRzBYu/e592901dccc526622e39898e9271a7ef/Goldfish.jpeg?q=75" width="100%"/>
                                    </div>
                                </div>
                            </button>
                            <div className="h-16 text-white ">
                                <div className="font-black text-2xl">
                                    Rafhael Hailar
                                </div>
                                <div className="text-lg text-gray-400">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div className="h-11">
                            <div className="text-white text-xs font-semibold flex gap-1.5">
                                <button className="bg-blueish px-2.5 py-1.5 rounded flex items-center gap-1">
                                    <FBIcons icon="addFriend" size="1em" color="white"></FBIcons>
                                    Add friend
                                </button>
                                <button className="bg-grayish px-2.5 py-1.5 rounded flex items-center gap-1">
                                    <FBIcons icon="messenger" size="1em" color="white"></FBIcons>
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-7 mt-3" >
                    <div className="text-white profile-routes text-xs font-semibold flex py-1 justify-between">
                        <div className="flex">
                            {
                                //Routes
                                ["posts","projects","about","contacts"].map(paths => {
                                    const pathName = paths[0].toUpperCase() + paths.slice(1);
                                    return <Link className={paths == currentLocation ? "active" : ""} to={"./" + paths}>{pathName}</Link>;
                                })
                            }
                        </div>
                        <div className="flex items-center">
                            <button className="night-btn">
                                <FBIcons icon="more" size="1.2em" color="white"></FBIcons>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
            <Navigate to={currentLocation == "" ? "./posts" : `./${currentLocation}`}></Navigate>
        </>
    );
}

export default Profile;