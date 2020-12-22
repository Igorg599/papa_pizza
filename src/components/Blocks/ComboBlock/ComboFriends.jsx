import React from 'react';
import Button from '../../Button';
import ComboModalFriends from '../../Modals/ComboModalFriends';


function ComboFriends({itemsPizza, itemsDrink, itemsSauce}) {
  const [modalActive, setmodalActive] = React.useState(false);

  return (
    <>
      <div className="items-block">
        <img
        className="items-block__image"
        src="http://papapizza59.ru/image/cache/catalog/kombo/dljadruzej-350x350.jpg"
        alt="Combo"
        onClick={() => setmodalActive(true)}
        />
        <h4 className="items-block__title">Комбо "Для друзей"</h4>
        <div className="items-block__descr">В состав комбо входят 5 пицц размером M, 2 л. напитка на выбор и 5 соусов.</div>
        <div className="items-block__descr">Вес: 4,000.00 г</div>
        <div className="items-block__bottom">
          <div className="items-block__price">2700 ₽</div>
          <Button onClick={() => setmodalActive(true)} className="button--add" outline>
            <span>Выбрать</span>
          </Button>
        </div>
      </div> 
      <ComboModalFriends active={modalActive} setActive={setmodalActive} itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
    </>
  )
}

export default ComboFriends;