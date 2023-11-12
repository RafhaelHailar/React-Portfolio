import FBIcons from "./FBIcons";
import PostStructure from "./PostStructure";

const PostItem = ({id}) => {
    return (
        <div className="bg-blackish rounded py-1.5">
            <PostStructure id={id}></PostStructure>
            <div className="px-3 text-xs text-grayte">
                <div className="flex items-center pt-2 gap-1">
                    <div>
                        <button className="rounded-full overflow-hidden">
                            <div className="w-8 h-8">
                                <img src="https://makeupeffects.weebly.com/uploads/1/2/4/3/12434022/6232331.jpg" width="100%" alt="unknown viewer" />
                            </div>
                        </button>
                    </div>
                    <div className="flex-1">
                        <div className="bg-grayish flex rounded-full w-full">
                            <input className="flex-1 bg-transparent outline-none py-2 px-2.5" type="text" placeholder="Write a comment..."/>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;