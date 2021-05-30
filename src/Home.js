import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch'

import Card from './Card';
import Searchbar from './Searchbar';



const Home = () => {
    const [url, setUrl] = useState('https://restcountries.eu/rest/v2/all');
    const [region, setRegion] = useState('');

    const { isLoading, countries, isError } = useFetch(url); //custom hook

    if(!isLoading && !isError){
        return <div className='home'>
        <Searchbar setUrl={setUrl}>
            <DropdownMenu setRegion={setRegion}></DropdownMenu>
        </Searchbar>
        <div className='cards'>
          {countries.map((country, index)=>{
              return <Card key={index} id={index} country={country}></Card> 
          })} 
        </div>
    </div>;
    } if (isLoading && !isError){
        return <div className='home'>
        <Searchbar setUrl={setUrl}>
            <DropdownMenu setRegion={setRegion}></DropdownMenu>
        </Searchbar>
        <div>
          <h1>Loading...</h1>
        </div>
    </div>;
    } if (!isLoading && isError){
        return <div className='home'>
        <Searchbar setUrl={setUrl}>
            <DropdownMenu setRegion={setRegion}></DropdownMenu>
        </Searchbar>
        <div>
          <h1>No results found. Try again...</h1>
        </div>
    </div>;
    }
};

const DropdownMenu = ({setRegion}) => {

    const DropdownItem = (props) => {
        return (
            <a href='#' className='menu-item'>
                {props.children}
            </a>
        );
    }

    return (
        <div className='dropdown'>
            <DropdownItem onClick={() => setRegion('africa')} >Africa</DropdownItem>
            <DropdownItem onClick={() => setRegion('america')}>America</DropdownItem>
            <DropdownItem onClick={() => setRegion('asia')} >Asia</DropdownItem>
            <DropdownItem onClick={() => setRegion('europe')} >Europe</DropdownItem>
            <DropdownItem onClick={() => setRegion('oceania')} >Oceania</DropdownItem>
        </div>
    );
};

export default Home;
