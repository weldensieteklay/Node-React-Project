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
];

export default routesConfig;
