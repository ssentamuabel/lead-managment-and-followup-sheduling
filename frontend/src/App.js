import React, {useState} from 'react';

import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
import Leads from './pages/Leads';
import Dashboard from './pages/Dashboard'
import './index.css'





const App =()=>{

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true); 
	};

  const handleLogout = () =>{
    setIsLoggedIn(false);
  }


  return (
	<Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/"
          element={isLoggedIn ? <SideBar onLogout={handleLogout} /> : <Navigate to="/login" />}
        >
        	<Route index element={<Navigate to="/dashboard" />} />       
        	<Route path="dashboard" element={<Dashboard />} />
        	<Route path="leads" element={<Leads />} />
        	<Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  )
}



export default App;
