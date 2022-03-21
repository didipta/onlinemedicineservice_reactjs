import axios from "axios";
import React, {useState, useEffect} from "react";
const Footer = ()=>{

    return(

        <>
        <div class="detailes-service">
    <h5>আরোগ্য থেকে অর্ডার কিভাবে করবেন?</h5>
    <p>১. প্রেস্ক্রিপশনের ছবি আপলোড করুন অথবা ঔষধ সার্চ করে কিনুন।</p>
    <p>২. আমাদের 'A Grade Pharmacist' আপনাকে ফোন করে অর্ডার কনফার্ম করবেন।</p>
    <p>৩. ১৮-৪৮ ঘন্টার মধ্য আপনার ডেলিভারি বুঝে নিন।</p>
</div>
<div class="footer">
    <div class="emergency">
        <img src="https://freepikpsd.com/file/2019/10/calling-girl-png-7-Transparent-Images.png" />
        <div class="emergency-title">
            <h5>Can’t find your desired service? Let us know 24/7 in 17321.</h5>
            <button style={{fontsize:"0.7rem"}}>Request Services</button>
            <button><i class="fas fa-phone-alt"></i>  17321</button>
        </div>
    </div>
    <div class="footer-info">
        <div class="item">
            <h4>CONTACT</h4>
            <p>
                7321<br />
                info@company
                <b>Corporate Address:</b>
                House # 57, Road # 25, Block - A,
                Banani, Dhaka 1212
            </p>
        </div>
        <div class="item">
            <h4>INFORMATION</h4>
            <p>Help</p>
            <p>About Us</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Return and Refund Policy</p>
        </div>

        <div class="item">
            <h4>IUSEFUL LINKS</h4>
            <p>FAQ</p>
            <p>Account</p>
            <p>Medicines</p>
            <p>Special Offers</p>
        </div>
        <div class="item">
            <h4>DOWNLOAD OUR APP</h4>
            <p><img src="https://cdn6.arogga.com/img/google-play-badge.png" alt="arogga" /></p>
            <p><img src="https://cdn6.arogga.com/img/apple-store-badge.png" alt="arogga" /></p>
        </div>

    </div>

    <div class="copy-write">
        <p>
            © 2022 Medlife Limited. All rights reserved.
        </p>
    </div>
</div>
        
        </>
    );
  
   
      
  

  


}
export default Footer;