import React from 'react';
import { Link } from 'react-router-dom';

import Insta from '../assets/img/instagram.svg';
import Vk from '../assets/img/vk.svg';
import GooglePlay from '../assets/img/google_play.png';


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
                <div className="footer__solid"></div>
                <div className="footer__bottom">
                    <h4 className="footer__rights"> PAPA PIZZA © 2020 </h4>
                    <div className="footer__logo">
                        <a href="https://www.instagram.com/papapizzaperm/"><img src={Insta} alt="logo"/></a>
                        <a href="https://vk.com/papapizza59"><img src={Vk} alt="logo"/></a>
                        <a href="https://play.google.com/store/apps/details?id=ru.FoodSoul.PermPapaPicca&hl=ru&gl=US"><img src={GooglePlay} alt="logo"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

