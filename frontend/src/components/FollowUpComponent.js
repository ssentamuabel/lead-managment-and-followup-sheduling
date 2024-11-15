import React, {useState} from 'react'
import Card from './FollowUpCard'
import Button from './ButtonComponent'
import FollowUpForm from './FollowUpForm'

const FollowUpComponent = ({data}) =>{
    const [followUpDialog, setFollowUpDialog] = useState(false)





    return (
        <div className="followUp-section">

            {
                followUpDialog && 
                <FollowUpForm 
                    onCancel={()=>setFollowUpDialog(false)}
                />
            }

           
            <center><h3>FollowUps</h3></center>
            {
                data  ? (
                    <>
                         <div className="lead-info d-flex justify-content-between pb-3 text-dark" >
                            <div >{data.name}</div>
                            <div>{data.email}</div>
                            <div>{data.phone}</div>
                        </div>
                
                        <div className="lead-followUps d-flex gap-3 flex-wrap">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <Button
                            name="Add FollowUp"
                            className="btn btn-primary btn-sm mt-2"
                            onClick={()=>setFollowUpDialog(true)}

                            
                        />
                    </>
                ):(
                    <div className="d-flex justify-content-center align-items-center">
                        <h4>Click on the desired Lead to see the Follows</h4>
                    </div>
                )
            }
               

        </div>
    )
}

export default FollowUpComponent;