import { useEffect, useState} from 'react';
import axios from 'axios';
import Product from './Product'

import './product.css'
const data = [
  {
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
  },
  {
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
}
]
const ListProducts= ()=>{

  const [products, setProducts]=useState(data)
 
   

       

   return <div>

   <ul className='listItems'>
    
       {products.length>0 && products.map((product)=><Product  key={product._id} product={product} 
       
       />)}
     
       
   </ul>
   
   </div>
      
    

}


export default ListProducts;