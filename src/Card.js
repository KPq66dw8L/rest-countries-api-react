const Card = (props) => {
    const {flag, name, population, subregion, capital} = props.country;
    return <div key={props.id} className='card'>
        <img src={flag} alt={name}></img>
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {subregion}</p>
        <p>Capital: {capital}</p>
    </div>;
}

export default Card;