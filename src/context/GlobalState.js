import React, { useReducer, createContext} from "react";

const initialState = {
  favor: [1],
  cart:[{"id":1,"name":"Aspirin","type":"medicines","num":2},
  {"id":2,"name":"Citramone","type":"medicines","num":2}],
  
  
};

function compare(a,b){
  const id_a = a.id;
  const id_b = b.id;
  let comparison=0;
  if(id_a>id_b){
    comparison=1;
  } else if (id_b>id_a){
    comparison=-1;
  }
  return comparison
}

const AppReducer=(state,action)=>{
  switch(action.type){
    case 'ADD_FAVOR':
      return{
        ...state,
        favor:[action.payload, ...state.favor]
      }
    case 'DEL_FAVOR':
      return{
        ...state,
        favor: state.favor.filter(item=>item!==action.payload)

      }
    case 'ADD_CART':
      return{
        ...state,
        cart: (state.cart.filter(e=>e.id===action.payload.id).length>0)?
         [...state.cart.filter(cart_item=>action.payload.id!==cart_item.id), {id:action.payload.id, name: action.payload.name, type: action.payload.type, num:state.cart.find(e=>e.id===action.payload.id).num+1} ].sort(compare):
         [...state.cart,{ id:action.payload.id, type: action.payload.type, name:action.payload.name, num:1}].sort(compare)


      }

      case 'DEL_CART_ITEM':
        return{
          ...state,
          cart: (state.cart.find(e=>e.id===action.payload.id).num>1)?
           [...state.cart.filter(cart_item=>action.payload.id!==cart_item.id), {id:action.payload.id, name: action.payload.name, type: action.payload.type, num:state.cart.find(e=>e.id===action.payload.id).num-1} ].sort(compare):
           state.cart.filter(item=>item.id!==action.payload.id).sort(compare)
  
  
        }

      default:
        return state
  }
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  

// Cart
function addCart(item) {
  dispatch({
    type:'ADD_CART',
    payload: item
  });
}
function delCartItem(item) {
  dispatch({
    type:'DEL_CART_ITEM',
    payload: item
  });
}


// Favorite
  function addFavor(id) {
    dispatch({
      type:'ADD_FAVOR',
      payload: id
    });
  }

  function delFavor(id){
    dispatch({
      type: 'DEL_FAVOR',
      payload: id
    });
  }



  return (
    <GlobalContext.Provider
      value={{
        favor: state.favor,
        addFavor,
        delFavor,
        cart: state.cart,
        addCart,
        delCartItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
