import { Link } from 'react-router-dom';

const Card = (props) => {
    const {flag, name, population, subregion, capital} = props.country;

    const new_population = population.toLocaleString();

    return <Link to={`/details/${name}`} key={props.id} className='card'>

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