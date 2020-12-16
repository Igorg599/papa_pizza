import React from 'react';
import PizzaBlock from '../components/Blocks/PizzaBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/action/pizzas';

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.items);
  const items = useSelector(({pizzas}) => pizzas.items);
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    });
  };

  return (
    <div className="container">
        <div className="content__items">
          {
            items.map(obj => 
            <PizzaBlock 
            onClickAddPizza={handleAddPizzaToCart} 
            key={obj.id}
            addedCount={cartItems[obj.id] && 
            cartItems[obj.id].items.length}
            {...obj}/>)
          }
        </div>
    </div>
  )
}

export default Home;
