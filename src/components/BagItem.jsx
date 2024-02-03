import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { BagActions } from "../store/BagSlice";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const BagItem=({item})=>{
  
 const dispatch=useDispatch();
  const handleSub=()=>{
  dispatch(BagActions.decreaseItemCount(item.id))
  }

  const handleAdd=()=>{
    dispatch(BagActions.addToBag(item))
  }

  const DeleteItem=()=>{
    dispatch(BagActions.removeFromBag(item.id))
  }
    return <>
    <div className="bag-item-container">
      <img className="bag-item-img" src={item.image}/>
    <div className="item-right-part">
      <div className="company">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.return_period} days</span> return available
      </div>
    </div>
    <div className="quantity">
      <IoMdAdd className="sign" onClick={handleAdd}/>
      <h1>{item.quantity}</h1>
      <RiSubtractFill className="sign" onClick={handleSub}/>
    </div>
    <div className="remove-from-cart" onClick={DeleteItem}><MdDelete /></div>
  </div>
    </>
}
export default BagItem;