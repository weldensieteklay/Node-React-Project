
import "./cart.css"
const CartItem = ({item})=>{

    return(
    <>
     <div className="cartContainer">
     <div className="cartItem">
        <span className="item-name">{item.name} </span>
        <span className="item-price">{item.price}</span>
        <span className="item-quantity">{item.productQuantity}</span>
        </div>
    </div>
    </>
    )
}

export default CartItem;