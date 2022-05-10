import React, {useState, useEffect} from "react";
import '../../css/profilepage.css'
import axios from "axios";
import {files} from "react";
const Userprofile = (props)=>{
    //image block or none
    function myFunction() {
        document.getElementById("profileimg").style. display = "block";
      }
      function myFunction2() {
        document.getElementById("profileimg").style. display = "none";
      }

      var img="/img/"+props.Systemuser.U_profileimg;

      const [inputs, setInputs] = useState({
        id:"", name:"",address:"",U_email:"",U_phone:"",U_username:"",password:"",imgfile:""
     });



     useEffect(()=>{
         setInputs(values => ({...values,id:props.Systemuser.Id, name: props.Systemuser.U_name,address:props.Systemuser.U_address,
             U_email:props.Systemuser.U_email,U_username:props.Systemuser.U_username,
             U_phone:props.Systemuser.U_phone,password:props.Systemuser.U_password
         
         
         }))
     },[props.Systemuser]);
     const [inputimg, setInputing] = useState({
        id:"",imgfile:""
     });
  
     const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        /*setInputspassword(values => ({...values, [name]: value}))*/
      }

      var img="/img/"+props.Systemuser.U_profileimg;
      ///file handle///////////////////////////////////////
      const [file,setfile]=useState("")
      function handlefile(file)
      {
        setfile(URL.createObjectURL(file.target.files[0]))
      }
      const handleSubmitimg = (event) => {
        var fullPath = document.getElementById('imgfile').value;
       
        if (fullPath) {
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                inputimg.imgfile = filename.substring(1);
                

            }
        }
        event.preventDefault();

        axios.post("https://localhost:44301/api/user/profileimgch",inputimg)
        .then(resp=>{
            var userinfos = resp.data;
            console.log(userinfos);
            alert("Thank You Change your profile img");
            window.location="/home";
        }).catch(err=>{
            console.log(err);
        });
        console.log(inputimg);
      }

       
        return(
            <div>
                <section id="profile-info">
                <div class="img">

                <img src={img} alt="" />

                <label class="Add-file" onClick={myFunction}><i class="fa fa-camera" aria-hidden="true"></i></label>
                </div>
                <form action="/User/Profileedit" method="Post" class="profile-form">
                <input type="hidden" name="id" value="@Model.Id"/>
                <fieldset>
                    <legend><p>Username</p></legend>
                    <div class="input-file">
                        <input type="text" name="name"  value={inputs.name} placeholder="username" onChange={handleChange}/><br/>
                    </div>

                </fieldset>
                

        <fieldset>
            <legend><p>Address</p></legend>
            <div class="input-file">
                <input type="text" value={inputs.address} name="address" placeholder="Address" onChange={handleChange}/><br/>
            </div>

        </fieldset>
       

        <fieldset>
            <legend><p>Email</p></legend>
            <div class="input-file">
                <input type="text" id="U_email" value={inputs.U_email} name="U_email" placeholder="Email" readonly/><br/>
            </div>

        </fieldset>

        <fieldset>
            <legend><p>User Name</p></legend>
            <div class="input-file">
                <input type="text" id="U_username" value={inputs.U_username} name="U_username" placeholder="User Id" readonly/><br/>
            </div>

        </fieldset>

        <fieldset>
            <legend><p>Phone Number</p></legend>
            <div class="input-file">
                <input type="text" id="U_phone" value={inputs.U_phone} name="U_phone" placeholder="Phone Number" readonly/><br/>
            </div>

        </fieldset>


        <input type="submit" name="submit" value="Save" class="btn"></input>
                </form>
                </section>


        <div id="profileimg">
       <div onClick={myFunction2}> <i class="fa fa-times" aria-hidden="true" ></i></div>

        <form onSubmit={handleSubmitimg} class="profile-form" enctype="multipart/form-data">
            <input type="hidden" name="id" value={inputimg.id=inputs.id}/>
            <div class="img">
  
              <img src={file||img} alt="" id="blah"/>
              
              <label for="imgfile" class="Add-file"><i type="file" class="fa fa-plus" aria-hidden="true"></i></label>
              <div class="file-style"> <input type="file" name="imgfile" id="imgfile" onChange={handlefile}/></div>
              <br/> <button class="btn">save</button>
          </div>
       </form>

    </div>


                
    
                
            </div>
        )
    }
   
export default  Userprofile;