import React from 'react';
import Button from '../../Button';
import ComboModalFriends from '../../Modals/ComboModalFriends';


function ComboFriends({itemsPizza, itemsDrink, itemsSauce, onClickAddCombo, item}) {
  const [modalActive, setmodalActive] = React.useState(false);
  console.log(itemsPizza);
  return (
    <>
      <div className="items-block">
        <img
        className="items-block__image"
        src={item.imageUrl}
        alt="Combo"
        onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}}
        />
        <h4 className="items-block__title">{item.name}</h4>
        <div className="items-block__descr">{item.descr}</div>
        <div className="items-block__bottom">
          <div className="items-block__price">{item.price} ₽</div>
          <Button onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}} className="button--add" outline>
            <span>Выбрать</span>
          </Button>
        </div>
      </div> 
      <ComboModalFriends active={modalActive} item={item} onClickAddCombo={onClickAddCombo} setActive={setmodalActive} itemsPizza={itemsPizza} itemsDrink={itemsDrink} itemsSauce={itemsSauce}/>
    </>
  )
}

export default ComboFriends;