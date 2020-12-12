import React from 'react';
import {Pizzas, Drink, Snacks, Sauce, Combo} from '../components/';
import PizzaBlock from '../components/PizzaBlock/index';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/action/pizzas';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

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
        <div className="content__items">
          {
            items.map(obj => 
            <PizzaBlock 
            key={obj.id}
            {...obj}/>)
          }
        </div>
    </div>
  )
}

export default Home;