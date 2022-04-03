import React, {useState, useEffect} from "react";
import '../../../css/productpage.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
import Productitem from "./product";

const Productaxio = ()=>{
    var {id} =useParams();
    let url="https://localhost:44301/api/user/product/"+id;
    const [products, setproducts] = useState([]);
    const [productitem, setproductitem] = useState([]);
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setproducts(resp.data);
            setproductitem(resp.data.Products);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    document.getElementById("title").innerHTML="Online Medicine service | "+products.name;

   
    return(
        <div>
            <Header/>
            <div class="heading_p_page">
            <span>
            <Link to="/home">Home </Link> / <Link to="#">{products.name}</Link>
            </span>
        </div>

        <div class="product_show">
        {
                productitem.map(Product=>(

                 <Productitem Product={Product}/>
                ))
               }

        </div>
      
            
            
    
        </div>
    )
        }
export default Productaxio;