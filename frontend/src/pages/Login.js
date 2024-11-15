import React, {useState} from "react"
import Input from "../components/InputComponent";
import Button from "../components/ButtonComponent";
import api from '../api/api'
import "../index.css"
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin })=>{
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });


    const [errors, setErrors] = useState({});

    // Handle form submission for login
    const handleLogin = async(e) => {
        e.preventDefault();

        if (validationForm()){
            try {
                const response = await api.post('/login', credentials);
                
                if(response.data.status){
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    onLogin()
                    navigate('/dashboard');             

                }else{                    
                    alert(response.data.message)
                }                
              
            } catch (error) {
                alert("Something went wrong");
                console.error('Error fetching data:', error);
            }    
        }  
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    //validation function
    const validationForm  = () =>{
        const newErrors = {}

        if (!credentials.email){
            newErrors.email = "Email is required";
        }else if (!/\S+@\S+\.\S+/.test(credentials.email)){
            newErrors.email = 'Email is invalid'
        }

        if (!credentials.password){
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    }
    
    return (
        <div class="login-container">
        <div class="login-form">
            <h3 class="text-center mb-4">Login</h3>
            
            <form onSubmit={handleLogin} >           
                
                <Input
                    label="Email"
                    name="email"
                    id="email"
                    value={credentials.email}
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    required
                    error={errors.email}                      
                />

                <Input
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    value={credentials.password}
                    placeholder="Enter your Password"
                    onChange={handleChange}
                    required
                    error={errors.password}                      
                />

                <Button
                    className="btn btn-primary btn-block"
                    type="submit" 
                    name="Login"
                />

                {/* <button 
                    type="submit" 
                    className="btn btn-primary btn-block">
                        Login
                </button> */}
            
                <div class="text-center mt-3">
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
        </div>
</div>
    )
}

export default Login;