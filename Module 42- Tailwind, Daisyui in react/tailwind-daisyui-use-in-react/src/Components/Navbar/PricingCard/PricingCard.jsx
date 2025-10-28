import React from 'react';
import {CircleCheckBig } from "lucide-react";

const PricingCard = ({pricing}) => {
    return (
        <div className='border bg-amber-200 text-black p-5 w-[400px] text-center rounded-2xl mx-auto'>
            <h1 className='text-4xl'>{pricing.planName}</h1>
            <h4 className='text-2xl'>{pricing.pricePerMonth}</h4>
            <ul className='bg-amber-500 p-3 rounded-2xl mt-3 text-left'>
            {
                pricing.features.map(feature =>{
                    return (
                        <li className='flex gap-2'><CircleCheckBig className='text-green-700 font-bold' />{feature}</li>
                    )
                })
            }
            </ul>
        </div>
    );
};

export default PricingCard;