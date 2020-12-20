import React from 'react';

import { Link } from 'react-router-dom';


function Categories({activeCategory, items, onClickCategory}) {

    return (
        <div className="content__top">
          <div className="categories">
              <ul>
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