import '../../css/indexpage.css';
import React, {useState, userEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
function Signup() {
    document.getElementById("title").innerHTML="Eflip | WELCOME BACK :)";
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
    ///Registertion work
            const [inputs, setInputs] = useState({
                Firstname:"",U_phone:"",U_username:"",LastName:"",address:"",U_email:"",password:"",cpassword:""
            });

           
    
            const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({...values, [name]: value}))
            }
 
            const validation=()=>{
                
                let formIsValid = true;

                //Name
                if (inputs.Firstname && inputs.Firstname.match(/^[a-zA-Z]+$/)) {
                    if (inputs.Firstname.length>20) {
                        formIsValid = false;
                        document.getElementById("firstname").innerHTML="FirstName Put only 20 Charecters";
                        
                    }
                    else{
                        document.getElementById("firstname").innerHTML="";
                    }
                }
                else{
                    formIsValid = false;
                    document.getElementById("firstname").innerHTML="FirstName Cannot be empty and only letter";
                }
                //Lastname
                if (inputs.LastName && inputs.LastName.match(/^[a-zA-Z]+$/)) {
                    if (inputs.LastName.length>20) {
                        formIsValid = false;
                        document.getElementById("LastName").innerHTML="LastName Put only 20 Charecters";
                        
                    }
                    else{
                        document.getElementById("LastName").innerHTML="";
                    }
                }
                else{
                    formIsValid = false;
                    document.getElementById("LastName").innerHTML="LastName Cannot be empty and only letter";
                }
                //email 
                if (inputs.U_email) {
                    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if(!inputs.U_email.match(mailformat))
                    {
                        formIsValid = false;
                        document.getElementById("U_email").innerHTML="Please Enter the proper email";
                    }
                    else{
                        document.getElementById("U_email").innerHTML="";
                    }
                    
                    }

                else{
                    formIsValid = false;
                    document.getElementById("U_email").innerHTML="Email Cannot be empty";
                }
                //phonenumber
                if (inputs.U_phone) {
                    if (inputs.U_phone.length>11) {
                        formIsValid = false;
                        document.getElementById("U_phone").innerHTML="Phone number only 11 number";
                        
                    }
                    else{
                        document.getElementById("U_phone").innerHTML="";
                    }
                }
                else{
                    formIsValid = false;
                    document.getElementById("U_phone").innerHTML="Phone number Cannot be empty";
                }
                //address
                if (inputs.address) {
                document.getElementById("address").innerHTML="";
                }
                else{
                    formIsValid = false;
                    document.getElementById("address").innerHTML="Address Cannot be empty";
                }
                //Username
                if (inputs.U_username && inputs.U_username.match(/^[a-zA-Z]+$/)) {
                    if (inputs.U_username.length>10) {
                        formIsValid = false;
                        document.getElementById("U_username").innerHTML="Username Put only 20 Charecters";
                        
                    }
                    else{
                        document.getElementById("U_username").innerHTML="";
                    }
                }
                else{
                    formIsValid = false;
                    document.getElementById("U_username").innerHTML="Username Cannot be empty and only letter";
                }
               //Password 
               if (inputs.password) {
                if (!inputs.password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) ) {
                    formIsValid = false;
                    document.getElementById("passwords").innerHTML="password must be a minimum of 8 characters including number, Upper, Lower And one special character";
                    
                }
                else{
                    document.getElementById("passwords").innerHTML="";
                }
            }
            else{
                formIsValid = false;
                document.getElementById("passwords").innerHTML="Password Cannot be empty ";
            }
            //Confirm Password
            if (inputs.cpassword) {
                if (!(inputs.password==inputs.cpassword)) {
                    formIsValid = false;
                    document.getElementById("cpasswords").innerHTML="password and Confirm password not match";
                    
                }
                else{
                    document.getElementById("cpasswords").innerHTML="";
                }
            }
            else{
                formIsValid = false;
                document.getElementById("cpasswords").innerHTML="confirm Password Cannot be empty ";
            }
                return formIsValid;

               
            }
            const [messages, setmessages] = useState([]);
            const handleSubmit = (event) => {
                
                event.preventDefault();
                if (validation()) {
                   
                    axios.post("https://localhost:44301/api/user/Registertion",inputs)
                    .then(resp=>{
                        var userinfos = resp.data;
                        console.log(userinfos);
                        setmessages(resp.data);
                       if(userinfos!=null)
                       {
                        window.location="/login";
                       }
                        
                    }).catch(err=>{
                        console.log(err);
                    });


                  } else {
                    
                  }
                
              }

            
    return (
        <>
                <a href="/">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/2833/2833228.png" />
            <h3>Med<span style={{color:"deeppink" }}>life</span></h3>
        </div>
    </a>
        
        <div class="sign-body">

    

            <form onSubmit={handleSubmit} method="POST" className="sign-up" >

            <div className="regis-title">
                <h1>Registertion</h1>
                <div className="title-line"></div>
                <h3>This Will help you manage all your activities.</h3>
                <p>Let's get you set up you can verify your personal account and 
                    setting up your profile.</p>
            </div>


                <input type="hidden" value={inputs.usertype} name="usertype" />
                <input type="hidden" value={inputs.profileimg} name="profileimg" />

                <div className="sign-up-form">

                <div style={{width:"400px"}}>

                    <div className="input-field">
                        <i className="fa fa-user"></i>
                        <input type="text" name="Firstname" value={inputs.Firstname}  placeholder="First name" onChange={handleChange}/>
                    </div>
                    <span className="error" id="firstname" style={{position:"absolute",top:"37%"}} ></span>

                    <div className="input-field">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <input type="tel" name="U_phone" value={inputs.U_phone}  placeholder="Phone number" onChange={handleChange}/><br/><span></span>
                    </div>
                    <span className="error" id="U_phone" style={{position:"absolute",top:"50%"}} ></span>

                    <div className="input-field">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <input type="text" name="U_username" value={inputs.U_username}   placeholder="User name" onChange={handleChange}/>
                    </div>
                    <span className="error" id="U_username" style={{position:"absolute",top:"63%"}} ></span>

                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="password" id="password" value={inputs.password}  placeholder="Password" onChange={handleChange}/>
                        <div className="eye" onClick={password}><i className="fa fa-eye" aria-hidden="true" id="eye"></i></div> 
                    </div>
                    <span className="error" id="passwords" style={{position:"absolute",top:"75%"}} ></span>
                    
                </div>

                <div style={{width:"400px"}}>

                        <div className="input-field">
                        <i className="fa fa-user"></i>
                        <input type="text" name="LastName" value={inputs.LastName}  placeholder="Last name" onChange={handleChange}/>
                        </div>
                        <span className="error" id="LastName" style={{position:"absolute",top:"37%"}} ></span>

                        <div className="input-field">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <input type="text" name="address" value={inputs.address}  placeholder="Address" onChange={handleChange}/>
                        </div>
                        <span className="error" id="address" style={{position:"absolute",top:"50%"}} ></span>

                        <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <input type="text" name="U_email" value={inputs.U_email}  placeholder="Email" onChange={handleChange}/>
                        </div>
                        <span className="error" id="U_email" style={{position:"absolute",top:"63%"}} ></span>

                        <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="cpassword" value={inputs.cpassword} id="cpassword"   placeholder="Confirm Password" onChange={handleChange}/>
                        <div className="eye" onClick={cpassword}><i className="fa fa-eye" aria-hidden="true" id="ceye" ></i></div> 
                        </div>
                        <span className="error" id="cpasswords" style={{position:"absolute",top:"75%"}} ></span>
                        
                    </div>

                </div>

                <div className="checkbox-form">
            <input type="Checkbox" required /><span style={{marginTop: "-5px;"}}> I agree to all <a href="">Teams</a> , <a href="">Privacy policy</a> and <a href="">Fees</a></span>.
            </div>

         
            
             <input type="submit"  id="submitreg"  className="btn" value="Create Account" />

            </form>

   

        

    </div>


         



        </>
      );
    
}

export default Signup;
