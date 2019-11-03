import React from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';
const Cart = () => {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length > 0){
                        return(
                            <React.Fragment>
                                <Title name="your" title="cart"/>
                                <CartColumn />
                                <CartList value={value} />
                                <CartTotals value={value} />
                            </React.Fragment>
                        )
                    }else{
                        return(
                            <EmptyCart />
                        )
                    }
                }}
            </ProductConsumer>
        </section>
    );
};

export default Cart;