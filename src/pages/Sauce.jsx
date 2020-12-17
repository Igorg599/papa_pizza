import React from 'react';
import SauceBlock from '../components/Blocks/SauceBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSauce} from '../redux/action/sauce';

function Sauce() {
    const dispatch = useDispatch();
    const items = useSelector(({sauce}) => sauce.items);
    const cartItems = useSelector(({cart}) => cart.items);
    React.useEffect(() => {
      dispatch(fetchSauce());
    }, []);

    const handleAddSauceToCart = (obj) => {
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
              <SauceBlock 
              onClickAddSauce={handleAddSauceToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Sauce;