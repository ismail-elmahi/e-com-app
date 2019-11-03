import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import {ProductConsumer} from '../Context';


class ProductList extends Component {
     
    render() {
        
        return (
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"/>
                    <div className="row">
                        <ProductConsumer>
                            {/* here we recived the state (products) from context */}
                            {value =>{
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default ProductList;