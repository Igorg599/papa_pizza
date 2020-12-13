import React from 'react';
import {Pizzas, Drink, Snacks, Sauce, Combo} from '../';


function Categories() {
    return (
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
    )
}

export default Categories;