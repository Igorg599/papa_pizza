import React from 'react';

import {Header} from './components';
import {Home, Cart, Combo, Drink, Sauce, Snacks, Hour} from './pages';
import {Route} from 'react-router-dom';


function App() {
  return(
    <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" component={Home} exact/>
          <Route path="/cart" component={Cart} exact/>
          <Route path="/combo" component={Combo} exact/>
          <Route path="/drink" component={Drink} exact/>
          <Route path="/sauce" component={Sauce} exact/>
          <Route path="/snacks" component={Snacks} exact/>
          <Route path="/hour" component={Hour} exact/>
        </div>
    </div>
  )
}

export default App;

