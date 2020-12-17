import React from 'react';
import DrinkBlock from '../components/Blocks/DrinkBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDrink} from '../redux/action/drink';

function Drink() {
    const dispatch = useDispatch();
    const items = useSelector(({drink}) => drink.items);
    const cartItems = useSelector(({cart}) => cart.items);
    React.useEffect(() => {
      dispatch(fetchDrink());
    }, []);

    const handleAddDrinkToCart = (obj) => {
      dispatch({
        type: 'ADD_PIZZA_CART',
        payload: obj
      });
    }

  
    return (
      <div className="container">
          <div className="content__items">
            {
              items.map(obj => 
              <DrinkBlock 
              onClickAddDrink={handleAddDrinkToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              {...obj}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Drink;