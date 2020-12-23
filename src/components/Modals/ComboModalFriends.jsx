import React from 'react';


function ComboModalFriends({itemsPizza, itemsDrink, itemsSauce, setActive, active}) {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="cl-btn-4" onClick={() => setActive(false)}></div>   
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__content_combo">
                    <div className="modal__content_combo--des">
                        <h3>Комбо "Для друзей"</h3>
                        <div className="modal__content_combo--descr">В состав комбо входят 5 пицц размером M (4,000.00 гр.), 2 л. напитка на выбор и 5 соусов.</div>
                    </div>
                    <div className="modal__content_combo--pizza">
                        {itemsPizza.map((item, index) => (
                            <div className="modal__content_combo--pizza-block" key={index}>
                            <img src={item.imageUrl} alt="pizza"/>
                            <h4>{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComboModalFriends;