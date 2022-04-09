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
    ///////////////////////////////
    var totalQuantity=0;
    var totalprice = 0;
    var alltotalprice = 0;
    var productname=[];
    var orderid=0;
    var id=0;
    let cart=null;
    const countcart=(products).length;
    cart=countcart;
    products.forEach(added)
    function added(carddetail)
    {
        id +=carddetail.id;
        totalQuantity +=Number(carddetail.P_O_quantity);
        totalprice +=Number( carddetail.P_tprice);
        alltotalprice +=Number(carddetail.P_tprice);
        orderid=((totalQuantity*1000)+(alltotalprice*10))*(countcart+id);
    }

    function delet(Id)
    {
       
        let url="https://localhost:44301/api/user/cartiteamdelet/"+Id;
            axios.get(url)
            .then(resp=>{
                window.location="/Allcartiteam"; 
               
            }).catch(err=>{
                console.log(err);
            });
        
    }
    return(
        <>
        <Header/>
        <div class="heading_p_page">
            <span>
            <Link to="/home">Home </Link> / <Link to="">Cart  </Link>
            </span>
        </div>

        {
        cart?(
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
                                <button class="btn" style={{width: "120px", marginLeft:"40px"}} onClick={()=>delet(productss.Id)}>Delete</button>
                               
                                
        </div>                
        
    
                         ))
                     }
            </div>
            <div class="add_details">
                <h3>TOTAL</h3>
                <hr style={{width: "100%", height:"1px", backgroundColor: "rgba(196, 196, 196, 0.315)", border: "none"}}/>
                <div class="detalis_1">
                    <h4 style={{width: "300px"}}>Total Item</h4>
                    <p style={{width: "200px", marginLeft: "200px", fontSize: "0.9rem"}}>{totalQuantity}</p>
                </div>
    
                <div class="detalis_1">
                    <h4 style={{width: "300px"}}>Sub-total</h4>
                    <p style={{width: "200px", marginLeft: "200px", fontSize: "0.9rem"}}>{totalprice} ৳</p>
                </div>
    
                <div class="detalis_1">
                    <h4 style={{width: "300px"}}>Delivery Charge </h4>
                    <p style={{width: "200px", marginLeft: "200px", fontSize: "0.9rem"}}>40 ৳</p>
                </div>
                <hr style={{width: "100%", height:"1px", backgroundColor: "rgba(196, 196, 196, 0.315)", border: "none"}}/>
                <div class="detalis_1">
                    <h4 style={{width: "300px"}}>Total Price </h4>
                    <p style={{width: "200px", marginLeft: "200px", fontSize: "0.9rem"}}>{totalprice+40} ৳</p>
                </div>
                <button class="btn" style={{backgroundColor:"forestgreen"}} onclick="checkclick()">Checkout</button>
            </div>
    
    
            </div>
        ):(
            <div style={{marginTop:"100px" ,padding:"50px"}}>
           <h1>No product has been stored so far.</h1>
          </div>
        )
          
        }
        </>
    );
}
export default Allcartiteam;