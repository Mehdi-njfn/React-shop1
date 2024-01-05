import { createContext, useState } from "react";

export const Shopcontext = createContext(null);

export const ShopCnotaxtProvider = (props) =>{
  const [cartItems, setCartitems] = useState([]);

  const add = (itemId) =>{
    if(!cartItems?.find((i)=> i.id === itemId))
      setCartitems([...cartItems, {id: itemId, count : 1}]);
    else setCartitems(cartItems.map((i)=>{
      if(i.id === itemId)
        return {...i, count : i.count +1}
      else return i;
    }))
    console.log(cartItems);
  }
  const remove = (itemId) =>{
    setCartitems(cartItems.map((item)=>{
      if(item.id === itemId)
        return {...item, count:item.count === 0 ? 0 : item.count -1};
      else return item;
    }))
  }
  const contextValue = {cartItems, add, remove}
  return <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>
}