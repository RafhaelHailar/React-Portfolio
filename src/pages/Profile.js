import FBIcons from "../components/FBIcons";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import RafhaelHailarImage from "../images/rafhael_hailar.jpg";

const Profile = ({ setChatDisplay }) => {
  const location = useLocation();
  const currentLocation = location.pathname.replace("/rafhael/", "");
  return (
    <>
      <div className="bg-blackish flex justify-center">
        <div className="w-full lg:w-4/6">
          <button>
            <div className=" rounded overflow-hidden sm:h-[23rem]">
              <img
                src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
                width="100%"
                alt="cover"
              />
            </div>
          </button>
          <div className="px-7">
            <div className="lg:h-20 flex lg:mt-0 -mt-16 lg:justify-between lg:flex-row flex-col justify-start items-center lg:items-end">
              <div className="flex lg:flex-row flex-col justify-between items-center lg:items-end gap-4">
                <button
                  onClick={setChatDisplay.show}
                  className="rounded-full overflow-hidden"
                >
                  <div
                    className="rounded-full bg-black"
                    style={{ padding: "0.2rem" }}
                  >
                    <div
                      className="bg-lime-600 rounded-full overflow-hidden flex align-center justify-center"
                      style={{ width: "8.5rem", height: "8.5rem" }}
                    >
                      <img
                        src={RafhaelHailarImage}
                        width="100%"
                        alt="Rafhael Hailar"
                      />
                    </div>
                  </div>
                </button>
                <div className="h-16 text-white ">
                  <div className="font-black text-2xl">Rafhael Hailar</div>
                  <div className="text-lg text-center lg:text-left text-gray-400">
                    Developer
                  </div>
                </div>
              </div>
              <div className="h-11">
                <div className="text-white text-xs font-semibold flex gap-1.5">
                  <a
                    href="https://www.facebook.com/rafhael.hailar.9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-blueish px-2.5 py-1.5 rounded flex items-center gap-1">
                      <FBIcons
                        icon="addFriend"
                        size="1em"
                        color="white"
                      ></FBIcons>
                      Add friend
                    </button>
                  </a>
                  <button
                    onClick={() => setChatDisplay.show()}
                    className="bg-grayish px-2.5 py-1.5 rounded flex items-center gap-1"
                  >
                    <FBIcons
                      icon="messenger"
                      size="1em"
                      color="white"
                    ></FBIcons>
                    Message
                  </button>
                  <a
                    href="https://raw.githubusercontent.com/RafhaelHailar/portfolio-assets/487aa99aa3d514218d2e53507fc1ec87a52db455/Resume-V1.pdf"
                    download={"Rafhael_Hailar_CV.pdf"}
                    className="flex items-center px-2.5 gap-1.5"
                    style={{ border: "1px solid rgba(255,255,255, .3)" }}
                  >
                    <FBIcons icon="cv" size="1rem" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-7 mt-3">
            <div className="text-white profile-routes text-xs font-semibold flex py-1 justify-between">
              <div className="flex">
                {
                  //Routes
                  ["posts", "projects", "about", "contacts"].map(
                    (paths, index) => {
                      const pathName = paths[0].toUpperCase() + paths.slice(1);
                      let pathLink = "./" + paths;
                      pathLink =
                        paths === "contacts"
                          ? "./about/contact_and_basic_info"
                          : pathLink;
                      return (
                        <Link
                          key={index}
                          className={
                            currentLocation.slice("/").includes(paths)
                              ? "active"
                              : ""
                          }
                          to={pathLink}
                        >
                          {pathName}
                        </Link>
                      );
                    }
                  )
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
      </div>
      <div className="flex justify-center items-center pt-3">
        <div className="w-full lg:w-4/6 px-7">
          <Outlet />
        </div>
      </div>
      <Navigate
        to={currentLocation === "" ? "./posts" : `./${currentLocation}`}
      ></Navigate>
    </>
  );
};

export default Profile;
