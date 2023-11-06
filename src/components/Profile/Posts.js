import FBIcons from "../FBIcons";

const Posts = () => {
    return (
        <div className="p-x70">
            <div className="px-7 pt-3 flex gap-3">
                <div className="w-2/5">
                    <div className="bg-blackish rounded-lg py-1.5 px-3 text-white">
                        <h1 className="text-white font-bold">Intro</h1>
                        <div className="text-sm text-gray-200 text-center py-2.5" style={{borderBottom: "1px solid gray"}}>
                            A passionate web, game, and software dev.
                        </div>
                        <ul className="text-xs text-gray-300 bio-intro font-bold">
                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png"/>
                                <span>
                                    Studied at <span className="text-white">Mamatid Senior High School</span>
                                </span>
                            </li>
                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png"/>
                                <span>
                                    Studied at <span className="text-white">Kodego BootCamp</span>
                                </span>
                            </li>
                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png"/>
                                <span>
                                    Lives in <span className="text-white">Cabuyao, Laguna</span>
                                </span>
                            </li>
                            <li>
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png"/>
                                <span>
                                    From <span className="text-white">Cabuyao, Laguna</span>
                                </span>
                            </li>
                        </ul>
                        <div className="text-xs font-bold flex gap-2 flex-wrap">
                            {
                                ['html','css','js','bootstrap','tailwind','nodejs','react','php','mysql','mongodb','figma'].map(tool => {
                                    return (
                                        <button className="flex items-center py-1.5 px-3.5 gap-1 rounded-full" style={{border: "1px solid rgba(255,255,255,.1)"}}>
                                            <FBIcons icon={tool} size="1rem"></FBIcons>
                                            {tool.toUpperCase()}
                                        </button>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="w-3/5">
                    <div className="bg-blackish rounded"> 
                        <h1 className="text-white">HELLO BORGIZ!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;