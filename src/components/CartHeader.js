import React from 'react';
import {Link} from 'react-router-dom';

function CartHeader() {
    return (
        <div>
            <div className="Cart__Header"> 
            <Link to='/'> <div className="back"> 
                <i className="material-icons">keyboard_backspace</i>
               </div>
            </Link>
            <span>Cart</span>
            </div>
            
        </div>
    )
}

export default CartHeader
