import React from 'react';
import { Link } from 'react-router-dom';

function Sauce() {
    return (
        <Link to="/sauce">
            <li className=''>Соусы к пицце</li>
        </Link>
    )
};

export default Sauce;