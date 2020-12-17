import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';


function SauceBlock(obj) {
  const {id, name, imageUrl, price, descr, onClickAddSauce, addedCount} = obj;

  const onAddSauce = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
    };
    onClickAddSauce(obj);
  };

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
          <Button onClick={onAddSauce} className="button--add" outline>
            <span>Выбрать</span>
            {addedCount && <i>{addedCount}</i>}
          </Button>
        </div>
      </div> 
    </>
  )
}

SauceBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
};

SauceBlock.defaultProps = {
    name: '---',
    price: []
};

export default SauceBlock;