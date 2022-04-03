import axios from "axios";
import { Link } from "react-router-dom";
import '../../css/homepage.css';
import React, {useState, useEffect} from "react";
import Slider from "./others/slider";
import Productlist from "./others/productlist";
import Footer from "./others/footer";
import Header from "./others/header";
const Homepage = ()=>{
    document.getElementById("title").innerHTML="Homepage | Online Medicine service";
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

    var useridinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo.U_username;
      
    }


    return(
        <>
        <div className="user-body">
         <Header/>
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
            {
                userinfo?(
                    <Link to="/Profile" className="profile"><i className="fas fa-user-alt"></i><span style={{color:"black",fontSize:".8rem",marginLeft:"2px",fontWeight:"900"}}> {useridinfo}</span></Link>
                ):(
                    <Link to="/login" className="profile"><i className="fas fa-user-alt"></i><span style={{color:"black",fontSize:".8rem",marginLeft:"2px",fontWeight:"900"}}>Log-in</span></Link>
                )
            }
       

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
                    <li><Link to={"/productlist/"+categories.Id}>  {categories.name}</Link></li>
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
