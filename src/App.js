import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelPage from "./WelPage/WelPage";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import Anunturi from "./Anunturi/Anunturi";
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<WelPage/>}/>
      <Route path="LogIn" element={<LogIn/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="Anunturi" element={<Anunturi/>}/>
    </Routes>
    </div>

  );
}

export default App;
