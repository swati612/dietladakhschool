$(".clickable").click(function () {
    $(".menu").slideToggle(400);
});
$(".first").click(function () {
    $(this).find("ul").slideToggle(400);
});


      function openPage(pageName, elmnt, color, backgroundcolor) {
         var i, tabcontent, tablinks;
         tabcontent = document.getElementsByClassName("tabcontent");
         for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
         }
         tablinks = document.getElementsByClassName("tablink");
         for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.color = "";
            tablinks[i].style.backgroundColor = "";
         }
         document.getElementById(pageName).style.display = "block";
         elmnt.style.color = color;
      }

      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
