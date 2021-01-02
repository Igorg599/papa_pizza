import React from 'react';
import Button from '../Button';
import ComboBlockItems from '../Blocks/ComboBlock/ComboBlockItems/ComboBlockItems';

function ComboModalFriends({itemsPizza, itemsDrink, itemsSauce, setActive, active, onClickAddCombo, item}) {
    const [activePizzaName, setActivePizzaName] = React.useState([]);
    const [activeDrinkName, setActiveDrinkName] = React.useState([]);
    const [activeSauceName, setActiveSauceName] = React.useState([]);

    function handleAddPizzaToCart(name, activeIcon) {
        if (activeIcon === false) {
            setActivePizzaName([...activePizzaName, ` ${name},`]);
        } else {
            setActivePizzaName(activePizzaName.filter(item => item !== ` ${name},`));
        }
    }

    function handleAddDrinkToCart(name, activeIcon) {
        if (activeIcon === false) {
            setActiveDrinkName([...activeDrinkName, ` ${name},`]);
        } else {
            setActiveDrinkName(activeDrinkName.filter(item => item !== ` ${name},`));
        }
    }

    function handleAddSauceToCart(name, activeIcon) {
        if (activeIcon === false) {
            setActiveSauceName([...activeSauceName, ` ${name},`]);
        } else {
            setActiveSauceName(activeSauceName.filter(item => item !== ` ${name},`));
        }
    }
    
    const onAddCombo = () => {
        const obj = {
            id: activePizzaName.length + 123214,
            name: item.name,
            imageUrl: item.imageUrl,
            price: item.price,
            pizza: activePizzaName,
            drink: activeDrinkName,
            sauce: activeSauceName
        };
        console.log(obj);
        onClickAddCombo(obj);
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false); document.body.style.overflow = 'visible'}}>
            <div className="cl-btn-4" onClick={() => {setActive(false); document.body.style.overflow = 'visible'}}></div>   
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__content_combo">
                    <div className="modal__content_combo--des">
                        <h3>{item.name}</h3>
                        <div className="modal__content_combo--descr">{item.descr}</div>
                    </div>
                    <h5>Выберете пиццы:</h5>
                    <div className="modal__content_combo--pizza">
                        {itemsPizza.map((item, index) => (
                            <ComboBlockItems item={item} onClickAddItem={handleAddPizzaToCart} key={index}/>
                        ))}
                    </div>
                    <h6>Выберете соусы и напитки:</h6>
                    <div className="modal__content_combo-bottom">
                        <div className="modal__content_combo-bottom-left">
                            {itemsSauce.map((item, index) => (
                                <ComboBlockItems item={item} onClickAddItem={handleAddSauceToCart} key={index}/>
                            ))}
                        </div>
                        <div className="modal__content_combo-bottom-right">
                            {itemsDrink.map((item, index) => (
                                <ComboBlockItems onClickAddItem={handleAddDrinkToCart} item={item} key={index}/>
                            ))}
                            <div onClick={() => {setActive(false); document.body.style.overflow = 'visible'}}>
                                <Button onClick={onAddCombo} className="button--add" outline>
                                    <svg onClick={() => setActive(false)}
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
                                    <span>Добавить в корзину за {item.price} ₽</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComboModalFriends;