import React from 'react';
import ComboFriends from '../components/Blocks/ComboBlock/ComboFriends';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzas} from '../redux/action/pizzas';
import {fetchDrink} from '../redux/action/drink';
import {fetchSauce} from '../redux/action/sauce';
import Button from '../components/Button';
import ComboModalTrio from '../components/Modals/ComboModalTrio';
import Lanch from '../assets/img/combo/lanch.jpg';

function Combo() {
  const ComboItems = [{name: "Комбо 'Ланч'", imageUrl: Lanch, price: 600, descr: "В состав комбо входят 1 пицца размером S на выбор, 2 салата 'Греческий', 2 морса 0,3л на выбор (860 гр.). Доступен для заказа с 11:00 до 16:00."},{name: "Комбо 'Для друзей'", imageUrl: "http://papapizza59.ru/image/cache/catalog/kombo/dljadruzej-350x350.jpg", price: 2700, descr: "В состав входят 5 пицц размером M (4,000.00 гр.), 2 л. напитка на выбор и 5 соусов."}, {name: "Комбо 'Для двоих'", imageUrl: "http://papapizza59.ru/image/cache/catalog/kombo/dljadvoih-350x350.jpg", price: 950, descr: "В состав входят 2 пиццы размером S (1,200.00 гр.), 1 л. напитка на выбор и 2 соуса."}, {name: "Комбо 'Вечеринка'", imageUrl: "http://papapizza59.ru/image/cache/catalog/kombo/vecherinka-350x350.jpg", price: 5000, descr: "В состав входят 10 пицц размером M (4,000.00 гр.), 3 л. напитка на выбор и 10 соусов."}];

  const ComboTrio = {name: "Горячее трио", imageUrl: "http://papapizza59.ru/image/cache/catalog/kombo/gt-1000x1000.jpg", price: [1250, 1750, 2100], descr: "Выбери 3 пиццы одного размера на пышном тесте, 3 соуса и 1 напиток по специальной цене."};

  const [modalActive, setmodalActive] = React.useState(false);
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
          <>
            <div className="items-block">
              <img
              className="items-block__image"
              src={ComboTrio.imageUrl}
              alt="Combo"
              onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}}
              />
              <h4 className="items-block__title">{ComboTrio.name}</h4>
              <div className="items-block__descr">{ComboTrio.descr}</div>
              <div className="items-block__bottom">
                <div className="items-block__price">от {ComboTrio.price[0]} ₽</div>
                <Button onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}} className="button--add" outline>
                  <span>Выбрать</span>
                </Button>
              </div>
            </div> 
            <ComboModalTrio active={modalActive} item={ComboTrio} onClickAddCombo={handleAddComboToCart} setActive={setmodalActive} itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
          </>
          {ComboItems.map((item, index) => (
            <ComboFriends item={item} key={index} onClickAddCombo={handleAddComboToCart} itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
          ))}
        </div>
    </div>
  )
}
  
export default Combo;