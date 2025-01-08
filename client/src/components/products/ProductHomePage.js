import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import ListProducts from "./ListProducts"

const ProductHomePage = ()=>{
    const isCartShow=useSelector(state=>state.cart.showCart)
  const cartItems = useSelector(state=>state.cart.items)
let cartData;
if(cartItems.length == 0 ){
    cartData = <p>you don't have items in the Cart</p>
    
}else{
cartData = <>
    <Cart/> 
    </>
}
    return(
        <div>
            { isCartShow && cartData}
            {!isCartShow  && <ListProducts/> } 
       
        </div>
    )
}

export default ProductHomePage;