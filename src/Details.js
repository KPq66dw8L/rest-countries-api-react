import { useLocation, Link, HashRouter  } from 'react-router-dom';

const Details = () => {
    const { country } = useLocation();
    
    const { 
        flag, 
        name, 
        nativeName, 
        population, 
        region, 
        subregion, 
        capital, 
        topLevelDomain, 
        currencies, 
        languages, 
        borders } = country; //arrays: currencies, languages, borders, topLevelDomain

    return <div className='details'>
        <Link to={`/`} >Back</Link>
        <img src={flag} alt={name}></img>
        
            
            <div className='mainLeft'>
            <h1>{name}</h1>
                <span>Native Name:ㅤ<p>{nativeName}</p></span>
                <span>Population:ㅤ<p>{population.toLocaleString()}</p></span>
                <span>Region:ㅤ<p>{region}</p></span>
                <span>Sub Region:ㅤ<p>{subregion}</p></span>
                <span>Capital:ㅤ<p>{capital}</p></span>
            </div>

            <div className='mainRight'>
                <span>Top Level Domain:ㅤ<p>{topLevelDomain}</p></span>
                <span>Currencies: 
                {currencies.map((currencie, index) =>{
                    return (<p key={index}>ㅤ{currencie.name}</p>);
                })}
                </span>
                
                <span>Languages: 
                {languages.map((language, index) =>{
                    return (<p key={index}>ㅤ{language.name}</p>);
                })}
                </span>
            </div>
    
        <div className='borders'>
            <span>Border Countries: 
            {borders.map((border, index) =>{
                return (<p key={index}>ㅤ{border}</p>);
            })}
            </span>
        </div>
        
    </div>;
}


export default Details;