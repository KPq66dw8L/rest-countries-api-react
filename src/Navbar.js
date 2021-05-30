import moonIconBlack from "./assets/icon-moon-black.svg"

const Navbar = () => {
    return <div className='navbar'>
        <h1>Where in the world ?</h1>
        <div className='navRight'>
            <img src={moonIconBlack}></img>
            <a href='#'>Dark Mode</a>
        </div>
    </div>;
}

export default Navbar;