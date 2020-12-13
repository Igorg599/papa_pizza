import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';


function ComboBlock(obj) {
  const {name, imageUrl, price, descr} = obj;

  return (
    <>
      <div className="items-block">
        <img
        className="items-block__image"
        src={imageUrl}
        alt="Sauce"
        />
        <h4 className="items-block__title">{name}</h4>
        <div className="items-block__descr">{descr}</div>
        <div className="items-block__bottom">
          <div className="items-block__price">{price} ₽</div>
          <Button className="button--add" outline>
            <span>Выбрать</span>
          </Button>
        </div>
      </div> 
    </>
  )
}

ComboBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
};

ComboBlock.defaultProps = {
    name: '---',
    price: []
};

export default ComboBlock;