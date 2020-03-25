import React, {useContext} from 'react';
import base from '../baseData/data';
import Item from './Item';
import {GlobalContext} from '../context/GlobalState';



const Favorite = ({closeModal}) => {
    const { favor}= useContext(GlobalContext);
    return (
        <div className='Favorite'>
            <div className="Cart__Header"> 
             <div className="back" onClick={closeModal}> 
                <i className="material-icons">keyboard_backspace</i>
               </div>
                <span>Favorites</span>
               </div>
            
            <div className="Favorite__List">
            {favor.map((i)=>(
            <Item item={base.find(base_item=>base_item.id===i)}  />
            ))}
             
        </div>
        <div className='favor_list__total '>
                <div className="cart_list__name">Total</div>
                <div className="cart_list__amount"> {favor.length} Items </div>
            </div>
        </div>
    );
}

export default Favorite;
