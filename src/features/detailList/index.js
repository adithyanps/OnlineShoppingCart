import React, { Component } from 'react'
import { connect } from  'react-redux'
import { Link } from 'react-router-dom';
import {Button} from '../../components/UI/css/Button/Button';

class Detail extends Component{
  render(){
    console.log("ooooo",this.props)
    const {id,image,brand,model,price,count,information} = this.props.choosed
    console.log(brand)
    return(
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{brand}</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 ">
            <img src={image} className="img-fluid" alt="product" />
          </div>
          {/* product text */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h1>Model: {model}</h1>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by :<span className="text-uppercase">{brand}</span>
            </h4>
            <h4 className="text-blue">
              <strong>price:<span>$</span>{price}</strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-2">information about product :</p>
            <p className="text-muted lead">{information}</p>
            {/*buttons*/}
            <div>
              <Link to="/">
                <Button>back to products</Button>
              </Link>
              <Link to="/checkout">
                <Button>Buy now</Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(this.item)
  return {
    cart: state.cart,
    products:state.products,
    choosed:state.choosed
  }
}

function mapDispatchToProps(dispatch) {
  return {

    detailItem: (item) => {
      dispatch({ type: 'SELECTED', payload: item })
    },
    loadProducts: (products) => {
      console.log(products)
      dispatch({type: 'LOAD',payload:products})
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail)
