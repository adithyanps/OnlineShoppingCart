import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart';
import CheckoutForm from './form';

function submitOrder(values, cart) {
  const { email, name } = values.Order


}
function Checkout(props) {
  console.log(props)
  const {cart} = props
  console.log(cart)
  return(
    <div>
      hello from checkout
      <div style = {{border : '1px solid black'}}>
        <CheckoutForm />
      </div>
    </div>
)

}
function mapStateToProps(state) {

  return {
    cart:state.cart
  }
}
export default connect(mapStateToProps)(Checkout);
