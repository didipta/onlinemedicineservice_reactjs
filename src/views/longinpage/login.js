import React from 'react';
import '../../css/indexpage.css';
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
        <form class="sign-in-form" method="POST">
        <div class="input-field">
                <i class="fas fa-user-alt"></i>
                <input type="text" name="user_name" id="username" placeholder="user name" required />
            </div>
            <div class="input-field">
                <i class="fas fa-key"></i>
                <input type="password" name="password_s" id="password" placeholder="password" required />

                <div class="eye" onClick={password} ><i class="fa fa-eye" aria-hidden="true" id="eye"></i></div>

            </div>
            <a href="#" style={{marginleft: "10px", Fontsize: ".9rem",color:"rgb(243, 243, 243)"}}>Forgotten password?</a><br></br>
            <input type="submit" value="Sign In" class="btn"/>
        </form>
        <div class="sign-up-text">
            <h5>Hello Friends :)</h5>
            <p>Are you new to this website? Do you like what we offer ?you should 
            totally join our website and experience community. <a href="/home">Registration Now... </a></p>
        </div>
        </div>

        </div>
        </>
      );
     }
    export default Login;