import React from 'react';
import DrinkBlock from '../components/Blocks/DrinkBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDrink} from '../redux/action/drink';

function Drink() {
    const dispatch = useDispatch();
    const items = useSelector(({drink}) => drink.items);
    React.useEffect(() => {
      dispatch(fetchDrink());
    }, []);
  
    return (
      <div className="container">
          <div className="content__items">
            {
              items.map(obj => 
              <DrinkBlock 
              key={obj.id}
              {...obj}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Drink;