let x = 0;
let textEffect = "Want a new website? Let me design it for you!";
let container = document.getElementById("typing");


window.addEventListener('load', animateh1());

function animateh1() {
    if( x< textEffect.length) {
        container.innerHTML+= textEffect.charAt(x);
        x++;
        setTimeout(animateh1, 80);
    }
}

let button = document.querySelector(".btn1");
let modalBg = document.querySelector(".modal-bg");
let close = document.querySelector(".modal-close");
let ulArray = document.querySelectorAll(".nav-link-style");
let login = ulArray[3];
let signUp = ulArray[4];
let modal = document.querySelector(".modal");



let w = window.innerWidth;
const html = document.getElementsByTagName("html");

close.addEventListener("click",function(){
modalBg.classList.remove("bg-active");
});

login.addEventListener("click", function(){
modalBg.classList.add("bg-active");
modalBg.classList.add("login");
});



const hamburger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');


if (w<=768){
  login.addEventListener("click", function(){
    navLinks.classList.remove("open");
    });
  
}

hamburger.addEventListener("click", () => {
navLinks.classList.toggle('open');
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});



