var btn=document.getElementsByClassName("btn");
for(i=0;i<=btn.length-1;i++){
    btn[i].addEventListener("click",function(){
        
        var para=this.nextElementSibling;
        if(para.style.display==="none"){para.style.display="block"}
        else{para.style.display="none"}
    })
}