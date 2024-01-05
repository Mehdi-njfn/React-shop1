import { useContext } from 'react';
import {PRODUCTS} from '../../data/product';
import {ShopContext} from '../../context/shopContext'
import Product from '../shop/product';

const Cart = () => {
  const {cartItems, resetCart} = useContext(ShopContext);
  return (
    <>
      <h2>card page</h2>
      <div className="row">
        {PRODUCTS.map((p)=>{
            if( cartItems?.some((i)=>i.id ===p.id && i.count > 0))
            return <Product key={p.id} data={p}/>
          })}
      </div>
      <button className='btn btn-danger m-3' onClick={resetCart}>reset cart</button>
    </>
  );
}
 
export default Cart;