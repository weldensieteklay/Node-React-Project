import { cartActions } from "../store/CartSlice";
import { useDispatch } from "react-redux";
import "./product.css";
import { currencyFormater } from "../Utle/Formating";
import image from "../../Images/image_1734478409409.jpg";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addtocartHandler = () => {
    dispatch(
      cartActions.addingItemToCart({
        id: product._id,
        name: product.name,
        price: product.price,
      })
    );
  };

  return (
    <>
      <li className="product">
        <p>{product.name}</p>

        <img className="image" src={image} alt={product.name} />

        <h2>{currencyFormater.format(product.price)}</h2>
        <button onClick={() => addtocartHandler(product._id)}>
          Add to cart
        </button>
      </li>
    </>
  );
};
export default Product;
