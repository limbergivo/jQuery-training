// globale var gemaakt. Met de waarde van Salaris
var salarisWaarde = $("#Salaris").val();
var aantalKinderen = $("#aantalKinderen").val();

// Uitgaven: 18%;
function uitgavenProcent(){
    let uitgaven = salarisWaarde / 100 * 18;
    return uitgaven;
    
}

//Verzekering: 7%
function procentVerzekering(){
    let verzekering = salarisWaarde / 100 * 7;
    return  verzekering;
}

// Bijrdagen 5%
function procentBijdrage(){
    let bijdragen = salarisWaarde / 100 * 5;
    return bijdragen;
}
// De kosten van belastingen aftrekken van ingevoerde salaris
function salarisKosten(kosten){
   let aftrekkingKosten = salarisWaarde - kosten;
    return aftrekkingKosten;
}
// 2 procent korting op de kosten 
function vrouwKorting(kosten){
    let kortingVrouw = kosten / 100 *2;
    return kortingVrouw;
}
// 1 procent korting op de kosten
function kinderenDrie(kosten){
    let drieKinderen = kosten / 100 * 1;
    return drieKinderen;
}
// 4 procent korting op de kosten
function kinderenVier(kosten){
    let vierKinderen = kosten / 100 * 2;
    return vierKinderen;
}

$( document ).ready(function() {
    $("#submit").click(function(event){
        event.preventDefault(event);
        salarisWaarde = $("#Salaris").val();
        aantalKinderen =$("#aantalKinderen").val(); 
        let kosten = uitgavenProcent() +   procentVerzekering() + procentBijdrage(); 
        let selectVrouw = $("#geslacht").val();
        let kostenKortingVrouw = 0;
        let kostenKortingDrie = 0;
        let kostenKortingVier = 0;
        //console.log(kosten);
        let nettoloon = salarisKosten(kosten);
        //console.log(nettoloon);
        if (selectVrouw === 'vrouw'){
            //onsole.log(kosten);
          kostenKortingVrouw = vrouwKorting(kosten);
          //console.log(kosten);
        } if (aantalKinderen === "3"){
            kostenKortingDrie = kinderenDrie(kosten);
            //console.log(kostenKortingDrie);
        } if (aantalKinderen === "4") {
            kostenKortingVier = kinderenVier(kosten);
        }
        // totaal kosten - de korting
        kosten = kosten - kostenKortingDrie - kostenKortingVier - kostenKortingVrouw;
        $("#nettoloon").html(salarisWaarde - kosten);
    })
});