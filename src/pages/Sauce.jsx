import React from 'react';
import SauceBlock from '../components/Blocks/SauceBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSauce} from '../redux/action/sauce';
import LoadingBlock from '../components/Blocks/LoadingBlock';

function Sauce() {
    const dispatch = useDispatch();
    const items = useSelector(({sauce}) => sauce.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({sauce}) => sauce.isLoaded);
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
            { isLoaded ?
              items.map(obj => 
              <SauceBlock 
              onClickAddSauce={handleAddSauceToCart} 
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}/>)
              : Array(7).fill(0).map((_, index) => <LoadingBlock key={index}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Sauce;