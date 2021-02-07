import React from 'react';

import { Link } from 'react-router-dom';


function Categories({activeCategory, items, onClickCategory}) {

  const [hamburgerActive, setHamburgerActive] = React.useState(false);

    return (
      <>
        <div className={hamburgerActive ? "hamburger_active" : "hamburger"} onClick={() => setHamburgerActive(!hamburgerActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="content__top">
          <div className={hamburgerActive ? "categories_active" : "categories"}>
              <ul>
                {items &&
                items.map((item, index) => 
                ( 
                  <Link key={`${item}_${index}`} to={item.path} onClick={() => setHamburgerActive(false)}>
                    <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)}>{item.name}</li>
                  </Link>
                ))}
                <Link to='/politics' onClick={() => setHamburgerActive(false)}>
                  <div className="categories_politics">Политика конфиденциальности</div>                
                </Link>
              </ul>
            </div>
        </div>
      </>
    )
}



export default Categories;