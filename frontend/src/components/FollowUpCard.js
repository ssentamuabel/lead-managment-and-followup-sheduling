import React from 'react'

const FollowUpCard = ()=>{
    return(
        <div className="followUp-card">
            <div className="card-container">
                <div className="appointment">
                    <h6>2024-Aug-21: 17:00</h6>
                    <p>Date & Time</p>
                </div>
                <div className="status">
                    <select name="status" id="status">                  
                        <option value="0">Pending</option>
                        <option value="1">Completed</option>
                        <option value="2">Missed</option>
                    </select>
                    
                    <p>Status</p>
                </div>
                <div className="responsible">
                    <h6>Kitenda Samuel</h6>
                    <p>Person Responsible</p>
                </div>
            </div>
        </div>
    )
}

export default FollowUpCard;