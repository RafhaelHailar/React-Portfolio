import FBIcons from "../FBIcons";
import PostItem from "../PostItem";
import {total} from "../../posts.js";

const Posts = () => {
    return (
        <div>
            <div className="flex-col lg:flex-row items-center lg:items-stretch flex gap-3">
                <div className="w-full lg:min-w-0 lg:w-2/5">
                    <div className="bg-blackish rounded-lg py-1.5 px-3 text-white sticky top-10">
                        <h1 className="text-white font-bold">Intro</h1>
                        <div className="text-sm text-gray-200 text-center py-2.5" style={{borderBottom: "1px solid gray"}}>
                            A passionate web, game, and software dev.
                        </div>
                        <ul className="text-xs text-gray-300 bio-intro font-bold">
                            <li>
                                <FBIcons icon="school" />
                                <span>
                                    Studied at <span className="text-white">Mamatid Senior High School</span>
                                </span>
                            </li>
                            <li>
                                <FBIcons icon="school" />
                                <span>
                                    Studied at <span className="text-white">Kodego BootCamp</span>
                                </span>
                            </li>
                            <li>
                                <FBIcons icon="house" />
                                <span>
                                    Lives in <span className="text-white">Cabuyao, Laguna</span>
                                </span>
                            </li>
                            <li>
                                <FBIcons icon="location" />
                                <span>
                                    From <span className="text-white">Cabuyao, Laguna</span>
                                </span>
                            </li>
                        </ul>
                        <div className="text-xs font-bold flex gap-2 flex-wrap">
                            {
                                ['html','css','js','bootstrap','tailwind','nodejs','react','php','mysql','mongodb','figma'].map((tool,index) => {
                                    return (
                                        <button key={index} className="flex items-center py-1.5 px-3.5 gap-1 rounded-full" style={{border: "1px solid rgba(255,255,255,.1)"}}>
                                            <FBIcons icon={tool} size="1rem"></FBIcons>
                                            {tool.toUpperCase()}
                                        </button>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/5 w-full lg:min-w-0 flex flex-col gap-3"> 
                    <div className="bg-blackish rounded py-1.5 px-3 flex justify-between text-white items-center"> 
                        <h1 className="font-extrabold">Posts</h1>
                        <button className="flex items-center text-xs font-bold gap-1.5 bg-grayish px-2.5 py-1.5 rounded">
                            <i className="icon-filter mt-1" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/Bf445eaOe1F.png)",backgroundPosition: "0px -307px", backgroundSize: "auto",width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                            <span>Filters</span>
                        </button>
                    </div>
                    {
                        new Array(total).fill(null).map((_,id) => {
                            return <PostItem id={id + 1} key={id}></PostItem>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Posts;
