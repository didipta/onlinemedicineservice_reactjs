import React from "react";
import { Link } from "react-router-dom";
function Productitem(props) {
    var id=props.Product.Id;
    var img="/img/"+props.Product.P_img;
   return(
  <>
        
        <div class="best-item">
        <a href={"/Product/Addtocart/"+id}>
            <img src={img} alt=""/>
            <h3>{props.Product.P_name}</h3>
            <h2>৳-{props.Product.P_price}</h2>
        </a>
    </div>

    
  </>
   );
    
}

export default Productitem;