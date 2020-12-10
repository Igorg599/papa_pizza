import React from 'react';
import {Pizzas, Drink, Snacks, Sauce, Combo} from '../components';

function Home() {

  return (
    <div className="container">
        <div className="content__top">
          <div className="categories">
              <ul>
                  <Pizzas/>
                  <Combo/>
                  <Drink/>
                  <Snacks/>
                  <Sauce/>
              </ul>
            </div>
        </div>
        <h2 className="content__title">Все пиццы</h2>
    </div>
  )
}

export default Home;