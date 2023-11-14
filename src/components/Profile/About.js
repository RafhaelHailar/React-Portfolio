import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="flex bg-blackish rounded">
            <div style={{borderRight:"1px solid gray"}} className="px-2 py-4">
                <div className="px-2 mb-2">
                    <Link to="/" className="text-white active hover:underline text-lg font-bold">About</Link>
                </div>
                <div className="flex flex-col">
                    {
                        ['overview','work and education','places lived','contact and basic info','details About Rafhael Hailar'].map(path => {
                            const displayname = path[0].toUpperCase() + path.slice(1);
                            const pathname = path.replaceAll(" ","_"); 
                            return <Link className="text-grayte text-xs font-bold px-2 py-1.5 my-0.5" to={pathname}>{displayname}</Link>
                        })
                    }
                </div>
            </div>
            <div className="flex-1">

            </div>
        </div>
    );
}

export default About;