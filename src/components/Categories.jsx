import React from 'react';

import { Link } from 'react-router-dom';


function Categories({activeCategory, items, onClickCategory}) {

    return (
        <div className="content__top">
          <div className="categories">
              <ul>
              <Link to="/">
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Пицца</li>
              </Link>
              {items &&
              items.map((item, index) => 
              (
                <Link to={item.path}>
                  <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={`${item}_${index}`}>{item.name}</li>
                </Link>
              ))}
              </ul>
            </div>
        </div>
    )
}



export default Categories;