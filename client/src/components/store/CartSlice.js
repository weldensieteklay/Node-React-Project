import {createSlice} from '@reduxjs/toolkit'


const CartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantityOfItems:0,
    },
    reducers:{
        addingItemToCart(state,action){
            state.totalQuantityOfItems++

            const newItem=action.payload;
            const existItem=state.items.find(item=> item.id === newItem.id)
            if(!existItem){
                state.items.push({
                    id:newItem.id,
                     name:newItem.name,
                     price: newItem.price,
                     quantity:1
                     
                 })

            }else{
              existItem.quantity++  
            }

        },
       
    }
})

const cartActions=CartSlice.actions;
export default CartSlice;