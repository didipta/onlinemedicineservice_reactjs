import axios from "axios";
import React, {useState, useEffect} from "react";
const Productlist = (props)=>{
  let count=0;
  var img="/img/"+props.product.P_img;
   if (props.categorie.Id == props.product.P_categorie_id)
    {
        if (++count == 8)
        {
            return (false);
        }
        else
        {
            return(
                <>
                <div class="best-item">
                        <a href={"/Product/Addtocart/"+props.product.Id}>
                            <img src={img} alt=""/>
                            <h3>{props.product.P_name}</h3>
                            <h2>৳-{props.product.P_price}</h2>
                        </a>
                    </div>
                
                </>
            
            );
        }
            
   }
   else
   {
       return(
           <></>
       );

   }
   
      
  

  


}
export default Productlist;
