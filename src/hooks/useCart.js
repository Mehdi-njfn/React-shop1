import { useEffect, useState } from "react";



export const useCart = () => {
  const [cartItems, setCartitems]=useState();

  useEffect(()=>{
    const data = localStorage.getItem('cart');
    setCartitems(!!JSON.parse(data) ? JSON.parse(data) : []);
  },[])

  useEffect(()=>{
    if(cartItems !== undefined)
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const resetCart=()=>{
    setCartitems();
    localStorage.removeItem('cart');
    localStorage.clear();
  }
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
  return {cartItems, add, remove, resetCart}
}
 