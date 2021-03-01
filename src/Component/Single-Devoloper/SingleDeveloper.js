import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './SingleDeveloper.css';

const SingleDeveloper = (props) => {
    const {image , name , post, salary} = props.developer;
    const [isClicked, setIsClicked]=useState()
    return (
        <section className="text-center ">
        <div className="card   text-white ">
            <div className="image">
                <img className="justify-content-center" src={image} alt="..." />
            </div>
            <div className="card-body">
                <h6>{name}</h6>
                <p className="fw-bold"> {post}</p>
                <h6>Salary:${salary}m/Month</h6>
                <button disabled={isClicked} 
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