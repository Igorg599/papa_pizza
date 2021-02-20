import React from 'react';

function About() {
    React.useEffect(() => {
        document.body.style.overflow = 'auto';
    }, []);

    return (
        <div className="stock">
            <div className="container">
                <h3>День рождения</h3>
                <div className="stock__descr">Скидка 15% на доставку и 25% при заказе на вынос за 3 дня до, 3 дня после и в сам день рождения.</div>
                <div className="stock__dop">Данная скидка суммируется с акцией «Среда».</div>
                <h3>«Зачёт»</h3>
                <div className="stock__descr">Скидка 15% на доставку предоставляется студентам-очникам по кодовому слову «Зачёт».</div>
                <div className="stock__dop">Данная скидка суммируется с акцией «Среда»</div>
                <h3>«Рабочие будни»</h3>
                <div className="stock__descr">Скидка 15% на доставку в офис и 25% при заказе на вынос в будние дни с 11:30 до 16:30 по кодовому слову «Ланч».</div>
                <div className="stock__dop">Данная скидка суммируется с акцией «Среда» и заказ не участвует в лотерее.</div>
                <h3>Заказ навынос</h3>
                <div className="stock__descr">Скидка 20% при заказе на вынос, а также участие в беспроигрышной лотерее.</div>
                <div className="stock__dop">Данная скидка суммируется с акцией «Среда». При получении заказа на сумму более 700 р. вы сможете попытать удачу в беспроигрышной лотерее с подарками из нашего меню.</div>
                <h3>«Среда»</h3>
                <div className="stock__descr">Скидка 35% на каждую вторую пиццу в чеке каждую среду за исключением праздничных и нерабочих дней по промокоду «Среда».</div>
                <div className="stock__dop">Скидка предоставляется на пиццу меньшую по стоимости.</div>
                <h3>«4 сезона» на пробу</h3>
                <div className="stock__descr">Оформляя заказ впервые через наш сайт, Вы можете получить пиццу «4 сезона» S бесплатно, назвав оператору промокод «111».</div>
                <div className="stock__descr">Также эту пиццу можно получить при первом оформлении заказа через наше приложение. Ссылка для скачивания приложения: <a href="https://vk.cc/bWltN5">https://vk.cc/bWltN5</a></div>
                <h3>«Бонусные баллы»</h3>
                <div className="stock__descr">Каждый оформивший заказы через наш сайт, приложение, по телефону или в офисе компании на общую сумму более 3000 р. включается в программу кэшбека. С каждого заказа Вам начисляется бонус в размере 5% от суммы заказа. 1 балл = 1 рублю, которыми можно оплатить все 100% покупки.</div>
                <div className="stock__dop">Данная акция суммируется со всеми акциями и распространяется в том числе на оплату комбо-наборов.</div>
                <div className="stock__not"/>
                <div className="stock__dop">Акции и спецпредложения между собой не суммируются, кроме случаев описаных выше.</div>
            </div>
        </div>
    )
}

export default About;