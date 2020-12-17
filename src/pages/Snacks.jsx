import React from 'react';
import SnacksBlock from '../components/Blocks/SnacksBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSnacks} from '../redux/action/snacks';

function Snacks() {
    const dispatch = useDispatch();
    const items = useSelector(({snacks}) => snacks.items);
    const cartItems = useSelector(({cart}) => cart.items);
    React.useEffect(() => {
      dispatch(fetchSnacks());
    }, []);

    const handleAddSnacksToCart = (obj) => {
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
              <SnacksBlock 
              onClickAddSnacks={handleAddSnacksToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              {...obj}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Snacks;