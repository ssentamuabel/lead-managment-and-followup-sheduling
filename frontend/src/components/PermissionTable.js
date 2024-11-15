import React from 'react'

const PermissionComponent = () =>{
    return(
        <div className="permission-section">
            <div className="table-wrapper w-100 ">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">View</th>
                            <th scope="col">Create</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Users</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                    
                        </tr>
                        <tr>
                            <td>Leads</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>                     
                        </tr>
                        <tr>
                            <td>FollowUps</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>  
                            
                        </tr>
                        <tr>
                            <td>Permissions</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>  
                            
                        </tr>
                    </tbody>
                </table>
            </div>        
        </div>
    )
}

export default PermissionComponent