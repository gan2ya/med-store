import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import base from '../baseData/data.js';
import CartItem from './CartItem';
import CartHeader from './CartHeader'


const Cart = () => {
    const {cart} = useContext(GlobalContext);
    
    const amount = cart.reduce(
        (ac, item)=> 
        (Number.parseFloat(ac)+Number.parseFloat(item.num*base.find(e=>e.id===item.id).price)).toFixed(2),
         0);
    return (
        
        <div className="Cart">
        
         <CartHeader /> 
            <ul className='cart_list'>
            <li className='cart_list__header cart_list__item'>
            <div className="cart_list__header cart_list__name">Name</div>
            <div className="cart_list__header cart_list__price">Price</div>
            <div className="cart_list__header cart_list__number">Number</div>
            <div className="cart_list__header cart_list__amount">Amount</div>
            </li>
                {cart.map(cart_item=><CartItem item={cart_item}/>)}
                
            <li className='cart_list__total cart_list__item'>
                <div className="cart_list__name">Total</div>
                
                <div className="cart_list__amount">$ {amount} </div>
            </li>
            </ul>
        </div>
        
    );
}

export default Cart;
