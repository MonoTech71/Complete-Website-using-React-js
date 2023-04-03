import './Nav.css';
import { Link } from "react-router-dom";
import NavItems from './NavItems';



const Nav = () => {

    const navbar = {
        
    }
    return (
        <>
        <nav>
            <label className='logo'>Mono<span>Tech</span></label>    

            <ul className='nav-items'>
            {NavItems.map((item) => {
                return (
                <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                </li>

            )
            }
            )}
            </ul>

        </nav> 
        
        </>
    )
}

export default Nav;