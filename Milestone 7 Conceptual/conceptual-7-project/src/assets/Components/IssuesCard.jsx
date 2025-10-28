import React from 'react';
import Container from './Container';

const IssuesCard = ({data, setData}) => {

    const handleClick = (issue) =>{
        const currentData= data.find(element => element.ticketId == issue.ticketId)

        if(currentData.status == "Pending"){
            currentData.status = "Submitted"
        }
        else if(currentData.status == "Submitted"){
            currentData.status = "Reviewed"
        }
        else
            return

        const remainingData = data.filter(element => element.ticketId != issue.ticketId)

        setData([currentData, ...remainingData])
        
    }

    return (
        <div>
            <Container>
                <div className='grid grid-cols-3 gap-8 mb-10'>
                    {
                        data.map( (issue) => {
                    
                            return(
                                <div 
                                onClick={()=>handleClick(issue)}
                                className="shadow-lg bg-gray-100 w-full rounded-2xl p-7">
                                    <div>
                                <img src={issue.userImg} alt={issue.requestedBy} className='w-[100px] rounded-full'/>

                                        <h3 className='font-semibold text-2xl'>{issue.requestedBy}</h3>
                                
                                        <div className='flex justify-between mt-4'>
                                        <p className='font-bold text-xl'>{issue.subject}</p>

                                        <div className=''>
                                        <span className={`${issue.priority == "High" ? "high" : issue.priority == "Medium" ? "medium" : issue.priority == "Low" && "low"} mr-2`}>{issue.priority}</span>

                                        <span className={`${issue.status == "Submitted" ? "medium" : issue.status == "Pending" ? "high" : issue.status == "Reviewed" && "low"} mr-2`} >{issue.status}</span>
                                        </div>

                                        </div>
                                        <p className='text-xl text-slate-700 mt-3'>{issue.description}</p>
                                    </div>
                            

                                </div>
                            )
                        })
                    }
                </div>
        </Container>
        </div>
    );
};

export default IssuesCard;