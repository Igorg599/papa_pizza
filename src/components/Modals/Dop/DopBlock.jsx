import React from 'react';


function DopBlock({item, onClickAddDop}) {
    const {name, img, price} = item;
    const [activeIcon, setActiveIcon] = React.useState(false);

    let dopItemPrice = 0;
    let dopItemName;


    const dopItemSet = () => {
        setActiveIcon(!activeIcon);
        if (activeIcon === false) {
            dopItemPrice = price;
            dopItemName = name;
        } else {
            dopItemPrice = -price;
            dopItemName = name;
        }
        onClickAddDop(dopItemPrice, dopItemName);
    }

    return (
        <button 
        key={name} 
        onClick={() => dopItemSet()}
        type="button" 
        className={activeIcon ? "items-block__dop-button active" : "items-block__dop-button"}>
            <img src={img} className="items-block__dop-img" alt="img"></img>
            <h4 className="items-block__dop-title">{name}</h4>
            <span className="items-block__dop-money"><span className="money__value">{price}</span><span className="money__currency money__currency_on-the-right"> ₽</span></span>
            <svg width="20" height="20" fill="none" className={activeIcon ? "items-block__dop-icon active" : "items-block__dop-icon"}><circle cx="10" cy="10" r="10" fill="#fff"></circle><path fillRule="evenodd" clipRule="evenodd" d="M10 3.25c3.74 0 6.75 3.01 6.75 6.75s-3.01 6.75-6.75 6.75S3.25 13.74 3.25 10 6.26 3.25 10 3.25zM18.25 10c0-4.57-3.68-8.25-8.25-8.25S1.75 5.43 1.75 10s3.68 8.25 8.25 8.25 8.25-3.68 8.25-8.25z" fill="#FF6900"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.881 8.076a.6.6 0 010 .848l-3.638 3.639a.6.6 0 01-.849 0l-1.818-1.82a.6.6 0 11.848-.848L8.82 11.29l3.214-3.214a.6.6 0 01.848 0z" fill="#FF6900"></path></svg>
        </button>
    )
}
export default DopBlock;