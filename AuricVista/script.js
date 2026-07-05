// Fade animation
document.body.style.opacity = "0";

window.onload = () => {
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 1s";
};

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    }

    updateCounter();

});

// Mobile Menu

const menu=document.getElementById("menuToggle");
const nav=document.getElementById("navLinks");

menu.onclick=function(){

nav.classList.toggle("active");

};
// Reveal Animation

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const height=window.innerHeight;

if(top<height-100){

section.classList.add("active");

section.classList.add("reveal");

}

});

});