import React from 'react';
import {Link} from "react-router-dom";
import '../css/indexpage.css';
function Start() {
document.getElementById("title").innerHTML="Indexpage | Online Medicine service";
  return (
    <>
    <div class="index_body" style={{overflow: "hidden"}}>
        
        <a href="/">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/2833/2833228.png" />
            <h3>Med<span style={{color:"deeppink" }}>life</span></h3>
        </div>
    </a>
        
    <div id="preloader">

   </div>
 
<div className="index_nav">
    <ul>
        <li><Link to="/home">HOME</Link></li>
        <li><a>SERVICE</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>CONTACT</a></li>

    </ul>
</div>
<div className="index_body_contain">

    <div className="index_heading">
        <div><img src="https://cdn1.vectorstock.com/i/1000x1000/64/80/online-medicine-service-vector-31016480.jpg"/></div>
        <div className="heading_title">
            <h3>Online Medicine Service</h3>
            <h5>Any kind of Medicine Available</h5>
            <p>
                Send medicines to your dear ones with just one click. You take care of your health. We'll take care of the errands.
                Delivery without hassle.Pickup or drop any item. Delivery within 2 hours. Doorstep delivery. Vaccinated delivery boy.
                Contactless delivery.
            </p>
            <a href="/login"><button className="index_button">Log-In</button></a>
        </div>
    </div>
</div>

<div className="socail_media_app">
    <i className="fab fa-facebook"></i>
    <i className="fab fa-google-plus"></i>
    <i className="fab fa-whatsapp-square"></i>
    <i className="fas fa-envelope-square"></i>
</div>

  
    </div>
    </>
  );
}
export default Start;