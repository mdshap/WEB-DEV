import React, { use, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
import { addBoughtItemToLocalStorage } from '../../utilities/localstorage';
const Bottles = ({bottlePromise}) => {
    const [bought, setBought] = useState([])

    const handleBought = (bottle) =>{
        const temp =[...bought,bottle ]
        setBought(temp)
        addBoughtItemToLocalStorage(bottle.id)

    }

    const bottles = use(bottlePromise)
    return (
        <div>
            <h3>Total Bottle: {bottles.length}</h3>
            <p>Bought Bottles:{bought.length}</p>
            <p>List Bought: {bought.map(bottle =>bottle.id)} </p>
            <div className='bottles'>
                {
                    bottles.map(bottle =><Bottle key={bottle.id} bottle={bottle} handleBought={handleBought}></Bottle> )
                }
            </div>
        </div>
    );
};

export default Bottles;