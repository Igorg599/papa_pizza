import React from 'react';
import {PizzaModals} from '../index';
import PropTypes from 'prop-types';


function PopularBlock(obj) {
    const {name, imageUrl, price} = obj;
  
    const [modalActive, setmodalActive] = React.useState(false);
  
    return (
      <>
        <div onClick={() => setmodalActive(true)} className="popular-block">
          <img
          className="popular-block__image"
          src={imageUrl}
          alt="Pizza"
          />
          <div className="popular-block__descr">
            <h4 className="popular-block__title">{name}</h4>
            <div className="popular-block__price">от {price[0]} ₽</div>
          </div>
        </div> 
        <PizzaModals active={modalActive} setActive={setmodalActive} {...obj}/>
      </>
    )
}

PopularBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PopularBlock.defaultProps = {
    name: '---',
    price: []
};

export default PopularBlock;