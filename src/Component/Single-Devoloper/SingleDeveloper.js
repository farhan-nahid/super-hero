import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './SingleDeveloper.css';

const SingleDeveloper = (props) => {
    const {image , name , post, salary} = props.developer;
    const [isClicked, setIsClicked]=useState()
    return (
        <section className="text-center  col-lg-4 col-md-6  col-sm-6">
        <div className="card   text-white mt-4">
            <img className="card-img-top img-fluid" src={image} alt="..." />
                <div className="card-body">
                    <h6>{name}</h6>
                    <p className="fw-bold"> {post}</p>
                    <h6>Salary:${salary}m/Month</h6>
                    <button developer={props.developer} disabled={isClicked} 
                    onClick={() =>  {
                    props.handleAddDeveloper(props.developer)
                    setIsClicked(true) 
                }} 
                className="btn btn-warning"> Pay Us <FontAwesomeIcon icon={faMoneyCheckAlt} /> 
                     </button>
                </div>    
        </div>
     </section>
    );
};

export default SingleDeveloper;