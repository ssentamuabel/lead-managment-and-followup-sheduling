import React, {useState} from 'react'
import UserTable from '../components/UserTable'
import PermissionTable from '../components/PermissionTable'
import UserForm from '../components/UserForm'


const Users = ()=>{
    const [roleModel, setRoleModel] = useState(false)
    const [userModel, setUserModel] = useState(false)




    return (


        <div className="page-container">
            {
                userModel && (
                    <UserForm
                        onCancel={()=>setUserModel(false)}
                    
                    />
                )
            }
            
            <div>
                <div class="mb-3 row" style={{width: "45%", alignItems:"center"}}>
                    <label for="basicSelect" class="col-form-label col-auto">Select Role :</label>
                    <div class="col">
                        <select class="form-select" id="basicSelect">
                            <option selected>Open this select menu</option>
                            <option value="1">Administrator</option>
                            <option value="2">Sales Manager</option>
                            <option value="3">Sales Representative</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-sm mb-2"
                            onClick={()=>setUserModel(true)}
                        >
                        Create User
                        </button>
                    </div>
                </div>

            </div>
            <div className="user-wrapper d-flex justify-content-between" >
                <UserTable />
                <PermissionTable />
            </div>            
        </div>
    )
}

export default Users;