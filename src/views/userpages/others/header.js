import axios from "axios";
import React, {useState, useEffect} from "react";
const Header = ()=>{
    function logout()
    {
        
        localStorage.removeItem('usernames');
        window.location="/login";
    }
    return(

        <>
            <section id="header">
        <div className="Top-header">
            <li className="Top-header-title-1">
                <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcSPFdLTrfgDClDqDZSzvbPXKkjGrFcRBfFlCxMPhlvsNwZWwTKVzPRNhwqFCVjCKwNVzWKMS" target="_blank"><i className="fas fa-envelope"></i> Companysd@gmail.com</a>
                <a href="tel:01881291010"> <i className="fas fa-phone-alt"></i> 01881291010</a>
            </li>
            <li className="Top-header-title-2">
                <a href="#">All Services</a>
                <a href="#" onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</a>
                <a href="#"><i className="far fa-bell"></i></a>
            </li>
        </div>
    </section>
        
        </>
    );
  
   
      
  

  


}
export default Header;