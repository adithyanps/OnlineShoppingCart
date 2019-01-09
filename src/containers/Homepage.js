import React , { Component } from 'react';
import ProductListing from '../features/productListing/';
import data from '../data/products.json';
import Title from '../components/Product/Title'
import axios from 'axios';
class Homepage extends Component {
  state= {
    items:[]
  }
  componentDidMount(){
    const {loadProducts} = this.props
    console.log(this.props)
    axios.get('http://localhost:8000/api/mobiles/').then(
      res => {
        this.setState({items:res.data});
        console.log(res.data)
      }
    )
    // this.loadItems()
    console.log("hello")
  }
    loadItems = () => {
      axios.get('http://localhost:8000/api/mobiles/').then(
        res => {
          this.setState({items:res.data});
          console.log(res.data)
        }
      )
    }
  render(){
    console.log(data)
    console.log(this.state.items)

    return(
        <ProductListing product={data} />
    )
  }
}
export default Homepage
