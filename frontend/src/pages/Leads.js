import React, {useState} from 'react'
import '../index.css'
import LeadTable from '../components/LeadsTable'
import FollowUps from '../components/FollowUpComponent'
import LeadForm from '../components/LeadForm'
import Button from '../components/ButtonComponent'
import api from '../api/api';

const Lead = () =>{
    const [LeadFormDialog, setLeadFormDialog] = useState(false);
    const [loadLeads, setLoadLeads] = useState(false);
    const [followUpData, setFollowUpData] = useState([]);


    const handleLead = (data) =>{
        const submitLead = async()=>{
            try{
                const response = await api.post('/leads', data);
    
                if ((response).data.status){
                    setLoadLeads(!loadLeads);
                    alert("Added Successfully");
                }else{
                    alert(response.data.message);
                }
            }catch(error){
                console.error('Error fetching data:', error);
                alert("Something went wrong");
                
            }
        }

        submitLead();

    }

    const followUps = (id) =>{
        console.log(id)        

        const getData = async()=>{
            try{
                

                const response = await api.get(`/leads/${id}/followups`);

                if (response.data.status){
                    setFollowUpData(response.data.lead);
                    console.log(response.data.lead);
                }else{
                    console.log(response.data.message);
                }

            }catch(error){
                console.error("Error fectching data", error)
            }
        }

        getData()
    }


   


    return (
        <div className="page-container">
            {
                LeadFormDialog && 
                <LeadForm 
                    onCancel={()=>setLeadFormDialog(false)}
                    onConfirm={handleLead}
                />
            }
            <div className="leads-wrapper  d-flex justify-content-between w-100">
                <div className="container w-100">
                    <h3>Leads</h3>
                    <LeadTable 
                        load ={loadLeads}
                        followUps={followUps}
                     />
                    <Button
                        name="Add Lead"
                        className="btn btn-primary btn-sm mt-2"
                        onClick={()=>setLeadFormDialog(true)}                    
                    />

                </div>
                <div className="container w-100">
                    <FollowUps  data={followUpData}  />
                </div>
            </div>
        </div>
    )
}

export default Lead