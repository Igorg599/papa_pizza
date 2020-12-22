import React from 'react';
import ComboFriends from '../components/Blocks/ComboBlock/ComboFriends';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/action/pizzas';
import {fetchDrink} from '../redux/action/drink';
import {fetchSauce} from '../redux/action/sauce';

function Combo() {
  const dispatch = useDispatch();
  const itemsPizza = useSelector(({pizzas}) => pizzas.items);
  const itemsDrink = useSelector(({drink}) => drink.items);
  const itemsSauce = useSelector(({sauce}) => sauce.items);
  React.useEffect(() => {
      dispatch(fetchPizzas());
      dispatch(fetchDrink());
      dispatch(fetchSauce());
  }, []);

  return (
    <div className="container">
        <div className="content__items"> 
            <ComboFriends itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
        </div>
    </div>
  )
}
  
export default Combo;