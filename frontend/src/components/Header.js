import React from 'react'

const Header = ({onLogout}) =>{
    return (
        <div className="bg-light p-3 d-flex justify-content-between align-items-center" style={{height: "10vh", color: "#000"}}>
            <div className="title">
                <h4>Lead Managment and Follow Up Sheduling</h4>
            </div>
            <div className="user-section d-flex">
                <div className="pl-2 useremail">
                    <h6> ssentamuabel90@gmail.com</h6>
                </div>
               
                <div className="pl-2 logout" onClick={onLogout}>
                    <h6 style={{color:"red", cursor: 'pointer'}}>Log out</h6>
                </div>
                
            </div>
        </div>
    )
}

export default Header;