import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home=()=>{
  const navigate=useNavigate();
  const items=useSelector(store =>store.items);
  const category=useSelector(store=>store.category);
  const userArr=useSelector((store)=>store.activeUser);
  let finalItems=[]
  if(category.length!==0){
    finalItems=items.filter((item) => item.category===category);
  }else{
    finalItems=items;
  }
useEffect(()=>{
  if(userArr.length===0){
    navigate("/login")
  }
},[userArr,navigate])
  
 return <>
  <div className="items-container">
    {finalItems.map((item)=>{
        return <HomeItem key={item.id} item={item}/>
    })}
    </div>
 </>

}
export default Home;