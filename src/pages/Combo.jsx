import React from 'react';
import ComboFriends from '../components/Blocks/ComboBlock/ComboFriends';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/action/pizzas';
import {fetchDrink} from '../redux/action/drink';
import {fetchSauce} from '../redux/action/sauce';

function Combo() {
  const ComboItems = [{name: "Комбо 'Для друзей'", imageUrl: "http://papapizza59.ru/image/cache/catalog/kombo/dljadruzej-350x350.jpg", price: 2700, descr: "В состав входят 5 пицц размером M (4,000.00 гр.), 2 л. напитка на выбор и 5 соусов."}, {name: "Комбо 'Для двоих'", imageUrl: "http://papapizza59.ru/image/cache/catalog/kombo/dljadvoih-350x350.jpg", price: 950, descr: "В состав входят 2 пиццы размером S (1,200.00 гр.), 1 л. напитка на выбор и 2 соуса."}, {name: "Комбо 'Вечеринка'", imageUrl: "http://papapizza59.ru/image/cache/catalog/kombo/vecherinka-350x350.jpg", price: 5000, descr: "В состав входят 10 пицц размером M (4,000.00 гр.), 3 л. напитка на выбор и 10 соусов."}];

  const dispatch = useDispatch();
  const itemsPizza = useSelector(({pizzas}) => pizzas.items);
  const itemsDrink = useSelector(({drink}) => drink.items);
  const itemsSauce = useSelector(({sauce}) => sauce.items);
  React.useEffect(() => {
      dispatch(fetchPizzas());
      dispatch(fetchDrink());
      dispatch(fetchSauce());
  }, []);

  const handleAddComboToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    });
  }

  return (
    <div className="container">
        <div className="content__items"> 
          {ComboItems.map((item, index) => (
            <ComboFriends item={item} key={index} onClickAddCombo={handleAddComboToCart} itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
          ))}
        </div>
    </div>
  )
}
  
export default Combo;