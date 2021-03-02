import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import name from '../../fakeData/fakeData';
import './Sidebar.css';

const Sidebar = ({cart}) => {
    console.log(name);
    const total = cart.reduce((acc, curr) => acc + curr.salary, 0)
    return (
             <aside className=" col-md-4 col-sm-2    ">
            <div className="sidebar sidebar-count sidebar-count  ">
                <h1>Total  Hero : {cart.length}</h1>
                <button
                 type="button" class="btn bg-color"> Total Cost : (${total})
                <span className="ms-2"><FontAwesomeIcon icon={faCreditCard} /></span>
                </button>
            </div>
            <div className="hero-detail">

            </div>
         </aside> 
    );
};

export default Sidebar;