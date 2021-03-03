import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import './Header.css';
  

const Header = () => {
    return (
            <Navbar className="container">
               <Navbar.Brand href="#home">Our <span className="title">HEROS</span></Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
               <Navbar.Text>
                    <a href="#login"><Button className="btn-danger">Log In  <FontAwesomeIcon icon={faUsers} /></Button></a>
               </Navbar.Text>
               </Navbar.Collapse>
      </Navbar>
          
    )
}         
    


export default Header;