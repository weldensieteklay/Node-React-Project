import './product.css'
import { currencyFormater } from '../Utle/Formating';
import image from '../../Images/image_1734478409409.jpg'
const Product=({product, addToCart})=>{


 return <>
        <li className='product'>
   <p>{product.name}</p>
        
<img className='image' src={image}  alt={product.name}/>

        
<h2>{currencyFormater.format(product.price)}</h2>
    <button onClick={addToCart}>addToCart</button>
   </li>
      
    </>



}
export default Product;