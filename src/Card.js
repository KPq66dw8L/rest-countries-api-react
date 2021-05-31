import { Link } from 'react-router-dom';
import { useFetch } from './useFetch'

const Card = ({country}) => {
    const {flag, name, population, subregion, capital} = country;

    const new_population = population.toLocaleString();

    const newTo = {
        pathname: `/details/${name}`,
        state: {country: country}
    };

    return <Link to={newTo} className='card'>

        <img src={flag} alt={name}></img>
        <div className='subCard'>
            <h2>{name}</h2>
            <p>Population: {new_population}</p>
            <p>Region: {subregion}</p>
            <p>Capital: {capital}</p>
        </div>

    </Link>;
}

export default Card;