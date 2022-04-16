import React, {useState, useEffect} from "react";
import '../../../css/orderpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";
const Allmyorders = ()=>{
    
    var username=null;
    var userid=null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      username=userinfo.allinfo.U_username;
      userid=userinfo.allinfo.Id;
    }
    let url="https://localhost:44301/api/user/allorders/"+username;
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
        <a href="/home">Home </a><a href="#">/All orders </a>
    </span>
</div>

<div class="myordes">
      {
            products.map(productss=>(
                <div class="order_deteils">
                <h3>{productss.Oder_id}</h3>
                <p>price-{productss.totale_price}</p>
                <p>item-{productss.totale_iteam}</p>
                <p style={{width:"350px",color:"deeppink", fontWeight:"900"}}>{productss.O_status}</p>
                <Link to={"/Allorderdetails/"+productss.Id}><button class="btn">detailes</button></Link>

            </div>             
    

                        ))
             }
             </div>
        </>
    );

}

export default  Allmyorders;