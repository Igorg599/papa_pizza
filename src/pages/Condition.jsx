import React from 'react';

function Condition() {
    return (
        <div className="about">
            <div className="container">
                <h2 className="about__title">Доставка</h2>
                <div className="about__des">Для того, чтобы узнать примерное время ожидания и условия доставки, кликните по району, в который необходимо привезти Ваш заказ.</div>
                <div className="about__des">Время ожидания заказа может быть увеличено в зависимости от ситуации на дорогах и загруженности кухни. Просим обратить внимание на то, что в минимальную сумму заказа с учётом всех скидок,а также промокодов и сертификатов не входят десерты, напитки и соусы.</div>
                <div className="about__des">А если Вы находитесь неподалёку и желаете сэкономить 20%, то заберите заказ сами по адресу: ул. Куйбышева, 87</div>
                <div ><a href="https://yandex.ru/maps/50/perm/?utm_medium=mapframe&utm_source=maps"></a><a href="https://yandex.ru/maps/50/perm/?from=api-maps&l=trf%2Ctrfe&ll=56.266246%2C57.985012&mode=usermaps&origin=jsapi_2_1_78&um=constructor%3A1964e7aad7a04da33338dc58cbc20759a481a92d632d23f2cd0a29fa5ad07baf&utm_medium=mapframe&utm_source=maps&z=12.34" ></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUI7Qep9D" width="90%" height="40%" frameborder="1" title='condition' allowfullscreen="true" ></iframe></div>
            </div>
        </div>
    )
}

export default Condition;