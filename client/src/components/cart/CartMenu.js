import { FaShoppingCart } from 'react-icons/fa';
import { Button, Box } from '@mui/material';
import {cartActions} from '../store/CartSlice'
import { useSelector , useDispatch} from 'react-redux';
const CartMenu = ()=>{
  const dispatch= useDispatch()

const totalQuantity = useSelector(state=>state.cart.totalQuantityOfItems)
const showCartHandler=()=>{
  dispatch(cartActions.cartToggle())

}

    return(
        <Box>
          
        <Button onClick={showCartHandler} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                   <FaShoppingCart size={30} color='white'/>
                   <span style={{ marginLeft: '4px', color: 'white' }}>
                     {totalQuantity}
                   </span>
           </Button>
        </Box>
    )
}

export default CartMenu