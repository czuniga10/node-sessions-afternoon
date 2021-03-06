import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/Checkout';
import Register from './components/Login/Login';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Shop } path="/shop" />
    <Route component={ Checkout } path="/checkout" />
    <Route component={ Register } path="/register" />

  </Switch>
)