import react from "react";
import classes from './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar (){
    return (
        

        <ul class="ul">
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/New">New</Link></li>
            <li><Link to="/used">Used</Link></li>
            <li><Link to="/Inventory">Inventory</Link></li> */}
<div className="logo"></div>


            <li span className="login-btns">
                
                        <button className="login-btn">
                            
                            <span> <Link class="a" to="/">Home</Link> </span>
                            
                        </button> </li>

                        <li span className="login-btns">
                        <button className="login-btn">
                        <span>  <Link class="a"  to="/About">About</Link> </span>
                        </button> </li>

                        <li span className="login-btns">
                        <button className="login-btn">
                        <span> <Link class="a"to="/New">New</Link> </span>
                        </button> </li>

                        <li span className="login-btns">
                        <button className="login-btn">
                        <span>  <Link class="a" to="/Used">Used</Link> </span>
                        </button> </li>

                        <li span className="login-btns">
                        <button className="login-btn">
                        <span> <Link class="a" to="/Inventory">Inventory</Link> </span>
                        </button> </li>
                        
                        
                      
                       
        </ul>
        
    )
}
 
export default NavBar;
