import { Link, Outlet, useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();
    let paths = location.pathname.split("/");
    let currPath = paths[paths.length - 1];
    currPath = (currPath === 'about') ? '' : currPath;
    return (
        <div className="flex bg-blackish rounded mb-3">
            <div style={{borderRight:"1px solid rgba(255,255,255,0.15)"}} className="px-2 py-4 w-3/12">
                <div className="px-2 mb-2">
                    <Link to="/" className="text-white active hover:underline text-lg font-bold">About</Link>
                </div>
                <div className="flex flex-col">
                    {
                        ['overview','work and education','places lived','contact and basic info','details About Rafhael Hailar'].map(path => {
                            const displayname = path[0].toUpperCase() + path.slice(1);
                            const pathname = path.replaceAll(" ","_"); 
                            const activeStyle = "bg-bluewash text-blueish active";
                            return <Link key={displayname} className={"text-xs font-bold px-2 py-2 my-1 " + ((pathname === currPath || (path === 'overview' && currPath === '')) ? activeStyle : "text-grayte")} to={pathname}>{displayname}</Link>
                        })
                    }
                </div>
            </div>
            <div className="flex-1">
                    <Outlet />
            </div>
        </div>
    );
}

export default About;
