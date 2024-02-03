// activeCategory.js

import { createSlice } from "@reduxjs/toolkit";


const categorySlice=createSlice({
    name:"category",
    initialState:[],
    reducers:{
        setCategory:(state,action)=>{
            const category=action.payload;
            return category;
        },
    },
});

export const categoryActions=categorySlice.actions;
export default categorySlice;