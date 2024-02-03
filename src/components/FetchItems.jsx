import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {ItemActions} from "../store/itemsSlice";
import { UsersActions } from "../store/usersSlice";
const FetchItems = () => {

  const [fetched, setFetched] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000");
        dispatch(ItemActions.addInitialItems(result.data.items));
        dispatch(UsersActions.setUsers(result.data.users));
        setFetched(true);
      } catch (error) {
        console.log(error);
      }
    };

    if (!fetched) {
      fetchData();
    }
  }, [fetched, dispatch]); // Include dispatch in the dependency array to fix eslint warning
};

export default FetchItems;
