import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { BagActions } from "../store/BagSlice";

const bagSummary=()=>{
   const dispatch=useDispatch();
    const BagItems=useSelector(store=>store.bag);
    
    const emailElement=useRef();
    const cardNumberElement=useRef();
    const expiryDateElement=useRef();
    const cardNameElement=useRef();
    const cardCvvElement=useRef();
    const addressElement=useRef();
    let totalMrp=0;
    let totalDiscount=0;
  

    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:3000/orders",{
        email:emailElement.current.value,
        cardNumber:cardNumberElement.current.value,
        expiry:expiryDateElement.current.value,
        cardHolderName:cardNameElement.current.value,
        cvv:cardCvvElement.current.value,
        address:addressElement.current.value,
        orderValue:totalMrp-totalDiscount,
        bagItems:BagItems
      })
      .then((response)=>{
        
         console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
      // emailElement.current=""
      // cardNumberElement.current.value=""
      // expiryDateElement.current.value=""
      // cardNameElement.current.value=""
      // cardCvvElement.current.value=""
      // addressElement.current.value=""
      dispatch(BagActions.emptyBag())
    }

    
    BagItems.map((item)=>{
       totalMrp+=(item.original_price)*item.quantity;
       totalDiscount+=(item.original_price-item.current_price)*item.quantity;
    })

    const finalPrice=totalMrp-totalDiscount;

    return  <Form className="bag-Summary" onSubmit={handleSubmit}>
    <h2 className="summary-head">Payment Details</h2>
    <p className="summary-head-text">
      Complete your purchase item by providng your payment details order.
    </p>
    <div className="billingInputs">
    <label className="input-heading">Email Address</label>
    <input type="email" placeholder="@   devanshgoel@gmail.com" className="inputField" ref={emailElement}></input>
   </div>
   <div className="billingInputs">
    <label className="input-heading">Card Detail</label>
    <div className="billingDetails">
    <input type="text" placeholder="Card Number" className="inputField" name="cardNumber" ref={cardNumberElement}></input>
    <input type="month" placeholder="MM/YY"  className="inputField" name="month" ref={expiryDateElement}></input>
    <input type="number" placeholder="CVV" className="inputField" name="cvv" ref={cardCvvElement}></input>
    </div> 
    
   </div>
   <div className="billingInputs">
    <label className="input-heading">Card Holder</label>
    <input type="text" placeholder="Devansh Goel" className="inputField" name="name" ref={cardNameElement}></input>
   </div>
   <div className="billingInputs" >
   <label className="input-heading">Billing Address</label>
    <input type="text" placeholder="Ram Bhawan Bits Pilani 2130" className="inputField" name="address" ref={addressElement}></input>
   </div>
   <div  id="billing">
     <div className="billElement">
      <p>SubTotal </p>
      <p>{totalMrp}</p>
     </div>
     <div className="billElement">
     <p>Discount </p>
      <p>{totalDiscount}</p>
     </div>
     <div >
      <hr></hr>
     </div>
     <div className="billElement">
     <p>Total </p>
      <p>{finalPrice}</p>
     </div>
   </div>
   <div className="btnDiv">
   <button type="submit" className="orderBtn">Place Order</button>
   </div>
   
   </Form>
}
export default bagSummary;