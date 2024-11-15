import React from 'react'

const ButtonComponent = ({name,...props}) =>{
    return (
        <button {...props} >
                {name}
        </button>
    )
}

export default ButtonComponent