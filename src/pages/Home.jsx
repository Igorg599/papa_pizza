import React from 'react';
import PizzaBlock from '../components/Blocks/PizzaBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/action/pizzas';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="container">
        <div className="content__items">
          {
            items.map(obj => 
            <PizzaBlock 
            key={obj.id}
            {...obj}/>)
          }
        </div>
    </div>
  )
}

export default Home;
