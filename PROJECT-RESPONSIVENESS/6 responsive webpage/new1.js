var anchorlist=document.getElementsByTagName("a");


for(i=1;i<=anchorlist.length-1;i++){
    anchorlist[i].addEventListener("click",fun);
}
function fun(){
    this.classList.toggle("togclass");
}