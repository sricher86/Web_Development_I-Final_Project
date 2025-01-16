function openPage(pageName, elmnt, color, txtColor) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "inline-block";
    document.getElementById(pageName).style.height = "100%";

  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    elmnt.style.color = txtColor;
  }
  
  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();