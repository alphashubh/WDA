import React from 'react';
import {Link} from 'react-router';

const Header = () =>{
    return(
        <ul  className="nav nav-pills">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        
    );
};  
 
export default Header;  