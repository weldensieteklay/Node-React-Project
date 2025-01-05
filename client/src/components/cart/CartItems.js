import React from 'react';
import CartItem from "./CartItem"
const cartItems = [{
    
        "_id": "67683663032f19e05ba9aed3",
        "name": "Tomat",
        "price": 6,
        "image": "public\\imagesToLoad\\image_1734882915029.jpg",
        "productQuantity": 6,
        "__v": 0
    },
    {
        "_id": "676836d6032f19e05ba9aed8",
        "name": "hayle",
        "price": 23,
        "image": "public\\imagesToLoad\\image_1734883030897.jfif",
        "productQuantity": 26,
        "__v": 0
    },
    {
        "_id": "676836ff032f19e05ba9aedb",
        "name": "asmer",
        "price": 14,
        "image": "public\\imagesToLoad\\image_1734883071213.jpg",
        "productQuantity": 7,
        "__v": 0
  
}]
export const CartItems = () => {

  return (
    <div>
      <h1>Cart</h1>
     <ul className='cartItems' >
      {cartItems.map(item=><CartItem item={item}/>)}
     </ul>
    </div>
  );
};

export default CartItems ;
