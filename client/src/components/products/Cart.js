// import React from 'react';
// const Cart = ({ cart }) => {
//   return (
//     <div>
//       <h1>Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <table border="1" style={{width: '100%', marginTop: '0px'}}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item._id}>
//                 <td>{item.name}</td>
//                 <td>${item.price}</td>
//                 <td>{item.quantity}</td>
//                 <td>${item.price * item.quantity }</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };
// export default Cart;
// // Cart.js
// import React from 'react';
// import './Cart.css';

// const Cart = ({ items, total, onRemoveItem, onUpdateQuantity }) => {
//     return (
//         <div className="cart-container">
//             <h2>Your Cart</h2>
//             <ul className="cart-items">
//                 {items.map(item => (
//                     <li key={item.id} className="cart-item">
//                         <img src={item.image} alt={item.name} className="item-image" />
//                         <div className="item-details">
//                             <div className="item-name">{item.name}</div>
//                             <div className="item-price">${item.price.toFixed(2)}</div>
//                             <div className="item-quantity">
//                                 <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
//                                 <span>{item.quantity}</span>
//                                 <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
//                             </div>
//                             <button className="remove-button" onClick={() => onRemoveItem(item.id)}>Remove</button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//             <div className="cart-total">
//                 <strong>Total: </strong>${total.toFixed(2)}
//             </div>
//             <button className="checkout-button">Checkout</button>
//         </div>
//     );
// };

// export default Cart;