import React from 'react'
import { connect } from  'react-redux'
import { Link } from 'react-router-dom';

const sort = items => {
  return items.sort((a, b) => {
    if (a.id !== b.id) {
      return a.id - b.id;
    }
  });
};

function Cart(props) {
  console.log(props)
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            sort(props.cart).map(item => <tr key={item.id}>
              <td>{ item.title }</td>
              <td>{ item.count }</td>
              <td>
                <button
                  onClick={(e) => props.addToCart(item)}
                  >+</button>
                <button
                  onClick={(e) => props.removeFromCart(item)}
                  >-</button>
              </td>
              <td>
                <button
                  onClick={(e) => props.removeAllFromCart(item)}
                  >Remove from cart</button>
                  </td>
          </tr>)
          }
          </tbody>
        </table>
        <div>
          <Link to="/checkout"><button >checkout</button></Link>
        </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
