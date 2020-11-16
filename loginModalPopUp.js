let ulArray = document.querySelectorAll(".nav-link-style");
let login = ulArray[3];
let modalBg = document.querySelector(".modal-bg");
let close = document.querySelector(".modal-close");

let w = window.innerWidth;

const hamburger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');

close.addEventListener("click",function(){
    modalBg.classList.remove("bg-active");
    });
    
    login.addEventListener("click", function(){
    modalBg.classList.add("bg-active");
    modalBg.classList.add("login");
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    });

    if (w<=768){
        login.addEventListener("click", function(){
          navLinks.classList.remove("open");
          });
        
      }

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle('open');
        });