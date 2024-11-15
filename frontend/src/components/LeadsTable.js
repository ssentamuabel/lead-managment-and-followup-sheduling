import React, {useEffect, useState} from 'react'
import Button from './ButtonComponent'
import api from '../api/api';

const LeadsTable = ({load, followUps}) =>{
    const [leadsData, setLeadsData] = useState([]);

    useEffect(()=>{

        const getLeads = async()=>{
            try{

                const response = await api.get('/leads/get');

                if (response.data.status){
                    setLeadsData(response.data.leads);
                    console.log(response.data.leads);
                }else{
                    console.log(response.data.message);
                }

            }catch(error){
                console.error("Error fectching data", error)
            }
        }

        getLeads();

    }, [load]);

    return(
        <div className="leads-section w-100">
            <div className="table-wrapper w-100">
            <table class="table">
                    <thead class="table-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">FollowUps</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leadsData && leadsData.length > 0 ? (
                                leadsData.map((member, index)=>(
                                    <tr key={member.id}>
                                        <th scope="row">{index+1}</th>
                                        <td>{member.name}</td>
                                        <td>{member.email}</td>
                                        <td>{member.phone}</td> 
                                        <td>
                                            <Button
                                                className="btn btn-primary btn-sm"
                                                name="Followups"
                                                onClick={()=>{followUps(member.id)}}
                                            />
                                        </td>                     
                                    </tr>
                                ))
                            ):(
                                <tr>
                                    <td colSpan={4}> No data available</td>
                                </tr>
                            )
                        }
                        
                        
                    </tbody>
                </table>
            </div>        
        </div>
    )
}

export default LeadsTable