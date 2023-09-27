import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        addtCoCart:(state,action)=>{
            const e=action.payload.attributes;
            const curItem=e?{
                
                    title:e.title,
                    key:e.key,
                    image:e.image.data.attributes.url,
                    price:e.price,
                

            }:action.payload;
            
            
            const index=state.cart.findIndex(item=>item.key===curItem.key);
            if(index===-1){
                state.cart.push({...curItem,quantity:1});
            }
            else{
                state.cart[index].quantity+=1;
            }
        },
        removeFromCart:(state,action)=>{
            const curItem=action.payload.attributes || action.payload;

            const index=state.cart.findIndex(item=>item.key===curItem.key);
            if(index!==-1){
            if(state.cart[index].quantity===1){
                state.cart=state.cart.filter(item => item.key !==curItem.key);
            }
            else{
                state.cart[index].quantity-=1;
            }
        }
        },
        removeAll:(state,action)=>{
            const curItem=action.payload;
            const index=state.cart.findIndex(item=>item.key===curItem.key);
            if(index!==-1)state.cart=state.cart.filter(item => item.key !==curItem.key);
        }
    }
})

export default cartSlice.reducer;
export const{addtCoCart,removeFromCart,removeAll}=cartSlice.actions;