import React, {useContext} from 'react';
import base from '../baseData/data.js';
import {GlobalContext} from '../context/GlobalState';
import {Link} from 'react-router-dom';

const CartItem = ({item}) => {
    const name=base.find(e=>e.id===item.id).name;
    const price=base.find(e=>e.id===item.id).price;
    const amount=(price*item.num).toFixed(2);
    const {addCart,  delCartItem} = useContext(GlobalContext);
    return (
        <li className='cart_list__item'>
          <div className="cart_list__name"><Link to=''>{name}</Link></div>
          <div className="cart_list__price">$ {price}</div>
          <div className="cart_list__number"><button className="minus" onClick={()=>delCartItem(item)}>-</button>
           <span>{item.num}</span>  
           <button className="plus" onClick={()=>addCart(item)}>+</button>
           </div>
           <div className="cart_list__amount">$ {amount}</div>

        </li>
    );
}

export default CartItem;
