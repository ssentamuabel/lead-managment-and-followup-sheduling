import React, {useState} from 'react'
import Input from './InputComponent'
import Select from './SelectComponent'
import Button from './ButtonComponent'

const UserForm = ({onCancel, onConfirm}) =>{
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        role: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const role_options = [
        {value:"0", name : "Administrator"},
        {value:"1", name : "Sales Manager"},
        {value:"2", name : "Sales Representative"},
       ]

     // Validation function
  const validateForm = () => {
    const newErrors = {}; // Object to hold validation errors

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.role) {
      newErrors.role = 'Role is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.password2) {
      newErrors.password2 = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    if (validateForm()) {
      // If validation passes, call onConfirm or proceed with form submission
      console.log(formData)
    //   onConfirm(formData);
      onCancel()
    }
  };
    return (
        <div className="dialogue-container">
            <div className="dialog-box">
                
                <div class="container mt-4">
                     <h6>Role Form</h6>
                    <form  style={{maxHeight: "55vh", overflowY: "scroll"}}>

                        <Input
                            label="Name"
                            name="name"
                            id="name"
                            value={formData.name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                            required
                            error={errors.name}                      
                        />

                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            error={errors.email}                    
                        />
                        <Select
                            label="Role"
                            options={role_options}
                            id="role" 
							name="role"
                            value={formData.role}     
                            value_name="Select a role"
                            onChange={handleChange}
                            error={errors.role}          
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            id="password"
                            value={formData.password}   
                            placeholder="Enter password"
                            onChange={handleChange}
                            error={errors.password}                      
                        />
                        <Input
                            label="Confirm Password"
                            name="password2"
                            type="password"
                            id="password2"
                            value={formData.password2} 
                            onChange={handleChange}
                            placeholder="Confirm password"
                            error={errors.password2}                      
                        />
                        
                        
                    </form>
                    <div>
                        <Button  
                            className="btn btn-primary btn-sm mr-4" 
                            name="Cancel"
                            onClick={onCancel}
                        />

                        <Button 
                            className="btn btn-success btn-sm" 
                            name="Submit" 
							onClick={handleSubmit}
                        />
                        
                    </div>
</div>

            </div>
        </div>
    )
}

export default UserForm;