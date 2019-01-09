import React , { Component } from 'react';
import ProductListItem from './productListItem';
import Title from '../../components/Product/Title'
// import cartItemsWithQuantities from '../cart'
import { connect } from 'react-redux';
import axios from 'axios';
import FetchApi from '../../modules/fetchApi';

class ProductListing extends Component {
  state={
    items:[]
  }
  componentDidMount(){
    const {loadProducts} =this.props
    // const {products} =this.props
    //
    console.log(loadProducts)

    console.log(this.props)
    axios.get('http://localhost:8000/api/mobiles/').then(
      (response)=>{loadProducts(response.data)}
    )
    // FetchApi('get','http://localhost:8000/api/mobiles/?format=json').then(
    //   (json)=>{
    //     loadProducts(json)
    //   }
    // )
  }
  detailItem(id){
    // console.log(product)
    console.log(id)

  }
  render(){
     console.log(this.props.products)
    // console.log(this.props.cart,"+++++")

    return(
      <div className="py-5">
        <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              {this.props.products.map(prdct =>
                  <ProductListItem
                    key={prdct.id}
                    product={prdct}
                    addToCart={this.props.addToCart}
                    removeFromCart = {this.props.removeFromCart}
                    cartItem={this.props.cart.filter(cartItem => cartItem.id === prdct.id)[0]}
                    detailItem={this.props.detailItem}
                  />
              )}
            </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    cart:state.cart,
    products:state.products,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadProducts: (products) => {
      console.log(products)
      dispatch({type: 'LOAD',payload:products})
    },
    addToCart: (item) => {
      // console.log(item)
      dispatch({type:'ADD',payload: item})
    },
    removeFromCart: (item) => {
      console.log(item)

      dispatch({type:'REMOVE' , payload:item})
    },
    detailItem: (item) => {
      console.log(item)
      dispatch({type:'SELECTED',payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing);
