// first getting all the required things for the javscript

var tabs=document.querySelectorAll(".tab-item");
var containers=document.querySelectorAll(".container");

tabs.forEach(function(currentab){
    currentab.addEventListener("click",setborderncontainer);
})

// setting border function 

function setborderncontainer(e){
    removeborder();
    this.classList.add("tab-border");
    removecontainer();
    document.querySelector(`.container-${this.id}`).classList.add("show");
  // console.log(document.querySelector(`.container-${this.id}`))
    
}
// removing border of other than this element 
function removeborder(){
   tabs.forEach(function(item){
       item.classList.remove("tab-border");
   })
}

//removing unnecessary containers 
function removecontainer(){
containers.forEach(function(item){
    console.log(item)
    item.classList.remove("show");
})
}

