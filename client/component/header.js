import React from 'react';
import {Link} from 'react-router';

const Header = () =>{
    return(
        <div className="box">
        <ul  className="nav nav-pills">
            <li><Link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link></li>
            <li><Link to="/about"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> About Us</Link></li>
            <li><Link to="/contact"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Contact Us</Link></li>
        </ul>
        </div>
        
    );
};  
 
export default Header;  