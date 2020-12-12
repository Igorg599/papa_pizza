import React from 'react';
import { Link } from 'react-router-dom';

function Drink() {
    return (
        <Link to="/drink">
            <li className=''>Напитки</li>
        </Link>
    )
};

export default Drink;