import { useDispatch } from "react-redux"
import { BagActions } from "../store/BagSlice";

import { useNavigate } from "react-router-dom";

const HomeItem=({item})=>{
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleClick=()=>{
      dispatch(BagActions.addToBag(item));
  }
 
  return <>
  <div className="item-container">
      <img className="item-image" src={item.image}  alt="item image"/>
      <div className="card-container">
      <div className="rating">
          {item.rating_stars} ⭐
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={handleClick}>Add to Bag</button>
      </div>
      
    </div>
  
  </>
 
  
}

export default HomeItem;