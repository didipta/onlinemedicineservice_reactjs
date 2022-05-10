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
      useridinfo=userinfo.allinfo.Id;
      console.log(userinfo);
    }
       
    const [profileinfo, setprofileinfo] = useState([]);
    let url="https://localhost:44301/api/user/profileshow/"+useridinfo;
    useEffect(()=>{
        axios.get(url)
        .then(resp=>{
           console.log(resp.data);
           setprofileinfo(resp.data);
        }).catch(err=>{
            
                    window.location="/login";
                    console.log(err);
        });
    },[]);
        return(
            <div>
                <div class="heading_p_page">
            <span>
            <Link to="/home">Home </Link><a href="#">/ {profileinfo.U_name}</a>
            </span>
        </div>
        <br />
    
                <Header/>
                
                
                <Userprofile Systemuser={ profileinfo}/>
               
                
            </div>
        )
    }
   
export default  Userprofileaxois;