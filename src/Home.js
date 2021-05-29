import React, { useState, useEffect } from 'react';

import Card from './Card';
import Searchbar from './Searchbar';

const url = 'https://restcountries.eu/rest/v2/all';

const Home = () => {
    const [countries, setCountries] = useState([]);

    

    const getCountries = async() => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
        console.log(countries)
    };
    useEffect(() => {
        getCountries();
    }, []);

    return <div className='home'>
        <Searchbar>
            <DropdownMenu ></DropdownMenu>
        </Searchbar>
        <div className='cards'>
          {countries.map((country, index)=>{
              return <Card key={index} id={index} country={country}></Card> 
          })} 
        </div>
    </div>;
};

const DropdownMenu = () => {

    const [region, setRegion] = useState('');

    const DropdownItem = (props) => {
        return (
            <a href='#' className='menu-item'>
                {props.children}
            </a>
        );
    }

    return (
        <div className='dropdown'>
            <DropdownItem onClick={() => setRegion('africa') } >Africa</DropdownItem>
            <DropdownItem onClick={() => setRegion('america')}>America</DropdownItem>
            <DropdownItem onClick={() => setRegion('asia')} >Asia</DropdownItem>
            <DropdownItem onClick={() => setRegion('europe')} >Europe</DropdownItem>
            <DropdownItem onClick={() => setRegion('oceania')} >Oceania</DropdownItem>
        </div>
    );
};

export default Home;