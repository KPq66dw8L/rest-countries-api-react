import React, { useState } from 'react';

const Searchbar = (props) => {

    const [open, setOpen] = useState(false);

    return <div className='searchbar'>
        <input type='text'></input>
        <a href='#' onClick={() => setOpen(!open)}>Filter by Region</a>

        {open && props.children}
    </div>;
}

export default Searchbar;