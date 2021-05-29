import React, { useState } from 'react';

import arrowDown from './assets/down-arrow-black.svg'

const Searchbar = (props) => {

    const [open, setOpen] = useState(false);

    const [search, setSearch] = useState('');
    const handleSubmit = (e) => {
        if(search){
            console.log(search);
        }
    }

    return <div className='searchbar'>
        <div className='flexSearch'>
            <form onSubmit={handleSubmit}>
            {/* <img src={searchBlack}></img> */}
            <input 
            type='text'
            placeholder='Search for a country...'
            autoComplete='off'
            id='search'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ></input>
            </form>
            <a href='#' onClick={() => setOpen(!open)}>Filter by Region  </a>
        </div>
            {open && props.children}
        
    </div>;
}

export default Searchbar;