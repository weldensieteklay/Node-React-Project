import OrderCart from "../components/cart/OrderCart";
import Receipts from "../components/cart/Receipts";
import AddProducts from "../components/products/AddProducts";
import ProductHomePage from "../components/products/ProductHomePage";
const routesConfig = [
  {
    path: "/add-product",
    component: AddProducts,
    label: "Add Product",
    group: ["Products"],
  },
  {
    path: "/list-products",
    component: ProductHomePage,
    label: "List of Products",
    group: ["Products"],
  },
  {
    path: "/orders",
    component: OrderCart,
    label: "Orders",
    group: ["Products"],
  },
  {
    path: "/userOrders",
    component: OrderCart,
    label: "Orders",
    group: ["Products"],
  },
];

export default routesConfig;
