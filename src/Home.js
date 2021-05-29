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
        
    };
    useEffect(() => {
        getCountries();
    }, []);

    return <div className='home'>
        <Searchbar>
            <DropdownMenu></DropdownMenu>
        </Searchbar>
        <div className='cards'>
          {countries.map((country, index)=>{
              return <Card key={index} id={index} country={country}></Card> 
          })} 
        </div>
    </div>;
}

const DropdownMenu = () => {

    const DropdownItem = (props) => {
        return (
            <a href='#' className='menu-item'>
                {props.children}
            </a>
        );
    }

    return (
        <div className='dropdown'>
            <DropdownItem>Europe</DropdownItem>
        </div>
    );
}

export default Home;