import axios from "axios";
import React, {useState, useEffect} from "react";

const Logout = ()=>{

        var useridinfo = null;
        if(localStorage.getItem('AccessToken')){
            var userinfo = JSON.parse(localStorage.getItem('AccessToken'));
            useridinfo=userinfo.tokens.Id;
            
          }

          let url="https://localhost:44301/api/user/Logout/"+useridinfo;
         
            axios.get(url)
            .then(resp=>{
               console.log(resp);
               localStorage.removeItem('usernames');
               localStorage.removeItem('AccessToken');
               window.location="/login";
                
            }).catch(err=>{
                console.log(err);
            });
        
         


        
    return(

        <>
        </>
    );

}
export default Logout;