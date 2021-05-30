import React, { useState } from 'react';

const Searchbar = (props) => {
    let urlPartial = 'all';

    props.setUrl('https://restcountries.eu/rest/v2/' + urlPartial);

    const [open, setOpen] = useState(false);

    const [search, setSearch] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            console.log(search);
            props.setUrl('https://restcountries.eu/rest/v2/name/' + search);
        }
        
    }

    return <div className='searchbar'>
        <div className='flexSearch'>
            <form onSubmit={handleSubmit}>
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