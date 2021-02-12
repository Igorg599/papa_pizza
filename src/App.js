import React from 'react';

import {Header, Footer} from './components';
import {Home, Cart, Combo, Drink, Sauce, Snacks, Hour, About, Condition, Politics, Offer, Money, Stock} from './pages';
import {Route} from 'react-router-dom';


function App() {
  return(
    <>
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" component={Home} exact/>
          <Route path="/cart" component={Cart} exact/>
          <Route path="/combo" component={Combo} exact/>
          <Route path="/drink" component={Drink} exact/>
          <Route path="/sauce" component={Sauce} exact/>
          <Route path="/stock" component={Stock} exact/>
          <Route path="/snacks" component={Snacks} exact/>
          <Route path="/hour" component={Hour} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/condition" component={Condition} exact/>
          <Route path="/politics" component={Politics} exact/>
          <Route path="/offer" component={Offer} exact/>
          <Route path="/money" component={Money} exact/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App;

