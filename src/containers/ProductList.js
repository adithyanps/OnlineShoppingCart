import React , {Component} from 'react';
import Product from '../components/Product/Product'
import Title from '../components/Product/Title'
import { ProductConsumer } from '../components/Context/Context';


class ProductList extends Component {

  render(){
    return(
      <React.Fragment>
        <div className="py-5">
          <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer >
                  {(data)=>{return data.products.map(product => {
                    return <Product
                              key={product.id}
                              product={product} />
                  })}}
                </ProductConsumer>
              </div>
          </div>
        </div>
      </React.Fragment>
      // <Product />

    )
  }
}
export default ProductList
