import React from 'react';
import './info-card-styles.css' 
const InfoCard = ({branch,email,phone})=>{
    return(
    <ul className="info-list-container">
        <li className="list-item">Affiliated to: <span className="color-pink">{branch}</span></li>
        <li className="list-item">Email: <span className="color-pink">{email}</span></li>
        <li className="list-item">Phone Number: <span className="color-pink">{phone}</span></li>
    </ul>)
}

export default InfoCard;