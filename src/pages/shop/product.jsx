import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";



const Product = (props) => {
  const {id, productImg, productName, price}= props.data;
  
  const {cartItems, add, remove} = useContext(ShopContext);
  const isOnCard = cartItems?.some((item)=> item.id === id) 
  return ( 
  <>
    <div className="col-3">
      <img src={productImg} className="w-100" alt="" />
      <h5>{productName}</h5>
      <p>price : {price}$</p>
      <button onClick={()=>{add(id)}} className="btn btn-info btn-sm">+</button>
      <span className="mx-1">{cartItems?.filter((row)=> row.id === id)[0]?.count}</span>
      {isOnCard && <button onClick={()=>{remove(id)}} className="btn btn-info btn-sm">-</button>
      }</div>
  </>
   );
}
 
export default Product;