/*click volgende
click terug


volgende slide: Selecteer ul -> door gaan en +1 doen voor naar volgende te gaan
slide terug : terug gaan door - 1 */ 

//console.log(slider);
var myList = $("ul li");
//console.log(myList);
var huidigeIndex = 0;

function next(){
    // hide van element 
myList.eq(huidigeIndex).hide();  
// var + 1 volgende slide
huidigeIndex += 1; 
// huidige index gelijk is aan de lengte van de array ga naar eerst slide
if (huidigeIndex === myList.length){
    // naar de eerste slide gaan
    huidigeIndex = 0; 
}
// toont deze slide
myList.eq(huidigeIndex).show();  
}

//vorige slide
function previous(){
    //verbergt de foto
    myList.eq(huidigeIndex).hide(); 
    // Naar de vorige slide terug gaan
    huidigeIndex -= 1; 
    // als de huidigeindex kleiner is dan 0 
    if (huidigeIndex < 0){ 
        // dan gaan we naar de laatste foto door -1 te doen
        huidigeIndex = myList.length-1;  
    }
    // toont deze slide
    myList.eq(huidigeIndex).show(); 
    }

// aanmaken functie autoscroll    
var autoscroll = function  () {
        setTimeout(function () {
            previous();
            autoscroll(); // restarts the function
        }, 1000);
    };

/*aanroepen functie*/ 
autoscroll();

// click functie voor button volgende
$("#volgende").click(function(){
    next();
})
// click functie voor button terug
$("#terug").click(function(){
    previous();
})

