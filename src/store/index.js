import {configureStore} from "@reduxjs/toolkit";
import BagSlice from "./BagSlice";
import ItemSlice from "./itemsSlice";
import ActiveUserSlice from "./activeUserSlice"
import UsersSlice from "./usersSlice"
import categorySlice from "./activeCategory";

const EcommStore=configureStore({
    reducer:{
        items:ItemSlice.reducer,
        bag:BagSlice.reducer,
        activeUser:ActiveUserSlice.reducer,
        users:UsersSlice.reducer,
        category:categorySlice.reducer,
    }
});



export default EcommStore;