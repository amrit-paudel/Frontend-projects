function fun(pagename,thiss,color){
    var tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0;i<=tabcontent.length-1;i++){
        tabcontent[i].style.display="none"; // this one is set so that othee element than clicked element have display node
    }
  document.getElementById(pagename).style.display="block"; // s when clicked display becomes block
  var tablinks=document.getElementsByClassName("tablinks");
  for(i=0;i<=tablinks.length-1;i++){
      tablinks[i].style.backgroundColor="white"; // so that other than clicked  tablinks have backgroundcolor white
  }
  thiss.style.backgroundColor=color;
}
document.getElementById("homeid").click(); // so that the first tablinks always remains clicked when page is loaded

// here what eer happens on clicking that everything i done inside the function 
// so everything required for the function should be passed as an arguement to the function
// for instance in above
/*
  1) show that tabcontent relate to clicked tab bar
  2) so related tabbar with the tabcontent
  3) same color to the tabbar and tabcontent after clicked
  4) when one tabbar is clicked other tabbar color should not change
  5) when one tabbar is clicked other tabcpntent than that which one is related with the clicked tabbar shouldnot be displayed.tabbar
*/