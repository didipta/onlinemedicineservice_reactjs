import axios from "axios";
import '../../css/homepage.css';
import React, {useState, useEffect} from "react";
import Slider from "./others/slider";
import Productlist from "./others/productlist";
import Footer from "./others/footer";
const Homepage = ()=>{
    let url="https://localhost:44301/api/user/homepage";
    const [products, setproducts] = useState([]);
    const [categorie, setcategorie] = useState([]);
    let x=0;
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data[0].categorie);
           setproducts(resp.data[0].products);
           console.log(resp.data[0].products);
           setcategorie(resp.data[0].categorie);
            
        }).catch(err=>{
            console.log(err);
        });
    },[]);


    return(
        <>
        <div className="user-body">
         <section id="header">
        <div className="Top-header">
            <li className="Top-header-title-1">
                <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcSPFdLTrfgDClDqDZSzvbPXKkjGrFcRBfFlCxMPhlvsNwZWwTKVzPRNhwqFCVjCKwNVzWKMS" target="_blank"><i className="fas fa-envelope"></i> Companysd@gmail.com</a>
                <a href="tel:01881291010"> <i className="fas fa-phone-alt"></i> 01881291010</a>
            </li>
            <li className="Top-header-title-2">
                <a href="#">All Services</a>
                <a href="/index/Logout"><i className="fas fa-sign-out-alt"></i> Logout</a>
                <a href="#"><i className="far fa-bell"></i></a>
            </li>
        </div>
    </section>
         <div className="user-container">
        <div className="header-mid">
        <div className="middle-header">
        <a href="#">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/2833/2833228.png" />
                <h3>Med<span style={{color:"deeppink"}}>life</span></h3>
            </div>
        </a>
        <div className="search-box">
            <label>
                <input type="text" name="search" id="search-live" className="search" placeholder="Search for anything of your mind...….."/><button><i className="fas fa-search"></i></button>
            </label>
            <div className="serach-result">
                <ul>
                    <li id="serach-result"></li>

                </ul>
            </div>
        </div>
        <div className="middle-header-rigth">
            
                <a href="/index/singinpage" className="profile"><i className="fas fa-user-alt"></i><span style={{color:"black",fontsize:".8rem",marginleft:"2px",fontweight:"900"}}>Log-in</span></a>

            <a href="#"><i className="fas fa-comments"></i></a>
            <a href=""><i className="fas fa-map-marker-alt"></i></a>
        </div>
        </div>

        <div className="navegation">

        <nav>
            <ul>
                <li className="Catagories"><a href="#"><i className="fas fa-bars"></i> Catagories</a></li>
                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                <li><a href="/Orders/Addtocart"><i className="fas fa-server"></i> Cart Detalie</a></li>
                <li><a href="/Orders/myorders"><i className="fas fa-luggage-cart"></i> My orders</a></li>
                <li><a href="/Orders/retrunorder"><i className="fas fa-luggage-cart"></i> Return orders</a></li>
                <li><a href="#"><i className="fas fa-people-carry"></i> Help</a></li>
                <li><a href="#"><i className="fas fa-info-circle"></i> About</a></li>
                <li><a href="#"><i className="fas fa-address-book"></i> Contact Us</a></li>
            </ul>
        </nav>
    </div>
        </div>
        <div className="home-mid-contain">
        <div className="CATAGORIES-navs">
        <div className="CATAGORIES-nav">
        {
                categorie.map(categories=>(
                    <li><a href={"/Product/Productshow/"+categories.Id}> {categories.name} </a></li>
                ))
               }
           
                
            


        </div>
    </div>
<Slider/>
        </div>
        {
               categorie.map(categories=>(
                <div class="best_selles">
                <h2>{categories.name}</h2>
                <p>MOSTLY  BOUGHT</p>
                <div class="iteam-slider">
                 
                 {
                     products.map(productss=>(
                         <Productlist product={productss} categorie={categories}/>

                     ))
                 }
                 </div>
                 </div>
            ))

        }


        </div>
        </div>
        <Footer/>
        </>
    );


}
export default Homepage;
