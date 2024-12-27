import './product.css'
import { currencyFormater } from '../Utle/Formating';
import image from '../../Images/image_1734478409409.jpg'
const Product=({product})=>{


 return <>

        <li className='product'>
   <p>{product.name}</p>
        
<img className='image' src={image}  alt={product.name}/>

        
<h2>{currencyFormater.format(product.price)}</h2>

   </li>
      
    </>



}
export default Product;