
import './App.css';
import React from 'react';
import Topbar from './components/topbar/Topbar.jsx';
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { Context } from './context/Context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const {user} = useContext(Context);
  return(
    <div>
      {/* <Home/> */}
      {/* <Single /> */}
      {/* <Write/> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      <Router>
        <Topbar />
        <Routes>
          <Route exact path ="/" element={<Home />}/>
            
          <Route path ="/register" element={user? <Home /> : <Register/>}/>
            
          <Route path ="/login" element={user? <Home /> : <Login/>}/>
            
          <Route path ="/write" element={user? <Write /> : <Register/>}/>
            
          <Route path ="/settings" element={user? <Settings /> : <Register/>}/>

          <Route path ="/post/:postid" element={<Single />}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
