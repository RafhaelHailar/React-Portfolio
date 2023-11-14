import NavigationBar from "./components/NavigationBar";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./pages/Profile";
import { Posts, About, Projects } from "./components/Profile";
import Preview from "./pages/Preview";


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
                }></Route>
                <Route path="contacts" element={<h1>HELLO WORLD!</h1>}></Route>
              </Route>
          </Routes>
    </div>
  );
}

export default App;
