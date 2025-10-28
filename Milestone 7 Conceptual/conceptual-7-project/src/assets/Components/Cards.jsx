import React from 'react';
import Container from './Container';
const Cards = ({pendingData, submittedData, reviewedData}) => {

  

    return (
        <Container>
          <div className='flex gap-8 my-[50px]'>
              <div className="card rounded-xl p-7 text-white h-[250px] bg-pink-500 w-full flex flex-col justify-center items-center">

                <h3 className='text-[35px] font-bold'>Pending</h3>

                <p className='text-[35px] font-semibold'>{pendingData.length}</p>

              </div>

              <div className="card rounded-xl p-7 text-white h-[250px] bg-purple-600 w-full flex flex-col justify-center items-center">

                <h3 className='text-[35px] font-bold'>Submitted</h3>

                <p className='text-[35px] font-semibold'>{submittedData.length}</p>
              </div>

              <div className="card rounded-xl p-7 text-white h-[250px] bg-green-600 w-full flex flex-col justify-center items-center">

                <h3 className='text-[35px] font-bold'>Reviewed</h3>

                <p className='text-[35px] font-semibold'>{reviewedData.length}</p>

              </div>
        </div>
        </Container>
    );
};

export default Cards;