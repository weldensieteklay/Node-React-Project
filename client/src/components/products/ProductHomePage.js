import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import ListProducts from "./ListProducts";
import { useState } from "react";
import OrderCart from "../cart/OrderCart";
const ProductHomePage = () => {
  const [currentPage, setCurrentPage] = useState("products");
  const isCartShow = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.items);
  const navigateToOrders = () => setCurrentPage("orders");
  const navigateToProducts = () => setCurrentPage("products");
  const userId = "64a7c3e8b4e2f4531dabc123";
  let cartData;
  if (cartItems.length === 0) {
    cartData = <p>you don't have items in the Cart</p>;
  } else {
    cartData = (
      <>
        <Cart />
      </>
    );
  }
  return (
    <div>
      {currentPage === "products" && (
        <>
          {isCartShow && cartData}
          {!isCartShow && <ListProducts navigateToOrders={navigateToOrders} />}
        </>
      )}
      {currentPage === "orders" && (
        <OrderCart userId={userId} navigateToProducts={navigateToProducts} />
      )}
    </div>
  );
};

export default ProductHomePage;
