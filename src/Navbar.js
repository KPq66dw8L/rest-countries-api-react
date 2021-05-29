import moonIconBlack from "./assets/icon-moon-black.svg"

const Navbar = () => {
    return <div className='navbar'>
        <h1>Where in the world?</h1>
        <a href='#'>
            <img src={moonIconBlack}></img>
            <a>Dark Mode</a>
        </a>
    </div>;
}

export default Navbar;