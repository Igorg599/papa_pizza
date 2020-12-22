import React from 'react';


function ComboModalFriends({itemsPizza, itemsDrink, itemsSauce, setActive, active}) {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="cl-btn-4" onClick={() => setActive(false)}></div>   
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__content_combo">
                    <div className="modal__content_combo--des">
                        <h3>Комбо "Для друзей"</h3>
                        <div className="items-block__descr">В состав комбо входят 5 пицц размером M, 2 л. напитка на выбор и 5 соусов.</div>
                        <div className="items-block__descr">Вес: 4,000.00 г</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComboModalFriends;