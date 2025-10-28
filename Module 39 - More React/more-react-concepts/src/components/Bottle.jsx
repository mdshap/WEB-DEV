import React from 'react';
import './Bottle.css';

const Bottle = ({bottle, handleBought}) => {
    const {name, size, brand, price} = bottle
    return (
        <div className='bottle'>
            <ul>
                <li>Name: {name}</li>
                <li>Size: {size}</li>
                <li>Brand: {brand}</li>
                <li>Price: ${price}</li>
            </ul>
            <button onClick={() =>{handleBought(bottle)}}>Buy Now</button>
        </div>
    );
};

export default Bottle;