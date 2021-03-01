import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.css';

const Sidebar = ({cart}) => {
    const total = cart.reduce((acc, curr) => acc + curr.salary, 0)
    return (
             <aside className=" col-md-4 ps-5  position-relative ">
            <div className="sidebar  position-fixed ">
                <h1>Selected Developer : {cart.length}</h1>
                <button
                 type="button" class="btn bg-color"> Total Cost : (${total})
                <span className="ms-2"><FontAwesomeIcon icon={faCreditCard} /></span>
                </button>
            </div>
         </aside> 
    );
};

export default Sidebar;