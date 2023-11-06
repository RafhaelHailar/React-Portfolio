import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Profile from "./pages/Profile";
import Posts from "./components/Profile/Posts";


function App() {
  return (
    <div className="App" style={{height: '200vh'}}>
        <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
              <Route path="/" element={<Navigate to="/rafhael/"></Navigate>}></Route>
              <Route path="/rafhael" element={<Profile></Profile>}>
                <Route path="posts" element={<Posts></Posts>}></Route>
                <Route path="projects" element={<h1>HELLO WORLD!</h1>}></Route>
                <Route path="about" element={<h1>HELLO WORLD!</h1>}></Route>
                <Route path="contacts" element={<h1>HELLO WORLD!</h1>}></Route>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
