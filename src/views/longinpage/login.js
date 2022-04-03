
import '../../css/indexpage.css';
import React, {useState, userEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
function Login() {
    const password=()=>{
        var x= document.getElementById("password");
        if(x.type=="password")
        {
            x.type="text";
            document.getElementById('eye').style.color="rgba(116, 116, 116, 0.781)";
         
    
        }
        else{
            x.type="password";
            document.getElementById('eye').style.color="rgba(43, 43, 43, 0.781)";
        }
    }
    
    function cpassword(){
    
        var y= document.getElementById("cpassword");
        if(y.type==="password")
        {
            y.type="text";
            document.getElementById('ceye').style.color="rgba(116, 116, 116, 0.781)";
         
    
        }
        else{
            y.type="password";
            document.getElementById('ceye').style.color="rgba(43, 43, 43, 0.781)";
        }
        }

         //login controller
         const [inputs, setInputs] = useState({
            U_username:"",U_password:""
        });

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }
        const history= useHistory();
        const handleSubmit = (event) => {
            event.preventDefault();
            var obj = {U_username:inputs.U_username, U_password:inputs.U_password};
            axios.post("https://localhost:44301/api/user/Login",obj)
            .then(resp=>{
                console.log(resp.data);
                var userinfos = resp.data;
                var Alluser={allinfo:userinfos};
                console.log(userinfos);
                var usertype=userinfos.Usertype;
                console.log( Alluser);
                var userid =userinfos;
                if(usertype=="Customer")
                {
                    localStorage.setItem('usernames', JSON.stringify(Alluser));
                    window.location="/home";
                   
                }
                else if (usertype=="Staff") {
                    history.push("/fStaffhome");
                }
                else if (usertype=="Delivaryman") {
                   history.push("/delivaryHome");
                }
                else if (usertype=="Admin") {
                    history.push("/AdminHome");
                }
                else
                { 
                    alert("Please Enter Your right Password and Username");
                }
            }).catch(err=>{
                
                console.log(err);
                
            });
            
        }
    document.getElementById("title").innerHTML="Indexpage | Online Medicine service";
      return (
        <>
            <a href="/">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/2833/2833228.png" />
            <h3>Med<span style={{color:"deeppink" }}>life</span></h3>
        </div>
    </a>
        <div class="sign-body">
        <div class="signin-title">
        <h1>WELCOME BACK :)</h1>
        <p>
            To keep connected with us please login with your personal
            information by user-name and password.
        </p>
        <form onSubmit={handleSubmit} className="sign-in-form"  >
        <div class="input-field">
                <i class="fas fa-user-alt"></i>
                <input type="text" name="U_username" value={inputs.U_username} onChange={handleChange} placeholder="user name" required />
            </div>
            <div class="input-field">
                <i class="fas fa-key"></i>
                <input type="password" name="U_password" id="password" value={inputs.U_password} onChange={handleChange} placeholder="password" required />

                <div class="eye" onClick={password} ><i class="fa fa-eye" aria-hidden="true" id="eye"></i></div>

            </div>
            <a href="#" style={{marginleft: "10px", Fontsize: ".9rem",color:"rgb(243, 243, 243)"}}>Forgotten password?</a><br></br>
            <input type="submit" value="Sign In" class="btn"/>
        </form>
        <div class="sign-up-text">
            <h5>Hello Friends :)</h5>
            <p>Are you new to this website? Do you like what we offer ?you should 
            totally join our website and experience community. <Link to="/home">Registration Now... </Link></p>
        </div>
        </div>

        </div>
        </>
      );
     }
    export default Login;