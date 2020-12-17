import React from 'react';
import Button from '../Button';
import classNames from 'classnames';
import DopBlock from './Dop/DopBlock';

import Hala from '../../assets/img/hala.jpg';
import Cheesee from '../../assets/img/cheese.jpg';
import CheeseeMore from '../../assets/img/cheese2.jpg';

function PizzaModals({id, active, setActive, name, imageUrl, price, descr, onClickAddPizza}) {
    const availableTypes = ['Пышное', 'Тонкое'];
    const availableSizes = ['S (23-25 см)', 'M (28-30 см)', 'L (38-40 см)'];

    const DopItems = [{name: 'Халапенью (30 гр.)', price: 50, img: Hala}, {name: 'Сыр (50 гр.)', price: 50, img: Cheesee}, {name: 'Сыр (100 гр.)', price: 80, img: CheeseeMore}];

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
                            {DopItems.map((item) => (
                                <DopBlock item={item}/>
                            ))}
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
                            </Button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaModals;