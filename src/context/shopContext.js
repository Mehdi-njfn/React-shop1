import { createContext } from "react";
import {useCart} from "../hooks/useCart";


export const ShopContext = createContext({
  cartItems: null,
  add:()=>{},
  remove:()=>{},
  resetCart:()=>{},
})

export const ShopCnotaxtProvider = (props)=>{
  return (<ShopContext.Provider value={useCart()}>{props.children}</ShopContext.Provider>)
}

