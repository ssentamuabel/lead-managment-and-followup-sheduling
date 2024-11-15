import React from 'react'

const SelectComponent = (
    {
        label,
        options, 
        id,
        error,
        value, 
        value_name,
        ...props
    }) =>{
    return(
        <div class="mb-3">
            <label htmlFor={id} class="form-label">{label}</label>
                <select className={`form-select ${error ? 'is-invalid' : ''}`} id={id} {...props}>
                    {value ? (
                         <option value={value} selected>{value_name}</option>
                    ):(
                        <option value="" selected disabled>{value_name}</option> 
                    )}
                    {
                        options && options.map((item)=>(
                            <option key = {item.value} value={item.value}>{item.name}</option>
                        ))
                    }
                    
                </select>
                {error && <div className="invalid-feedback">{error}</div>}
                
        </div>
    )
}

export default SelectComponent