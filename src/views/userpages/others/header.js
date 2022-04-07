import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Header = ()=>{

    function logout()
    {
        var useridinfo = null;
        if(localStorage.getItem('AccessToken')){
            var userinfo = JSON.parse(localStorage.getItem('AccessToken'));
            useridinfo=userinfo.tokens.Id;
            
          }
          //let url="https://localhost:44301/api/user/Logout/"+useridinfo;
        
            axios.get("https://localhost:44301/api/user/Logout/"+useridinfo)
            .then(resp=>{
               console.log(resp.data);
               
                
            }).catch(err=>{
                console.log(err);
            });

            localStorage.removeItem('usernames');
               localStorage.removeItem('AccessToken');
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
                <a href="#" onClick={logout} ><i className="fas fa-sign-out-alt"></i> Logout</a>
                <a href="#"><i className="far fa-bell"></i></a>
            </li>
        </div>
    </section>
        
        </>
    );
  
   
      
  

  


}
export default Header;