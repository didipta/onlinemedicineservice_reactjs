import React, {useState, useEffect} from "react";
import '../../../css/orderpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";
const Allmyorderdetails = ()=>{
    
    var {id} =useParams();
   
    let url="https://localhost:44301/api/user/orderdetails/"+id;
    const [products, setproducts] = useState([]);
    const [orders, setorders] = useState([]);
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setproducts(resp.data.Orderdetails);
            setorders(resp.data);
        }).catch(err=>{
            
            
            console.log(err);
        });
    },[]);

    return(
        <>
        <Header/>
        <div class="heading_p_page">
    <span>
        <a href="/home">Home </a><a href="/Allorder">/All orders </a><a href="#">/Order Detailes </a>
    </span>
</div>

<div class="addtocart" style={{width:"1300px"}}>
{
    products.map(productss=>(
        <div class="add-item">
        <img src={"/img/"+productss.p_img} />
        <a href={"/Product/Addtocart/"+productss.P_id}>
            <h3 style={{width:"400px"}}>{productss.P_name}</h3>
        </a>
        <p style={{width:"130px", marginLeft: "60px"}}>Quantity-{productss.P_O_quantity}</p>
        <p style={{width:"200px", marginLeft: "60px", color:"deeppink"}}>{productss.status}</p>
        {
          orders.O_status=="Delivered the product"?(
              productss.status=="Retrun the product"?(
                    <p style={{width:"130px", marginLeft: "60px",color:"red",fontWeight:"900"}}>Already Retrun</p>
                ):(
                    <a href={"/returnoder/"+productss.Id}><button class="btn" style={{width: "120px",marginLeft: "40px"}}>Returned</button></a>
                )
                
                    
                
              
          ):("")
        }
        </div>
        ))
    }
             </div>
        </>
    );

}

export default  Allmyorderdetails;