import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {PizzaModals} from '../index';


function PizzaBlock(obj) {
  const {name, imageUrl, price, descr} = obj;

  const [modalActive, setmodalActive] = React.useState(false);

  return (
    <>
      <div className="items-block">
        <img
        onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}}
        className="items-block__image"
        src={imageUrl}
        alt="Pizza"
        />
        <h4 className="items-block__title">{name}</h4>
        <div className="items-block__descr">{descr}</div>
        <div className="items-block__bottom">
          <div className="items-block__price">от {price[0]} ₽</div>
          <Button onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}} className="button--add" outline>
            <span>Выбрать</span>
          </Button>
        </div>
      </div> 
      <div className="mod">
        <PizzaModals active={modalActive} setActive={setmodalActive} {...obj}/>
      </div>
    </>
  )
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
    name: '---',
    price: []
};

export default PizzaBlock;