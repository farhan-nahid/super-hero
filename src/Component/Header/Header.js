import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
  

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
             <div className="container">
                <a className="navbar-brand fw-bolder fst-italic" href="/">
                     <span className="text-danger">Programming-Hero</span> Team
                </a>
                    <div>
                    <a className="navbar-brand fw-bolder" href="/">
                      Home 
                </a>
                <a className="navbar-brand fw-bolder" href="/">
                     About Us
                </a>
                <a className="navbar-brand fw-bolder" href="/">
                     Portfolio
                </a>
                  
                    </div>
                 </div>
                 <button className="button-width fw-bolder fst-italic btn btn-danger">
                        Log In <span className="ms-2"><FontAwesomeIcon icon={faUsers} /></span>
                    </button>
          </nav>  
    );
};

export default Header;