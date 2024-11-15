import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom'; 
import api from '../api/api';
import Header from './Header'
import Footer from './Footer'



const SideBar = ({onLogout}) =>{

	const handleLogout  = async() =>{
        
        try {

			const response = await  api.post('/users/logout');

			if (response.data.status){
				onLogout()
			}else{
				alert("Something went wrong");
			}
            
        } catch (error) {
			alert("Connection Problem");
			console.error('Error fetching data:', error);
            
        }
    }

    return (
        <div className="d-flex bg-light vh-100 vw-100 lh-1">
			<div className="d-flex flex-column bg-dark text-white p-3 sidebar">
				<div id="logo" className="d-flex justify-content-center mb-5">
					{/* Logo or brand name */}
					<h4>Nexus</h4>
				</div>
				<div>
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/leads">Leads</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/users">Users</Link>
						</li>
						
					</ul>
				</div>
			</div>
			<div id="body" className="w-100">
				<Header onLogout={handleLogout}/>
				{/* Main Content area */}
				<Outlet /> 
				<Footer />
			</div>
    </div>
    )
}

export default SideBar;