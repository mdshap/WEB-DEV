
import Container from './Container';
import Cards from './Cards';
import { use, useState } from 'react';
import ToggleButtons from './ToggleButtons'
import IssuesCard from './IssuesCard';

const IssuesManagement = ({fetchPromise}) => {
    
    const issues =use(fetchPromise)
    const [toggleStatus, setToggleStatus] = useState("")
    const [data, setData] = useState(issues)

    const pendingData= issues.filter(element => element.status === "Pending")
    const submittedData= issues.filter(element => element.status === "Submitted")
    const reviewedData= issues.filter(element => element.status === "Reviewed")

    return (

        <div>

            <Cards pendingData={pendingData} submittedData={submittedData} reviewedData={reviewedData}/>
            
            <ToggleButtons toggleStatus={toggleStatus} setToggleStatus={setToggleStatus} setData={setData} pendingData={pendingData} submittedData={submittedData} reviewedData={reviewedData} issues={issues}/>

            <IssuesCard data={data} setData={setData}></IssuesCard>
        </div>
    );
};

export default IssuesManagement;