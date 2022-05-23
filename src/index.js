function showTab(event, tabName) {
  //alert('test');
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("window-content");
  for (i=0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";   
  }

  // tablinks = document.getElementsByClassName("tablinks");
  // for ( i=0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace("active", "");   
  // }
  document.getElementById(tabName).style.display = "block";
  if (event.currentTarget.className === "active"){
    event.target.classList.remove("active");
  }
  else {
    event.target.classList.add("active");
  }
  // event.currentTarget.className -= " active";
  // event.currentTarget.className += " active";
}