import FBIcons from "../components/FBIcons";
import { Link, useSearchParams, Navigate, useNavigate } from "react-router-dom";
import PostStructure from "../components/PostStructure";
import { posts } from "../posts";

const Preview = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const navigate = useNavigate();

    if (id === "" || id === null || posts[id].media === "") return <Navigate to="/"></Navigate>

    const { isGroup, groupPosts } = posts[id];

    //index of group item
    const index = searchParams.get("index");
    const post = isGroup ? groupPosts[index] : posts[id];

    return (
        <div className="md:static z-50  w-full">
            <div className="md:w-2/4 lg:w-3/4 md:absolute left-0 top-0 z-50 h-full bg-black flex justify-center items-center overflow-hidden">
                <div className="px-3 md:py-2 py-1.5 absolute top-0 left-0 flex items-center justify-between">
                    <div className="flex items-center gap-2 z-10">
                        <button className="w-8 h-8 rounded-full flex justify-center items-center bg-blackwash" onClick={() => navigate("/")}>
                            <FBIcons icon="close" size="0.8"></FBIcons>
                        </button>
                        <Link to="/">
                                <FBIcons icon="fbIconModified" size="2em"></FBIcons>
                        </Link>
                    </div>
                    <div>
                        
                    </div>
                </div>
                {
                    isGroup &&
                    <Link  className="absolute left-0 px-3 hover:px-2 h-full flex justify-center items-center active"  to={`?id=${id}&index=${((groupPosts.length - 1) + Number(index)) % groupPosts.length}`} style={{background: "rgba(0, 0, 0, .02)",transition: "500ms",backdropFilter: "brightness(90%) invert(5%) "}}>
                        <button className="w-9 h-9 bg-blackite rounded-full flex justify-center items-center" style={{transform: "rotate(180deg)"}} >
                             <FBIcons icon="arrow" size="0.7" />
                        </button>
                    </Link>
                }
                <div>
                    <img src={post.media} alt="post" onLoad={(event) => {
                        const image = event.target;
                        const width = image.width;
                        const height = image.height;

                        const addClass = (height > width) ? "h-screen" : "w-screen";
                        image.className = (height > width) ? "h-full" : "w-full";
                        image.parentElement.className = addClass;
                    }}/>
                </div>
                {
                    isGroup &&
                    <Link  className="absolute right-0 px-3 hover:px-2 h-full flex justify-center items-center active"  to={`?id=${id}&index=${(Number(index) + 1) % groupPosts.length}`} style={{background: "rgba(0, 0, 0, .02)",transition: "500ms",backdropFilter: "brightness(90%) invert(5%) "}}>
                        <button className="w-9 h-9 bg-blackite rounded-full flex justify-center items-center"  >
                            <FBIcons icon="arrow" size="0.7" />
                        </button>
                    </Link>
                }
            </div>
            <div className="md:absolute md:left-2/4  lg:left-3/4 lg:w-1/4 pt-3 text-grayte bg-blackish overflow-scroll preview-right" style={{height: "94vh"}}>
                <PostStructure  
                    id={id}
                    noMedia={true}
                ></PostStructure>
                <div className="px-3">
                    <div className="text-right">
                        <button className="text-xs font-bold no-hover">Most relevant</button>
                    </div>
                    <div className="pt-2">
                        <div className="flex">
                            <div className="mr-1">
                                <button className="rounded-full  overflow-hidden">
                                    <div className="w-7 h-7 flex justify-center">
                                        <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt="Rafhael Hailar"/>
                                    </div>
                                </button>
                            </div>
                            <div className="mr-0.5">
                                <div className="bg-grayish rounded-2xl px-3 py-2">
                                    <div className="text-xs text-white font-bold">Unknown Viewer</div>
                                    <div className="text-xs text-white ">My balls is rigidly figitly quickityl sober I feel trap in the midst of chaos the goes continuesly</div>
                                </div>
                                <div className="px-3 text-xs flex gap-3.5">
                                    <button className="no-hover hover:underline">20s</button>
                                    <button className="no-hover hover:underline font-bold">Like</button>
                                    <button className="no-hover hover:underline font-bold">Reply</button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="w-7 h-7 flex items-center justify-center rounded-full">
                                    <FBIcons icon="more" size="1em" color="white"></FBIcons>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="flex">
                            <div className="mr-1">
                                <button className="rounded-full  overflow-hidden">
                                    <div className="w-7 h-7 flex justify-center">
                                        <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt="Rafhael Hailar"/>
                                    </div>
                                </button>
                            </div>
                            <div className="mr-0.5">
                                <div className="bg-grayish rounded-2xl px-3 py-2">
                                    <div className="text-xs text-white font-bold">Unknown Viewer</div>
                                    <div className="text-xs text-white ">My balls is rigidly figitly quickityl sober I feel trap in the midst of chaos the goes continuesly</div>
                                </div>
                                <div className="px-3 text-xs flex gap-3.5">
                                    <button className="no-hover hover:underline">20s</button>
                                    <button className="no-hover hover:underline font-bold">Like</button>
                                    <button className="no-hover hover:underline font-bold">Reply</button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="w-7 h-7 flex items-center justify-center rounded-full">
                                    <FBIcons icon="more" size="1em" color="white"></FBIcons>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="flex">
                            <div className="mr-1">
                                <button className="rounded-full  overflow-hidden">
                                    <div className="w-7 h-7 flex justify-center">
                                        <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt="Rafhael Hailar"/>
                                    </div>
                                </button>
                            </div>
                            <div className="mr-0.5">
                                <div className="bg-grayish rounded-2xl px-3 py-2">
                                    <div className="text-xs text-white font-bold">Unknown Viewer</div>
                                    <div className="text-xs text-white ">My balls is rigidly figitly quickityl sober I feel trap in the midst of chaos the goes continuesly</div>
                                </div>
                                <div className="px-3 text-xs flex gap-3.5">
                                    <button className="no-hover hover:underline">20s</button>
                                    <button className="no-hover hover:underline font-bold">Like</button>
                                    <button className="no-hover hover:underline font-bold">Reply</button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="w-7 h-7 flex items-center justify-center rounded-full">
                                    <FBIcons icon="more" size="1em" color="white"></FBIcons>
                                </button>
                            </div>
                        </div>
                    </div>
{/*                     <div className="pt-2">
                        <div className="flex">
                            <div className="mr-1">
                                <button className="rounded-full  overflow-hidden">
                                    <div className="w-7 h-7 flex justify-center">
                                        <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt="Rafhael Hailar"/>
                                    </div>
                                </button>
                            </div>
                            <div className="mr-0.5">
                                <div className="bg-grayish rounded-2xl px-3 py-2">
                                    <div className="text-xs text-white font-bold">Unknown Viewer</div>
                                    <div className="text-xs text-white ">My balls is rigidly figitly quickityl sober I feel trap in the midst of chaos the goes continuesly</div>
                                </div>
                                <div className="px-3 text-xs flex gap-3.5">
                                    <button className="no-hover hover:underline">20s</button>
                                    <button className="no-hover hover:underline font-bold">Like</button>
                                    <button className="no-hover hover:underline font-bold">Reply</button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="w-7 h-7 flex items-center justify-center rounded-full">
                                    <FBIcons icon="more" size="1em" color="white"></FBIcons>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="flex">
                            <div className="mr-1">
                                <button className="rounded-full  overflow-hidden">
                                    <div className="w-7 h-7 flex justify-center">
                                        <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt="Rafhael Hailar"/>
                                    </div>
                                </button>
                            </div>
                            <div className="mr-0.5">
                                <div className="bg-grayish rounded-2xl px-3 py-2">
                                    <div className="text-xs text-white font-bold">Unknown Viewer</div>
                                    <div className="text-xs text-white ">My balls is rigidly figitly quickityl sober I feel trap in the midst of chaos the goes continuesly</div>
                                </div>
                                <div className="px-3 text-xs flex gap-3.5">
                                    <button className="no-hover hover:underline">20s</button>
                                    <button className="no-hover hover:underline font-bold">Like</button>
                                    <button className="no-hover hover:underline font-bold">Reply</button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="w-7 h-7 flex items-center justify-center rounded-full">
                                    <FBIcons icon="more" size="1em" color="white"></FBIcons>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
                    <div className="flex gap-1 px-3 sticky bottom-0 bg-blackish py-2">
                        <div>
                            <button className="rounded-full  overflow-hidden">
                                <div className="w-8  h-8 flex justify-center">
                                    <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt="Rafhael Hailar"/>
                                </div>
                            </button>
                        </div>
                        <div className="text-xs bg-grayish px-2 py-1.5 rounded-xl w-full">
                            <input type="text" className="bg-transparent outline-none" placeholder="Write a comment..." />
                            <div className="flex justify-between mt-2.5">
                                <div className="flex">
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full ">
                                        <FBIcons icon="avatarSticker" size="0.8"></FBIcons>
                                    </button>
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full ">
                                        <FBIcons icon="emoji" size="0.8"></FBIcons>
                                    </button>
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full ">
                                        <FBIcons icon="camera" size="0.8"></FBIcons>
                                    </button> 
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full ">
                                        <FBIcons icon="gif" size="0.8"></FBIcons>
                                    </button>
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full ">
                                        <FBIcons icon="sticker" size="0.8"></FBIcons>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <FBIcons icon="submit" size="0.8"></FBIcons>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>  
            </div>
        </div>
    );
}

export default Preview;
