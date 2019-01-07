// Wanneer de gebruiker op een veld gefocused, stelt u de rand ervan in op "1px solid green". Wanneer het veld niet meer scherp is, zet de rand op "1px solid red".
// kiezen op ID en gebruiken focus als we in een veld zitten
$("#name").focusin(function(){
    $(this).css("border", "5px solid green");
});

$("#name").focusout(function(){
    $(this).css("border", "5px solid red");
});