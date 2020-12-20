import React from 'react';
import PizzaBlock from '../components/Blocks/PizzaBlock';
import LoadingBlock from '../components/Blocks/LoadingBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/action/pizzas';
import PopularBlock from '../components/Blocks/PopularBlock';

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.items);
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
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
    <>
      <div className="container">
        <h3 className="popular__title_pop">Популярное</h3>
      </div>
      <div className="popular">
        <ul>
          {
            items.filter(obj => obj.rating === 1).map(obj => 
            <PopularBlock 
            onClickAddPizza={handleAddPizzaToCart} 
            key={obj.id}
            addedCount={cartItems[obj.id] && 
            cartItems[obj.id].items.length}
            {...obj}/>)
          }
        </ul>
      </div>
        <div className="container">
          <h3 className="popular__title_all">Все пиццы</h3>
          <div className="content__items">
            { isLoaded ?
              items.map(obj => 
              <PizzaBlock 
              onClickAddPizza={handleAddPizzaToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && 
              cartItems[obj.id].items.length}
              {...obj}/>) : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)
            }
          </div>
      </div>
    </>
  )
}

export default Home;
