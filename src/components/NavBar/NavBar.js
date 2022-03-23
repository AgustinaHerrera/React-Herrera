import CartWidget from '../CartWidget/CartWidget'
import './styles.css'


import logo from './multimedia/logodc.png'

const NavBar = () => {
    return (
        <nav>
           
<img src={logo} alt='logo' class="logo" />
                    <button id="bar">Totebags </button>
                    <button id="bar"> Riñoneras</button>  
                    <button id="bar">Materas</button>
                   <div className='icon' ><CartWidget/></div>
     </nav>
    
    );
}

export default NavBar