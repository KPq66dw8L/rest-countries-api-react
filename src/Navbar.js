import moonIconBlack from "./assets/icon-moon-black.svg"
import DarkMode from './DarkMode';

const Navbar = () => {
    return <div className='navbar'>
        
        <h1>Where in the world ?</h1>
        <div className='navRight'>
        <DarkMode />
        </div>
    </div>;
}

export default Navbar;