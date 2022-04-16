import React, {useState, useEffect} from "react";
import '../../../css/orderpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";
const Retrunorder = ()=>{
    
    var {id} =useParams();
   
    let url="https://localhost:44301/api/user/returnproduct/"+id;
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
     

    var useridinfo = null;
    var username=null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo.U_address;
      username=userinfo.allinfo.U_username;
    }

    const [inputs, setInputs] = useState({
        id:"",returnid:"",reason:"",username:username
    });
    //////////////////////////
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {      
        event.preventDefault();
        console.log(inputs);
        console.log(inputs);
        axios.post("https://localhost:44301/api/user/returndetails",inputs)
                .then(resp=>{
                   console.log(resp.data);
                   window.location="/Allcartiteam"; 
                   
                }).catch(err=>{
                   
                    window.location="/login";
                    console.log(err);
                    
                });
                
                
         
      }

    return(
        <>
        <Header/>
        <div class="heading_p_page">
    <span>
    <a href="/home">Home </a><a href="#">/{products.P_name} </a>
    </span>
   </div>
  <div class="addtocart" style={{width:"1200px"}}>
  <div class="add-item">
            <img src={"/img/"+products.p_img} />
            <a href={"/Product/Addtocart/"+products.P_id}>
                <h3 style={{width:"400px"}}>{products.P_name}</h3>
            </a>
            <p style={{width:"130px",marginLeft: "60px"}}>Quantity-{products.P_O_quantity}</p>
            <p style={{width:"200px",marginLeft: "60px", color:"deeppink"}}>{products.status}</p>
            <h5 style={{width: "100px", marginLeft: "50px" ,fontSize: ".9rem"}}>price-{products.P_tprice}</h5>

        </div>
  </div>

  <div class="details-return">
        <form onSubmit={handleSubmit} method="post">
            <input type="hidden" name="id" value={inputs.id=products.Id} onChange={handleChange} />
            <input type="hidden" name="returnid" value={inputs.returnid="#retu"+(products.Id*products.P_id*(products.P_tprice)*products.P_O_quantity+100000002)} onChange={handleChange} />
            <h4>Please write the reason why return the product</h4><br />
            <textarea name="reason" onChange={handleChange} required></textarea><br />
            <button class="btn">Submit</button>
        </form>
    </div>
    
        
        </>
    );
}
export default  Retrunorder;