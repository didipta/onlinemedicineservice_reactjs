import React, {useState, useEffect} from "react";
import '../../../css/orderpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";
const Returnsall = ()=>{
    
    var username=null;
    var userid=null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      username=userinfo.allinfo.U_username;
      userid=userinfo.allinfo.Id;
    }
    let url="https://localhost:44301/api/user/allreturn/"+username;
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setproducts(resp.data);
        }).catch(err=>{
            
            
            console.log(err);
        });
    },[]);

    return(
        <>
        <Header/>
        <div class="heading_p_page">
    <span>
        <a href="/home">Home </a><a href="#">/All return Product </a>
    </span>
</div>

<div class="myordes">
      {
            products.map(productss=>(
                <div class="order_deteils">
                <h3> {productss.return_id}</h3>
                <p style={{width:"500px"}}>{productss.reason}</p>
                <p > {productss.date}</p>
                <Link to={"/Retrunorder/"+productss.id}><button class="btn">detailes</button></Link>

            </div>             
    

                        ))
             }
             </div>
        </>
    );

}

export default  Returnsall;