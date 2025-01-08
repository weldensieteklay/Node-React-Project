import CartItems from "./CartItems";
import { useSelector} from 'react-redux';
const Cart = ()=>{

    return (
        <div className="cart">
        <CartItems/>
        </div>
    )
}

export default Cart;


