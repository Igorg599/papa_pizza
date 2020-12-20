import React from 'react';
import DrinkBlock from '../components/Blocks/DrinkBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDrink} from '../redux/action/drink';
import LoadingBlock from '../components/Blocks/LoadingBlock';

function Drink() {
    const dispatch = useDispatch();
    const items = useSelector(({drink}) => drink.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({drink}) => drink.isLoaded);
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
            { isLoaded ?
              items.map(obj => 
              <DrinkBlock 
              onClickAddDrink={handleAddDrinkToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              {...obj}/>)
              : Array(2).fill(0).map((_, index) => <LoadingBlock key={index}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Drink;