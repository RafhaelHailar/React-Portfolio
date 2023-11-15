import NavigationBar from "./components/NavigationBar";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./pages/Profile";
import { Posts, About, Projects } from "./components/Profile";
import Preview from "./pages/Preview";
import { Contacts, Details, Overview, PLived, WnE } from "./components/Profile/AboutComp";


function App() {
  return (
    <div className="App">
          <NavigationBar></NavigationBar>
          <Routes>
              <Route path="/" element={<Navigate to="/rafhael/"></Navigate>}></Route>
              <Route path="/preview" element={<Preview></Preview>}></Route>
              <Route path="/rafhael" element={<Profile></Profile>}>
                <Route path="posts" element={<Posts></Posts>}></Route>
                <Route path="projects" element={<Projects/>}></Route>
                <Route path="about" element={
                  <>
                    <About/>
                    <Projects/>
                  </>
                }>
                    <Route path="" element={<Overview/>} />
                    <Route path="overview" element={<Overview/>}></Route>
                    <Route path="work_and_education" element={<WnE/>}></Route>
                    <Route path="places_lived" element={<PLived/>}></Route>
                    <Route path="contact_and_basic_info" element={<Contacts/>}></Route>
                    <Route path="details_About_Rafhael_Hailar" element={<Details/>}></Route>
                </Route>
                <Route path="contacts" element={<h1>HELLO WORLD!</h1>}></Route>
              </Route>
          </Routes>
    </div>
  );
}

export default App;
