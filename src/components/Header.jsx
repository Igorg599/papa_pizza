import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from '../redux/action/filters';
import { useEffect } from "react";

import logoSvg from '../assets/img/pizza-logo.jpg';
import pizza from '../assets/img/pizza.gif';
import menuImage from '../assets/img/menu.jpg';
import up from '../assets/img/up.jpg';

const categoryNames = [{name: 'Пицца', path: '/picca'}, {name: 'Комбо', path: '/combo'}, {name: 'Напитки', path: '/drink'}, {name: 'Горячие закуски', path: '/snacks' }, {name: 'Соусы к пицце', path: '/sauce'}, {name: 'Акции', path: '/stock'}, {name: 'Пицца за опоздание', path: '/hour'}];

function Header() {
    const {totalPrice, totalCount} = useSelector(({cart}) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount,
    }));

    const dispatch = useDispatch();
    const {category} = useSelector(({filters}) => filters);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    useEffect(() => {
        const header = document.getElementById("myHeader");
        const logo = document.getElementById("logo");

        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset >= sticky + 50 && document.documentElement.clientWidth >= 992) {
            header.classList.add("sticky");
            logo.style.transition = '1s';
            logo.style.display = 'block';
            } else if (window.pageYOffset >= sticky + 50 && document.documentElement.clientWidth < 992 && document.documentElement.clientWidth > 767) {
            header.classList.add("sticky");
            } else {
            header.classList.remove("sticky");
            logo.style.display = 'none';
            }
        });
        return () => {
        window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    useEffect(() => {
        const upElem = document.querySelector('.pageup');
    
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 700) {
                upElem.style.opacity = 1;
            } else {
                upElem.style.opacity = 0;
            }
        });
    
    }, []);

    const Pageup = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div className="header">
                <div className="container">
                    <Link to="/">
                        <div className="header__logo">
                            <img width="150" src={logoSvg} alt="Pizza logo" />
                            <div className="header__time">ВС-ЧТ: 11:00 - 23:00 &emsp; ПТ-СБ: 11:00 - 1:00</div>
                        </div>   
                    </Link>
                </div>
                <div className="container">
                    <div id="myHeader" className="header__fixed">
                        <img className="menu_image" width="44" src={menuImage} alt="logo"></img>
                        <img id="logo" className="logo_mini" width="100" src={logoSvg} alt="logo"></img>
                        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames}/>
                        <Link to="/">
                            <img className="logo_mini-for_mobile" width="99" src={logoSvg} alt="logo"></img>
                        </Link>
                        <div className="header__time-mini">ВС-ЧТ: 11:00-23:00 &nbsp; ПТ-СБ: 11:00-1:00</div>
                        <div  className="header__cart">
                            <Link to="/cart">
                                <button onClick={() => onSelectCategory(88)} className="button outline">
                                    <a href="/cart.html" className="button button--cart">
                                        <span>{totalPrice} ₽</span>
                                        <div className="button__delimiter"></div>
                                        <svg className="header__cart_svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            />
                                            <path
                                            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            />
                                            <path
                                            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            />
                                        </svg>
                                        <img className="header__arrow_svg" width="30" src={pizza} alt="PIZZA"/>
                                        <span>{totalCount}</span>
                                    </a>                         
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageup" onClick={Pageup}>
                <img src={up} width="36" alt="up"/>
            </div>
        </>
    )
}

export default Header;
