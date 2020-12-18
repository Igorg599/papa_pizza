import React from 'react';

function About() {
    return (
        <div className="about">
            <div className="container">
                <h2 className="about__title">НАША ПИЦЦЕРИЯ</h2>
                <div className="about__des">Доставка горячей пиццы в Перми. </div>
                <div className="about__des">Доставка за час или пицца бесплатно*. </div>
                <div className="about__des">*Действует только в зелёной зоне.</div> <br/>
                <div className="about__des">Часы работы:</div>
                <div className="about__des">ВС-ЧТ: 11:00 - 23:00</div>
                <div className="about__des">ПТ-СБ: 11:00 - 1:00</div>
            </div>
        </div>
    )
}

export default About;