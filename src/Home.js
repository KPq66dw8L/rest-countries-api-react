import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch'

import Card from './Card';
import Searchbar from './Searchbar';

const Home = () => {
    const [url, setUrl] = useState('https://restcountries.eu/rest/v2/all');
    const [region, setRegion] = useState('');

    useEffect(() => {
        console.log(region);
        if(region){
            setUrl('https://restcountries.eu/rest/v2/region/'+ region);
        } else {
            setUrl('https://restcountries.eu/rest/v2/all');
        }
    },[region]);

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
    } if (isLoading && !isError){ //apparently not functionnal, but does not create errors
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
            <a href='#' className='menu-item' onClick={() => props.setRegion(props.children)}>
                {props.children}
            </a>
        );
    }

    return (
        <div className='dropdown'>
            <DropdownItem setRegion={setRegion} >Africa</DropdownItem>
            <DropdownItem setRegion={setRegion} >America</DropdownItem>
            <DropdownItem setRegion={setRegion} >Asia</DropdownItem>
            <DropdownItem setRegion={setRegion} >Europe</DropdownItem>
            <DropdownItem setRegion={setRegion} >Oceania</DropdownItem>
        </div>
    );
};

export default Home;