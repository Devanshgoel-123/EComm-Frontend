import { useDispatch, useSelector } from "react-redux";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import {categoryActions} from "../store/activeCategory";
import { useRef } from "react";
import { useEffect } from "react";
const Navbar=()=>{
    const searchElement=useRef();
  
    // const userSearch=searchElement.current.value;

    const dispatch=useDispatch();
    const bagItems=useSelector((store)=>store.bag);
    const activeUser=useSelector((store)=>store.activeUser);
  
    const handleClick=(category)=>{
        dispatch(categoryActions.setCategory(category)) 
    }
    useEffect(() => {
        dispatch(categoryActions.setCategory(""));
      }, [dispatch]);
    
    const itemNumber=bagItems.length;
    return <>
    <div className="Navbar">
    
       <Link to="/" onClick={()=>handleClick("")}><IoHomeSharp /></Link>
        <ul style={{listStyle:"none"}}>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}}  onClick={()=>{handleClick("Electronics")}}>Electronics</li></Link>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}} onClick={()=>{handleClick("Clothing")}}>Clothing</li></Link>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}} onClick={()=>{handleClick("Health")}}>Health</li></Link>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}} onClick={()=>{handleClick("Grocery")}}>Grocery</li></Link>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}} onClick={()=>{handleClick("Toys")}} >Toys</li></Link>
        </ul>
        <div className="inputBox">
        <FaSearch/>
        <input name="search" placeholder="Search for a Products, Brands and More" ref={searchElement}></input>
        </div>
        
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"8%",height:"20px",alignItems:"center"}}>
            <Link to='/profile' style={{textDecoration:"none",color:"#000000",fontSize:"15px",marginRight:"20px"}}><FaUser /> {activeUser.userName}</Link>
            <Link to="/bag" style={{textDecoration:"none",color:"#000000"}}><FaBagShopping />  {itemNumber}</Link>
        </div>
    </div>
    </>
}
export default Navbar;