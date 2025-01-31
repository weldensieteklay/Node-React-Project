// import { useState } from "react";
// import axios from "axios";
// import OrderCart from "./OrderCart";
// const Receipts = () => {
//   const [orders, setOrders] = useState();
//   const getOrdersHandler = async () => {
//     const response = await axios.get(`http://localhost:5000/orders`);
//     console.log(response.data, "respo");
//     setOrders(response.data);
//   };

//   return (
//     <>
//       <ul>
//         {orders?.map((order) => (
//           <OrderCart key={order} order={order} />
//         ))}
//         <button onClick={getOrdersHandler}>get orders</button>
//       </ul>
//     </>
//   );
// };

// export default Receipts;
