$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("#instructions li:first").on("click", function(){
        $("#content").css("fontSize", "120%");
    });
    
    /* On click: Decrease the font size (80%) */
  $("#instructions li:nth-child(2)").on("click", function(){
      $("#content").css("fontSize", "80%");
  });
    /* On click: Bold or normalize the green words */
    $("#instructions li:nth-child(3)").on("click", function(){
        $(".green").toggleClass("bold");
    });

    /* Click here to underline or normalize the words in red*/
    $("#instructions li:nth-child(4)").on("click", function(){
    $(".red").toggleClass("underline");
    });

    /* On click: Replace the logo with another image */
    $("#instructions li:nth-child(5)").hover(function(){
        $("img").attr("src", "/Opdracht_7/images/koala.jpg");},
        function(){
            $("img").attr("src", "/Opdracht_7/images/jquery-logo.png");
});
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").mouseover(function(){
        $(this).attr("title", $(this).attr("href")); // een title attr op de href toepassen voor tooltip
    });
  
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("#instructions li:nth-child(7)").on("click",function(){
        $("h2").eq(0).before("<h1>Chapter 1</h1>"); // op index  nummer iets toevoegen aan document
        $("h2").eq(1).before("<h1>Chapter 2</h1>");
      });
});