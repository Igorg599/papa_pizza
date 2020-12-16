import React from 'react';
import Button from '../Button';
import classNames from 'classnames';

import Hala from '../../assets/img/hala.jpg';

function PizzaModals({id, active, setActive, name, imageUrl, price, descr, onClickAddPizza, addedCount}) {
    const availableTypes = ['Пышное', 'Тонкое'];
    const availableSizes = ['S (23-25 см)', 'M (28-30 см)', 'L (38-40 см)'];

    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(1);

    const onSelectType = (index) => {
        setActiveType(index);
    }

    const onSelectSize = (index) => {
        setActiveSize(index);
    };

    const onAddPizza = () => {
        const obj = {
          id: `${id}_${activeSize}_${activeType}`,
          name,
          imageUrl,
          price: price[activeSize],
          size: availableSizes[activeSize],
          type: availableTypes[activeType]
        };
        onClickAddPizza(obj);
      };


    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="cl-btn-4" onClick={() => setActive(false)}></div>   
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__content_pizza">
                    <div className="modal__content_pizza-img">
                        <img src={imageUrl} alt={name}/>
                    </div>                    
                    <div className="modal__content_des">
                        <h4 className="items-block__title">{name}</h4>
                        <div className="items-block__descr">{descr}</div>
                        <div className="items-block__selector">
                            <ul>
                            {availableTypes.map((type, index) => (
                                <li 
                                key={type}  
                                onClick={() => onSelectType(index)} 
                                className={classNames({
                                    active: activeType === index,
                                })}>
                                    {type}
                                </li>
                            ))}
                            </ul>
                            <ul>
                            {availableSizes.map((size, index) => (
                                <li 
                                key={size} 
                                onClick={() => onSelectSize(index)} 
                                className={classNames({
                                    active: activeSize === index,
                                })}>
                                    {size}
                                </li>
                            ))}
                            </ul>
                        </div>
                        <h4 className="items-block__plus">Добавить в пиццу</h4>
                        <div className="items-block__dop">
                            <button type="button" className="items-block__dop-button">
                                <img src={Hala} className="items-block__dop-img" alt="img"></img>
                                <h4 className="items-block__dop-title">Халапенью (30 гр.)</h4>
                                <span className="items-block__dop-money"><span className="money__value">50</span><span className="money__currency money__currency_on-the-right"> ₽</span></span>
                                <svg width="20" height="20" fill="none" className="items-block__dop-icon"><circle cx="10" cy="10" r="10" fill="#fff"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.25c3.74 0 6.75 3.01 6.75 6.75s-3.01 6.75-6.75 6.75S3.25 13.74 3.25 10 6.26 3.25 10 3.25zM18.25 10c0-4.57-3.68-8.25-8.25-8.25S1.75 5.43 1.75 10s3.68 8.25 8.25 8.25 8.25-3.68 8.25-8.25z" fill="#FF6900"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.881 8.076a.6.6 0 010 .848l-3.638 3.639a.6.6 0 01-.849 0l-1.818-1.82a.6.6 0 11.848-.848L8.82 11.29l3.214-3.214a.6.6 0 01.848 0z" fill="#FF6900"></path></svg>
                            </button>
                        </div>
                        <div className="items-block__bottom">
                            <Button onClick={onAddPizza} className="button--add" outline>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                    />
                                </svg>
                                <span onClick={() => setActive(false)}>Добавить в корзину за {price[activeSize]} ₽</span>
                                {addedCount && <i>{addedCount}</i>}
                            </Button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaModals;