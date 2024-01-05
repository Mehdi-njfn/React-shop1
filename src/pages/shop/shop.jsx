import {PRODUCTS} from '../../data/product';
import Product from './product';



const Shop = () => {
  return (
    <>
      <h1>Shop</h1>
      <div  className="row w-100">
        {PRODUCTS.map((productData)=>{
          return <Product key={productData.id} data={productData}/>
        })}
      </div>
    </>
  );
}
export default Shop;