import React from 'react';
import {Link} from 'react-router-dom';

import cartImg from '../assets/img/empty-cart.png';

function Cart() {
  return (
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая <i>&#127829;</i></h2>
            <p>
              Вероятней всего, вы ещё не выбрали товар.<br />
              Для выбора товара перейдите на главную страницу.
            </p>
            <img src={cartImg} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Cart;
