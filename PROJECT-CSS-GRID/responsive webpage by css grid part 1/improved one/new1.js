const menu=document.querySelector(".menu");
const nav=document.querySelector("nav");
const sections=document.querySelector(".sections");
menu.addEventListener("click",(e)=>{
    nav.classList.toggle("width");
    sections.classList.toggle("opacity");
    /*e.currentTarget.style.display="none";
    cross.style.display="block";*/                                                // IT IS APPLIED TO THE IN LINE so might bring problems and bugs later so do by below shown method
    e.currentTarget.classList.add("none");
    cross.classList.add("block");
})

const cross=document.querySelector(".cross");
cross.addEventListener("click",(e)=>{
    nav.classList.toggle("width");
    sections.classList.toggle("opacity");
   /* e.currentTarget.style.display="none";
    menu.style.display="block";*/
   e.currentTarget.classList.remove("block");
   menu.classList.remove("none");
})