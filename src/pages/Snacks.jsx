import React from 'react';
import SnacksBlock from '../components/Blocks/SnacksBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSnacks} from '../redux/action/snacks';
import LoadingBlock from '../components/Blocks/LoadingBlock';

function Snacks() {
    const dispatch = useDispatch();
    const items = useSelector(({snacks}) => snacks.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({snacks}) => snacks.isLoaded);
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
            { isLoaded ?
              items.map(obj => 
              <SnacksBlock 
              onClickAddSnacks={handleAddSnacksToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              {...obj}/>)
              : Array(3).fill(0).map((_, index) => <LoadingBlock key={index}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Snacks;