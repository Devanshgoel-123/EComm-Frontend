import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/bagSummary";
const Bag=()=>{
    const BagItems=useSelector(store=>store.bag);
    
    return <>
    <main>
         <div className="bag-page">
          
         <div className="bag-items-container">
          <h2 className="summary-head">Summary Order</h2>
          <p className="summary-head-text">
            Check your item and select your shipping for better experience order item.
          </p>
            {BagItems.map((item) =>{
                return <>
                <BagItem item={item} key={item.id}/>
                </>
            })
           }
         </div>
       <BagSummary/>
       </div>
    </main>
    
    </> 
}
export default Bag;