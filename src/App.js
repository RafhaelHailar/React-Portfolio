import NavigationBar from "./components/NavigationBar";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./pages/Profile";
import { Posts, About, Projects } from "./components/Profile";
import Preview from "./pages/Preview";
import { Contacts, Details, Overview, PLived, WnE } from "./components/Profile/AboutComp";
import { useEffect, useRef, useState } from "react";
import Chat from "./components/Chat";

function App() {
  const ChatDisplayState = {
     hidden: "hidden",
     shown: "shown",
     minimized: "minimize"
  }

  const [chatDisplay,setChatDisplay] = useState(ChatDisplayState.hidden);

  return (
    <div className="App flex flex-col items-center ">
          <Chat setChatDisplay={setChatDisplay}  chatDisplay={chatDisplay} chatStates={ChatDisplayState}/>
          <NavigationBar setChatDisplay={setChatDisplay} chatStates={ChatDisplayState} />
          <Routes>
              <Route path="/" element={<Navigate to="/rafhael/"/>} />
              <Route path="/preview" element={<Preview/>} />
              <Route path="/rafhael" element={<Profile setChatDisplay={setChatDisplay} chatStates={ChatDisplayState}/>}>
                <Route path="posts" element={<Posts/>} />
                <Route path="projects" element={<Projects/>} />
                <Route path="about" element={
                  <>
                    <About/>
                    <Projects/>
                  </>
                }>
                    <Route path="" element={<Overview/>} />
                    <Route path="overview" element={<Overview/>} />
                    <Route path="work_and_education" element={<WnE/>} />
                    <Route path="places_lived" element={<PLived/>} />
                    <Route path="contact_and_basic_info" element={<Contacts/>} />
                    <Route path="details_About_Rafhael_Hailar" element={<Details/>} />
                </Route>
              </Route>
          </Routes>
    </div>
  );
}

export default App;
