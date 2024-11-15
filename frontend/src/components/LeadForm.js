import React, {useState} from 'react'
import Input from './InputComponent'
import Button from './ButtonComponent'

const LeadForm = ({onCancel, onConfirm}) =>{
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        phone: ''
       
    })

    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

   


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
    
    if (!formData.phone) {
      newErrors.phone = 'Contact is required';
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
      onConfirm(formData);
      onCancel()
    }
  };

    return (
        <div className="dialogue-container">
            <div className="dialog-box">
                <div class="container mt-4">
                    <h6>FollowUp Form</h6>
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
                       
                        <Input
                            label="Contact"
                            name="phone"
                            type="text"
                            id="phone"
                            value={formData.phone}   
                            placeholder="Enter Contact"
                            onChange={handleChange}
                            error={errors.phone}                      
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

export default LeadForm;