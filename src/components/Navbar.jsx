import { useDispatch, useSelector } from "react-redux";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import {categoryActions} from "../store/activeCategory";
import { useRef, useState } from "react";
import { useEffect } from "react";
const Navbar=()=>{
    const searchElement=useRef();
    const [display,setDisplay]=useState(true)
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

    
    const handleDisplay=()=>{
        console.log(display)
        setDisplay(!display);
    }
    
    return <>
    <div className="Navbar">
    
       <Link to="/" onClick={()=>handleClick("")}><IoHomeSharp /></Link>
       <div id="categoryDiv">
       <button id="categoryBtn" onClick={handleDisplay}>Categories</button>
        <ul style={{listStyle:"none"}} className={`${display ? "inactive" :"active"}`}>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}}  onClick={()=>{handleClick("Electronics")}}>Electronics</li></Link>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}} onClick={()=>{handleClick("Clothing")}}>Clothing</li></Link>
            <Link to="/"><li style={{color:"#000000",textDecoration:"none"}} onClick={()=>{handleClick("Grocery")}}>Grocery</li></Link>
            
        </ul>
       </div>
        <div className="rightSection">
            <div className="userProfile">
            <button style={{color:"#ffffff",backgroundColor:"rgb(8, 81, 249)",borderRadius:"15px",height:"30px"}} >Wallet</button>
            <Link to="#" style={{textDecoration:"none",color:"#000000",fontSize:"15px"}}><FaUser /> {activeUser.userName}</Link>
            </div>
            <Link to="/bag"className="bagIcon" ><FaBagShopping />  {itemNumber}</Link>
        </div>
        <div className="inputBox">
        <FaSearch/>
        <input name="search" placeholder="Search for a Products, Brands and More" ref={searchElement}></input>
        </div>
        
        
    </div>
    </>
}
export default Navbar;