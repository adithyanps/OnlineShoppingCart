import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { withRouter} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch , Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Navbar from './components/UI/Layout/Navbar';
import Home from './containers/Homepage';
import ProductList from './containers/ProductList';
import Details from './containers/Details';
import Cart from './containers/Cart';
import Default from './containers/Default';
import Checkout from './containers/Checkout';
import Authentication from './containers/Auth/Auth';
import Login from './containers/Auth/Login/Login'


class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar {...this.props}/>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/login" component={Login} />
          <Route component={Default} />
         </Switch>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App));
