import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisited}) => {
const flag= country.flags.flags.png

const [visited, setVisited] = useState(false);
    const handleClick= ()=> {
    if(visited){
        setVisited(false)
    }
    else
       setVisited(true)
    handleVisited(country)
}

    return (
        <div className='country'>
            <div className='country-top'>
                <div className='name-flag'>
                    <img src={flag} alt={country.flags.flags.alt} />
                    <h3>{country.name.common}</h3>
                </div>
                <button onClick={handleClick} className={`${visited && 'country-visited'}`}>{visited ? 'Visited' : 'Not Visited'}</button>
            </div>
            <ul>
                <li>Country Type: {country.area.area > 3000 ? "Big": "Small"}    </li>
                <li>Area    : {country.area.area}</li>
                <li>Population: {country.population.population}</li>
                <li>Capital : {country.capital.capital}</li>
                <li>Region  : {country.region.region}</li>
            
            </ul>
        
        </div>
    );
};

export default Country;