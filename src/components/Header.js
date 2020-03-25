import React, {useState,useContext} from 'react';
import OptionsList from './OptionsList';
import Favorite from './Favorite';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import {GlobalContext} from '../context/GlobalState'

 

const Header = ({search, changeSearch}) => {
  const [search_item, setSearch_item] = useState(search);
  const onSubmit = e=>{
        e.preventDefault();
        
    }
  const{cart}=useContext(GlobalContext);
  
 
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

  const total = cart.reduce(
    ((ac, item)=> {return(ac+item.num)}),0);

  function searchItems(e){
    setSearch_item(e.target.value);
    changeSearch(e.target.value)
  }
    
    return (
        <div>
        <div className='Header' >
            <div className="Header__top">
            <div className="searchForm"> 
            <form onSubmit={onSubmit} >
                <input type="text" 
                    className = "searchForm__input"
                    placeholder={"Search"} 
                    title="search-item" 
                    value={search_item}
                    onChange={(e)=>searchItems(e)}>
                </input>
                <button className="searchForm__button" type="button"  onClick={onSubmit}> <i className="material-icons">search</i></button>
               
            </form>
            </div>
           <div className="Header__buttons">
                <div className="Header__button" onClick={openModal}> 
                    <i className="material-icons favorite">favorite</i>
                 </div>
               <div className="Header__button"> 
                <Link to='/cart'>
                    
                    </Link>
                    <i className="material-icons cart">shopping_cart</i>
                      <div className="num_cart">{total}</div>
                </div>
           </div>
            </div>
            
            <OptionsList />
            <div>
        
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Favorite Item"

        className="Modal Modal__favorite"
        overlayClassName="Overlay"
        
      >
          <Favorite closeModal={closeModal} />
         
      </Modal>
      </div>
        </div>
       
      </div>
    );
}

export default Header;
