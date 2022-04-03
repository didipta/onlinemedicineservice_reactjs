import React, {useState, useEffect} from "react";
import '../../../css/productpage.css'
import '../../../css/addtocart.css'
import '../../../css/jquery.nice-number.css'
import axios from "axios";
import Productitem from "./product";
import { Link, useParams } from "react-router-dom";
import Footer from "./../others/footer";
import Header from "./../others/header";
const Addtocart = ()=>{
    var {id} =useParams();
    let url="https://localhost:44301/api/user/addtocart/"+id;
    const [products, setproducts] = useState([]);
    const [productitem, setproductitem] = useState([]);
    const [ratings, setratings] = useState([]);
    const [totalrat, settotalrats] = useState([]);
    const [cagetore, settocagetore] = useState([]);
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
            setproducts(resp.data[0].rating);
            setratings(resp.data[0].rating.Ratings)
            settotalrats(resp.data[0].totalrat)
            console.log(resp.data[0].product)
            settocagetore(resp.data[0].product)
            setproductitem(resp.data[0].product.Products)
            
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    document.getElementById("title").innerHTML="Online Medicine service | "+products.P_name;
    let star = document.querySelectorAll('.inputs');
    let showValue = document.querySelector('#rating-value');
    let showValuetext = document.querySelector('#text-value');
    
    for (let i = 0; i < star.length; i++) {
      star[i].addEventListener('click', function () {
          i = this.value;
    
          showValue.innerHTML = i;
          showValuetext.value = i;
      });
    }

    var useridinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo.U_address;
      
    }
   
    return(
     <>
     <Header/>
     <div class="heading_p_page">
            <span>
            <Link to="/home">Home </Link> / <Link to={"/productlist/"+cagetore.Id}>  {cagetore.name}</Link> / <Link to="#">{products.P_name}</Link>
            </span>
        </div>
        <div class="add-to-cart">
        <div class="cart-product">
        <div class="product-img">
            <img src={"/img/"+products.P_img} />
        </div>
        <div class="cart-deteils">
        <form action="#" method="post">
        <input type="hidden" name="productid" value={products.Id} />
        <div class="cart-title">
                    <h3>{products.P_name}</h3>
                    <p>Rating is ({totalrat}/5) </p>
        </div>
        <hr style={{width:"100%", height:"2px", backgroundColor: "rgba(196, 196, 196, 0.315)" ,border: "none"}}/>
        <div class="price">
                    <h2>৳ {products.P_price}</h2>
                </div>
                <hr style={{width:"100%", height:"2px", backgroundColor: "rgba(196, 196, 196, 0.315)" ,border: "none"}}/> 
                <div class="input">
                    <p>Quantity</p>
                    <input type="number" name="Productquantity" id="value" value="1" min="1"/>

                </div>
                <hr style={{width:"100%", height:"2px", backgroundColor: "rgba(196, 196, 196, 0.315)" ,border: "none"}}/>
                <div class="cart-button">
                    <button style={{backgroundColor:"rgb(230, 128, 61)"}}>Buy Now</button>
                    <button style={{backgroundColor:"rgb(93, 60, 241)"}}>Add to Cart</button>
                </div>
        </form>

        </div>
        <div class="delivery-status">
            <div class="delivery">
                <h6>Delivery</h6>
                 {
                     userinfo?(
                        <p><i class="fas fa-map-marker-alt"></i> { useridinfo} </p>
                     ):(
                        <p><i class="fas fa-map-marker-alt"></i> Add your delivery Address </p>
                     )
                 }
                   
             

                <p><i class="fas fa-truck"></i> Home Delivery(2 - 5 day(s))-৳ 40</p>

            </div>

            <div class="delivery">
                <h6>Service	</h6>
                <p>7 Days Returns</p>
            </div>




        </div>
        </div>
        <div class="review-rating">
        <div class="title-r-r">
            <h2>Description</h2>
        </div>
        <div class="reviewsss">
            <p style={{margin:"15px",padding:"30px",textAlign:"center"}}>
            {products.P_details}
            </p>
        </div>
    </div>
    <div class="review-rating">
    <div class="title-r-r">
            <h2>Ratings & Reviews</h2>
        </div>
        <div style={{display: "flex"}}>
        <div class="Reting">
                <h1>{totalrat}/5</h1>
                <img src="/img/Rating.jpg"/>
            </div>
            <img src="/img/ratingsss.png" class="ratings"/>
            <div class="r-r-p">
            <div class="ratingss">
            <div class="rating-wrap">
            <h2>Star Rating (<span id="rating-value"></span>/5) </h2>
            <div class="center">
                                <fieldset class="ratingsss">
                                    <input type="radio" id="star5" name="rating" value="5" class="inputs" /><label for="star5" class="full" title="Awesome"></label>
                                    <input type="radio" id="star4.5" name="rating" value="4.5" class="inputs" /><label for="star4.5" class="half"></label>
                                    <input type="radio" id="star4" name="rating" value="4" class="inputs" /><label for="star4" class="full"></label>
                                    <input type="radio" id="star3.5" name="rating" value="3.5" class="inputs" /><label for="star3.5" class="half"></label>
                                    <input type="radio" id="star3" name="rating" value="3" class="inputs" /><label for="star3" class="full"></label>
                                    <input type="radio" id="star2.5" name="rating" value="2.5" class="inputs" /><label for="star2.5" class="half"></label>
                                    <input type="radio" id="star2" name="rating" value="2" class="inputs" /><label for="star2" class="full"></label>
                                    <input type="radio" id="star1.5" name="rating" value="1.5" class="inputs" /><label for="star1.5" class="half"></label>
                                    <input type="radio" id="star1" name="rating" value="1" class="inputs" /><label for="star1" class="full"></label>
                                    <input type="radio" id="star0.5" name="rating" value="0.5" class="inputs" /><label for="star0.5" class="half"></label>

                                </fieldset>
                            </div>
                            </div>
                 
            </div>
            <form action="/Product/reviwerating" method="post" class="form_rating">
                    <input type="hidden" value="" name="rating" id="text-value"/>
                    <input type="hidden" value="@Model.Id" name="product_id" id="text-value"/>
                    <input type="text" name="review" placeholder="please provide your review...."/><br/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div class="review-rating">
    <div class="title-r-r">
            <h2>All Reviews</h2>
        </div>
        
        {
               ratings.map(rating=>(

                    <div class="reviewsss">
                    <h5>by {rating.username}<span>({rating.rating1}/5)</span></h5>
                    <p>{rating.Review}.</p>
                    <i class="far fa-thumbs-up"></i>({rating.id})
                    <i class="far fa-comment"></i>({rating.id})
                    <hr style={{width:"100%", height:"2px", backgroundColor: "rgba(196, 196, 196, 0.315)" ,border: "none"}}/>
                </div>
                ))
        }
        
    </div>
    <div class="product_show_add">
    <div class=" product_show">
    {
        
                productitem.slice(0,4).map(Product=>(
                   
                 <Productitem Product={Product}/>
                
                ))
               }

    </div>
</div>
        </div>

     
     </>
    )
    
        }
export default Addtocart;