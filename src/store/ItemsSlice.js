import { createSlice } from "@reduxjs/toolkit";

const ItemSlice=createSlice({
    name:"items",
    initialState:[],
    reducers:{
     addInitialItems:(state,action)=>{
         state=action.payload;
         return state;
     }
    }
})

export const ItemActions=ItemSlice.actions;
export default ItemSlice;
