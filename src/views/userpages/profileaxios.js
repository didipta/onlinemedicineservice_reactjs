import React, {useState, useEffect} from "react";
import '../../css/profilepage.css'
import axios from "axios";
import Header from "./others/header";
import Userprofile from "./profile";
import { Link, useParams } from "react-router-dom";
const Userprofileaxois = ()=>{
   
    var useridinfo = null;
    if(localStorage.getItem('usernames')){
      var userinfo = JSON.parse(localStorage.getItem('usernames'));
      useridinfo=userinfo.allinfo;
    }
       
        return(
            <div>
                <div class="heading_p_page">
            <span>
            <Link to="/home">Home </Link><a href="#">/ {useridinfo.U_name}</a>
            </span>
        </div>
        <br />
    
                <Header/>
                
                
                <Userprofile Systemuser={ useridinfo}/>
               
                
            </div>
        )
    }
   
export default  Userprofileaxois;