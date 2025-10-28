import React, { use } from 'react';
import PricingCard from './PricingCard/PricingCard'
const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)

    console.log(pricingData)
    return (
        <div className=''>
            <h2 className='text-4xl text-center'>Get Our Membership</h2>
             <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingData.map (pricing => <PricingCard key={pricing.id} pricing = {pricing}></PricingCard> )
                }
             </div>
        </div>
    );
};

export default Pricing;