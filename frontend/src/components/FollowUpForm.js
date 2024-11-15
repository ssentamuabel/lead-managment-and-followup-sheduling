import React, {useState} from 'react'
import Input from './InputComponent'
import Select from './SelectComponent'
import Button from './ButtonComponent'

const FollowUpForm = ({onCancel, onConfirm}) =>{
    const [formData, setFormData] = useState({
        lead:'',
        user: '',
        time: '',
        status: ''
       
    })

    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const user_options = [
        {value:"0", name : "Kitenda Samuel"},
        {value:"1", name : "Ssentamu Abel"},
        {value:"2", name : "Jonathan Musigunzi"},
    ]

    const lead_options = [
        {value:"0", name : "Kitenda Samuel"},
        {value:"1", name : "Ssentamu Abel"},
        {value:"2", name : "Jonathan Musigunzi"},
    ]

    const status_options = [
        {value:"0", name : "Pending"},
        {value:"1", name : "Completed"},
        {value:"2", name : "Missed"},
    ]


        // Validation function
  const validateForm = () => {
    const newErrors = {}; // Object to hold validation errors

    if (!formData.lead) {
      newErrors.lead = 'select a Lead';
    }

    
    if (!formData.user) {
      newErrors.user = 'Select a responsible person';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
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
                    <h6>FollowUp Form</h6>
                    <form  style={{maxHeight: "55vh", overflowY: "scroll"}}>

                        <Select
                            label="Lead"
                            options={lead_options}
                            id="lead" 
							name="lead"
                            value={formData.lead}     
                            value_name="Select a Lead"
                            onChange={handleChange}
                            error={errors.lead}          
                        />

                        <Input
                            label="Sheduled Time"
                            name="time"
                            type="datetime-local"
                            id="time"
                            value={formData.time}
                            onChange={handleChange}
                            placeholder="Enter the Time"
                            required
                            error={errors.time}                    
                        />
                        <Select
                            label="Responsible person"
                            options={user_options}
                            id="user" 
							name="user"
                            value={formData.user}     
                            value_name="Select a person responsible"
                            onChange={handleChange}
                            error={errors.user}          
                        />
                       
                       
                        <Select
                            label="Status"
                            options={status_options}
                            id="status" 
							name="status"
                            value={formData.status}     
                            value_name="Select the Status"
                            onChange={handleChange}
                            error={errors.status}          
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

export default FollowUpForm;