import React , {Component } from 'react'
import { connect } from 'react-redux';
import Detail from '../features/detailList/';

class Details extends Component {
  render(){
    console.log(this)
    // console.log()
      // {this.props.products.map(value=>value.id === id) ? (<p>hello</p>) : (<p>theer</p>)}
    return(
      <div>hello from Detail
      <Detail />
      </div>

    )
  }
}
const mapStateToProps=(state,ownProps)=> {
  let id = ownProps.match.params.post_id;
  console.log(state)
  return {
    post:state.products.find(post => post.id === id),
    cart:state.cart,
    products:state.products,
  }
}


export default connect(mapStateToProps)(Details);
