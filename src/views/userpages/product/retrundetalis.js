import React, {useState, useEffect} from "react";
import '../../../css/orderpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";
const Retrundetailas = ()=>{
    
    var {id} =useParams();
   
    let url="https://localhost:44301/api/user/returdetailsall/"+id;
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
            console.log(resp.data);
            setproducts(resp.data);
        }).catch(err=>{
            
            window.location="/login";
            console.log(err);
        });
    },[]);

    return(
        <>
        <Header/>
        <div class="heading_p_page">
    <span>
    <a href="/home">Home </a><a href="#">/{products.P_name} </a>
    </span>
   </div>
   <div class="addtocart" style={{width:"800px"}}>

   <div class="add-item">
            
            <a href="/Product/Addtocart/products.p_id">
                <h3 style={{width:"400px"}}>{products.p_name}</h3>
            </a>
            <p style={{width:"130px", marginLeft: "60px"}}>Quantity-{products.p_quantity}</p>
            <h5 style={{width: "100px" ,marginLeft: "50px", fontSize:" .9rem"}}>price-{products.p_price}</h5>
            



        </div>
  

   </div>

        
        </>
    );
}
export default  Retrundetailas;