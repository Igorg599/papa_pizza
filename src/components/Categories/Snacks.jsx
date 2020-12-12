import React from 'react';
import { Link } from 'react-router-dom';

function Snacks() {
    return (
        <Link to="/snacks">
            <li className=''>Горячие закуски</li>
        </Link>
    )
};

export default Snacks;