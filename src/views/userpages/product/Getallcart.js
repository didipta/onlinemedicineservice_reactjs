import React, {useState, useEffect} from "react";
import '../../../css/orderpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";

const Allcartiteam = ()=>{

    function checkclick() {
        document.getElementById("payment").style.display = "block";
    }
    function bkashclick() {

        document.getElementById("bkashback").style.display = "block";
        document.getElementById("cardback").style.display = "none";
        document.getElementById("cashback").style.display = "none";
    }
    function cashclick() {
        document.getElementById("bkashback").style.display = "none";
        document.getElementById("cashback").style.display = "block";
        document.getElementById("cardback").style.display = "none";
    }
    function cardclick() {
        document.getElementById("bkashback").style.display = "none";
        document.getElementById("cashback").style.display = "none";
        document.getElementById("cardback").style.display = "block";
    }
    function backclick() {
        document.getElementById("payment").style.display = "none";
    
    }
   
    var username=null;
    var userid=null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      username=userinfo.allinfo.U_username;
      userid=userinfo.allinfo.Id;
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
        id +=carddetail.Id;
        totalQuantity +=Number(carddetail.P_O_quantity);
        totalprice +=Number( carddetail.P_tprice);
        alltotalprice +=Number(carddetail.P_tprice);
       
    }
    orderid=((totalQuantity*100)+(id*100+101011000));
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

    ///////////////////////
    const [inputs, setInputs] = useState({
        orderid:"",totaleprice:"",Paymenttype:"",userid:userid,quantiy:""
    });
    //////////////////////////
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    ///////////Bkashmathoed///////////////
    const handleSubmit = (event) => {      
        event.preventDefault();
        inputs.Paymenttype=document.getElementById("Bkash").value;
        console.log(inputs);
        axios.post("https://localhost:44301/api/user/orderproduct",inputs)
        .then(resp=>{
           console.log(resp.data);
           window.location="/home";
        }).catch(err=>{
            
            console.log(err);
            
        });
                
         
      }
      ////////////Cardmethod///////////////////
      const handleSubmit2 = (event) => {
        event.preventDefault();
        inputs.Paymenttype=document.getElementById("card").value;
        console.log(inputs);
        axios.post("https://localhost:44301/api/user/orderproduct",inputs)
        .then(resp=>{
           console.log(resp.data);
           window.location="/home";
        }).catch(err=>{
            
            console.log(err);
            
        });
                
         
      }
      /////////////Cashmethod///////////////////
      const handleSubmit3 = (event) => {
        event.preventDefault();
        inputs.Paymenttype=document.getElementById("Cash").value;
        console.log(inputs);
        axios.post("https://localhost:44301/api/user/orderproduct",inputs)
            .then(resp=>{
               console.log(resp.data);
               window.location="/home";
            }).catch(err=>{
                
                console.log(err);
                
            });
                
         
      }
     ///////////////////////////////////

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
                <button class="btn" style={{backgroundColor:"forestgreen"}} onClick={checkclick}>Checkout</button>
            </div>
    
    
            </div>
        ):(
            <div style={{marginTop:"100px" ,padding:"50px"}}>
           <h1>No product has been stored so far.</h1>
          </div>
        )
          
        }

            <div class="payment" id="payment">
            <div class="cancel" onClick={backclick}>
            <i class="fas fa-times" ></i>
            </div>

            <div class="title-pay">
            <h3>Payment Type </h3>
            <hr style={{width: "100%", height:"1px", backgroundColor:"rgb(255 255 255)", border: "none"}}/>
        <div class="pay-type">
            <img src="/img/bkash.png" onClick={bkashclick} />
            <img src="/img/cash.png" onClick={cashclick} />
            <img src="/img/card.png" onClick={cardclick} />
        </div>
        <hr style={{width: "100%", height:"1px", backgroundColor:"rgb(255 255 255)", border: "none"}}/>
        <div class="confirm">

        <form onSubmit={handleSubmit} class="paymentform" id="bkashback" method="post">
             <input type="hidden" name="orderid" value={inputs.orderid="#order"+orderid}/>
            <input type="hidden" name="totaleprice" value={inputs.totaleprice=alltotalprice+40}/>
            <input type="hidden" id="Bkash" value="Bkash"/>
            <input type="hidden" name="quantiy" value={inputs.quantiy=totalQuantity}/>
            <h4>Bkash in Payment</h4>
            <input type="text" name="phonenu" id="" placeholder="Phone number" required/><br/>
            <input type="password" name="password" id="" placeholder="password" required/>
            <button class="btn">Confirm Order</button>
        </form>
        </div>
        <div class="confirm">

<form onSubmit={handleSubmit2} class="paymentform" id="cardback" method="post">
            <input type="hidden" name="orderid" value={inputs.orderid="#order"+orderid}/>
            <input type="hidden" name="totaleprice" value={inputs.totaleprice=alltotalprice+40}/>
            <input type="hidden" id="card" value="Card"/>
            <input type="hidden" name="quantiy" value={inputs.quantiy=totalQuantity}/>

    <h4>Card in Payment</h4>
    <input type="text" name="phonenu" id="" placeholder="Card id" required/><br/>
    <input type="password" name="password" id="" placeholder="password" required/>
    <button class="btn">Confirm Order</button>
</form>

</div>
<div class="confirm">

<form onSubmit={handleSubmit3} class="paymentform" id="cashback" method="post">
   
    <input type="hidden" name="orderid" value={inputs.orderid="#order"+orderid}/>
            <input type="hidden" name="totaleprice" value={inputs.totaleprice=alltotalprice+40}/>
            <input type="hidden" id="Cash" value="Cash"/>
            <input type="hidden" name="quantiy" value={inputs.quantiy=totalQuantity}/>

    <h4>Cash in Payment</h4>
    <button class="btn">Confirm Order</button>
</form>
</div>
            </div>
            </div>
        </>
    );
}
export default Allcartiteam;