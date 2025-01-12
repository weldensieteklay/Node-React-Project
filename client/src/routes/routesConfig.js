
import ListProducts from '../components/products/ListProducts';
import AddProducts from '../components/products/AddProducts';
const routesConfig = [
 
    {
        path: '/add-product',
        component: AddProducts,
        label: 'Add Product',
        group: ['Products']
    },
    {
        path: '/list-products',
        component: ListProducts,
        label: 'List of Products',
        group: ['Products']
    },
   
];

export default routesConfig;