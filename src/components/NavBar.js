/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import CartWidget from "../components/CartWidget"


const NavBar = ()=> {

return(

<div className="navbar bg-base-100 justify-between">

    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
                <li><a>Item 4</a></li>
            </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Esencia</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            <li><Link to='/shop'>Item List</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><a>Item 3</a></li>
            <li><a>Item 4</a></li>
        </ul>
    </div>
    <button className='btn' onClick={DarkModeContext}>DarkMode</button>
    <CartWidget/>

</div>

);

};

export default NavBar