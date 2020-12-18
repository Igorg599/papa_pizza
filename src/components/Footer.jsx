import React from 'react';
import { Link } from 'react-router-dom';

const bottomCategory = [{name: 'Пиццерия', path: '/about'}, {name: 'Условия бесплатной доставки', path: '/condition'}, {name: 'Оплата', path: '/money'}, {name: 'Политика конфиденциальности', path: '/politics' }, {name: 'Публичная оферта', path: '/offer'}];

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <ul>
                    {bottomCategory.map((item) => (
                        <Link to={item.path}>
                        <li>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer;

