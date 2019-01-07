// Wanneer je op een kleurknop klikt, verander je de kleur van de tekst van de div.
// maakt de de tekst groen door een klik te doen op groen
$("#green").on("click", function(){
$("#text").css("color","green");
});

// maakt de tekst rood door op rood te klikken
$("#red").on('click', function(){  // selecteert welk element  en bij klik
    $("#text").css("color", "red"); // de tekst rood maakt door id text te selecteren
});

//maakt de tekst blauw door op het blauw te klikken
$("#blue").on("click", function() {
    $("#text").css("color", "blue"); 
});