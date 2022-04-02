import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


import logo from './multimedia/logodc.png'

const NavBar = () => {
    return (
        <nav>
           
<img src={logo} alt='logo' className="logo" />
<div className="Categories">
<NavLink  to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
<NavLink to='/category/Tote bag' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Totebags</NavLink>
<NavLink to='/category/Scrunchies' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Scrunchies</NavLink>
<NavLink to='/category/Tejido' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Knitting</NavLink>

</div>
<div className='icon' ><CartWidget/></div>    
     </nav>
    
    );
}

export default NavBar

