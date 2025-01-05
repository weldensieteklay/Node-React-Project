
import CartItems from '../components/cart/CartItems';
import ListProducts from '../components/products/ListProducts';
// import CartItems from '../components/cart/CartItems';
const routesConfig = [
 
    {
        path: '/product',
        component: ListProducts,
        label: 'Product',
        group: ['ListProducts']
    },
    {
        path: '/cart',
        component: CartItems,
        label: 'Cart',
        group: ['ListProducts']
    },
 
];

export default routesConfig;