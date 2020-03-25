import React, { useContext, useState } from "react";
import pill from "../image/pill.png";
import { GlobalContext } from "../context/GlobalState";
import Modal from 'react-modal';

const Item = ({ item }) => {
  const { favor, addFavor, delFavor, addCart } = useContext(GlobalContext);
  
  const[modalIsOpen, setIsOpen] = useState(false)

  function openModal(){
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false)
  }

  return (
    <div className="Item">
      <div className="Item__info">
        <div className="Item__name" onClick={openModal}>
          
          {item.name}</div>
        <div className="Item__price">
          <span>$ </span>
          {item.price}
          <i className="material-icons Item__add" onClick={() => addCart(item)}>
            add_shopping_cart
          </i>
          
        </div>
      </div>
      <div className="Item__image">
        <img src={pill} alt="nophoto"></img>
        <i
          className="material-icons Item__favorite"
          onClick={() => addFavor(item.id)}
        >
          favorite_border
        </i>
        <i
          className="material-icons Item__favorite like"
          onClick={() => delFavor(item.id)}
          style={{ display: favor.includes(item.id) ? `block` : `none` }}
        >
          favorite
        </i>
      </div>
      <Modal
          className = "Modal "
          overlayClassName="Overlay"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Item">
            <div className="Modal__Item">
              <div className="Cart__Header"> 
              <div className="back" onClick={closeModal}> 
                <i className="material-icons">keyboard_backspace</i>
               
               </div>
               <div className="Modal__Image">
                  <img src={pill} alt="nophoto"></img>
                </div>
               </div>
              
              <div className="Modal__Info">
                <div className="Modal__Name">{item.name}</div>
                <div className="Modal__Price">$ {item.price}</div>
                <span>About Products</span>
                <div className="Modal__About">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div> 
              </div>
              <button className="Modal__AddButton" onClick={()=>addCart(item)}>
                <div>Add to cart 
              <i className="material-icons Item__add" onClick={() => addCart(item)}>
            add_shopping_cart
          </i>
          </div>
          
              </button>
              </div>
            </Modal>
    </div>
  );
};

export default Item;
