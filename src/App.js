import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Layout from './containers/layout/layout.component'
import BurgerBuilder from './containers/buger-builder/burger-builder.component';
import Checkout from './containers/checkout/checkout.component'
import Orders from './containers/orders/orders.component'
import ContactData from "./containers/checkout/contact-data/contact-data.component";

function App() {
  return (
    <div>
      <Layout>
          <Route exact path="/" component={BurgerBuilder} /> 
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout/contact-data" component={ContactData} />
      </Layout>
    </div>
  );
}

export default App;
