/*$("#groter").click(function() {
        $("#text").animate({height:  "+=10px" })
});*/

$("#groter").click(function () {
    if ($("textarea").height() >= 100) {
        $("#text").height("5em");
    } else {
        $("#text").animate({
            height: "+=10px"
        })
    }
});

//verander achgergrond kleur
$("#kleur").click(function () {
    $("#text").css("background-color", "green");
});

//standaard kleur
$("#kleurReset").click(function () {
    $("#text").css("background-color", "white");
});

//toont text vak
$("#show").click(function () {
    $("#text").show();
});


// verstopt textvak
$("#hide").click(function () {
    $("#text").hide();
});