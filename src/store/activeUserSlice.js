import { createSlice } from "@reduxjs/toolkit";


const activeUserSlice=createSlice({
    name:"activeUser",
    initialState:[],
    reducers:{
        setActiveUser:(state,action)=>{
            const user=action.payload;
            return user;
        },
    },
});

export const UserActions=activeUserSlice.actions;
export default activeUserSlice;