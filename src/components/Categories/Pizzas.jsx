import React from 'react';
import { Link } from 'react-router-dom';

function Pizzas() {
    return (
        <Link to="/pizza">
            <li className='active'>Пицца</li>
        </Link>
    )
}

export default Pizzas;