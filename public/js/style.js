﻿$(window).on("load", function () {
    $('#preloader').fadeOut(7000);
});
/*
var sliders=document.querySelectorAll('.slider');
var btns= document.querySelectorAll('.btn');
let currentslider=1;


//javascript for image slider manual navigation

var manualnav =function(manual){

    sliders.forEach((slide)=>{
        slide.classList.remove('active');

    btns.forEach((btn)=>{
        btn.classList.remove('active');
    });

    });

    sliders[manual].classList.add('active');
    btns[manual].classList.add('active');
}


btns.forEach((btn,i) => {

    btn.addEventListener("click",() =>{
        manualnav(i);
        currentslider=i;
    });

});

//javaacript for image slider autoplay navigation

let repeat = function(activeclass){
    let active=document.getElementsByClassName('active');
    let i=1;

    var repeater=()=>
    {
        setTimeout(function(){
        
            [...active].forEach((activeslider)=>{
               activeslider.classList.remove('active');
            });

         sliders[i].classList.add('active');
         btns[i].classList.add('active');
         i++;
         

         if(sliders.length==i)
         {
             i=0;
         }
         if(i>= sliders.length)
         {
             return;
         }
         repeater();
        },6000);
        
    }
    repeater();
}
repeat();
*/



function myFunction() {
    document.getElementById("profileimg").style.display = "block";
}
function myFunction2() {
    document.getElementById("profileimg").style.display = "none";
}





function bkashclick() {

    document.getElementById("bkashback").style.display = "block";
    document.getElementById("cardback").style.display = "none";
    document.getElementById("cashback").style.display = "none";
}
function cashclick() {
    document.getElementById("bkashback").style.display = "none";
    document.getElementById("cashback").style.display = "block";
    document.getElementById("cardback").style.display = "none";
}
function cardclick() {
    document.getElementById("bkashback").style.display = "none";
    document.getElementById("cashback").style.display = "none";
    document.getElementById("cardback").style.display = "block";
}
function backclick() {
    document.getElementById("payment").style.display = "none";

}
function checkclick() {
    document.getElementById("payment").style.display = "block";
}



function password() {

    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('eye').style.color = "rgba(116, 116, 116, 0.781)";


    }
    else {
        x.type = "password";
        document.getElementById('eye').style.color = "rgba(43, 43, 43, 0.781)";
    }
}

function cpassword() {

    var y = document.getElementById("cpassword");
    if (y.type === "password") {
        y.type = "text";
        document.getElementById('ceye').style.color = "rgba(116, 116, 116, 0.781)";


    }
    else {
        y.type = "password";
        document.getElementById('ceye').style.color = "rgba(43, 43, 43, 0.781)";
    }
}