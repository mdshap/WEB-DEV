
import { use, useState } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountry] = useState([])
    
    const handleVisited= (country)=> {

        const temp =[...visitedCountries, country]
        setVisitedCountry(temp)

    }

    const countriesContent = use(countriesPromise)
    const countries = countriesContent.countries

    return (
        <div>
        <h3>In the country:{countries.length}</h3>
        <h3>Total Visted: {visitedCountries.length}</h3>
        <div className='countries'>

            {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisited={handleVisited}></Country>)
            }
            
            <p></p>
        </div>
        </div>
    );
};

export default Countries;