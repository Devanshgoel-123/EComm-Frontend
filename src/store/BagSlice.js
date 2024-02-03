import { createSlice } from "@reduxjs/toolkit";


const BagSlice=createSlice({
    name:"bag",
    initialState:[],
    reducers:{
     addToBag:(state,action)=>{
         const existingItemIndex=state.findIndex((item)=>item.id===action.payload.id )
         if(existingItemIndex !==-1){
            const newState=state.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          return newState
         }else{
            return[...state,{...action.payload,quantity:1}]
            }         
     },
     removeFromBag:(state,action)=>{
      const newState=state.filter(item=> item.id!=action.payload);
      return newState; 
     },
     decreaseItemCount:(state,action)=>{
        const newState=state.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity -1 }
              : item
          );
          return newState
     },
     emptyBag:(state)=>{
        const newState=[]
        return newState;
     }
    }
})
export const BagActions=BagSlice.actions;
export default BagSlice;