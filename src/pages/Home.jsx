import React from 'react';
import { Categories} from '../components';


const categoryNames = ['Комбо','Напитки','Горячие закуски','Соусы к пицце'];

function Home() {

  return (
    <div className="container">
        <div className="content__top">
          <Categories items={categoryNames}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
    </div>
  )
}

export default Home;
