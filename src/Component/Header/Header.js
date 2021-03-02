import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Header.css';
  

const Header = () => {
    return (
                 <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <div className="container">
                         <a className="navbar-brand fw-bolder fst-italic" href="/">
                         <span className="text-danger">Programming-Hero</span> Team
                          </a>
                    <ul className="navbar-nav ">
                         <li >
                         <button className="button-width fw-bolder fst-italic btn btn-danger"> Log In 
                         <span ><FontAwesomeIcon icon={faUsers} /></span></button>
                         </li>
                    </ul>
               </div>
          </nav>
    )
}         
    


export default Header;