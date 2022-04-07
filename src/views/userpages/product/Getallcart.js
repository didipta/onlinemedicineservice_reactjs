import React, {useState, useEffect} from "react";
import '../../../css/orderpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";

const Allcartiteam = ()=>{
   
    var username=null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      username=userinfo.allinfo.U_username;
    }
    let url="https://localhost:44301/api/user/cartiteam/"+username;
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
    document.getElementById("title").innerHTML="Online Medicine service | "+products.name;

    return(
        <>
        <Header/>
        <div class="heading_p_page">
            <span>
            <Link to="/home">Home </Link> / <Link to="">Cart  </Link>
            </span>
        </div>

        <div style={{display:"flex"}}>
        <div class="addtocart">
        {
                     products.map(productss=>(
                        <div class="add-item">
                        <img src={"img/"+productss.p_img} />
                        <a href={"/Product/Addtocart/"+productss.P_id}>
                            <h3 style={{width:"400px"}}>{productss.P_name}</h3></a>
                            <p style={{width:"100px",marginLeft: "60px"}}>Quantity-{productss.P_O_quantity}</p>
                            <h5 style={{width: "100px" ,marginLeft: "50px", fontSize: ".9rem"}}>price-{productss.P_tprice}</h5>
                            <a href=""><button class="btn" style={{width: "120px", marginLeft:"40px"}}>Delete</button></a>
    </div>

                     ))
                 }
        </div>
        </div>
        </>
    );
}
export default Allcartiteam;