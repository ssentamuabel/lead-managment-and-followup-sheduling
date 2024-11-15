import React from 'react'

const InputComponent = ({label, name,  id,type="text",error,  ...props}) =>{
    return (
        <div className="mb-3">            
            <label htmlFor={id} className="form-label">{label}</label>
            <input 
                type={type}
                className={`form-control ${error ? 'is-invalid' : ''}`}                
                name={name}
                {...props}
               />
               {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default InputComponent