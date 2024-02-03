import { createSlice } from "@reduxjs/toolkit";

const UsersSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        setUsers:(state,action)=>{
            const newState=[...state,action.payload]
           
            return newState;
        }
    }
})

export const UsersActions=UsersSlice.actions;
export default UsersSlice;