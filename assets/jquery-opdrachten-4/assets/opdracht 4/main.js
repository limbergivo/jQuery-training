$( document ).ready(function() {
    //Lesley Forn, Geboren op 11/11/1987 in Amsterdam, momenteel een Coach in Genk.
    $('#check').click(function(event){
        event.preventDefault(event)
        let naam = $("#naam").val();
        let voorNaam = $("#voornaam").val();
        let geboorteDatum = $("#geboortedatum").val();
        let geboortePlaats = $("#geboorteplaats").val();
        let werk = $("#werk").val();
        alert( naam +  " " + voorNaam + " , Geboren op  " + geboorteDatum  + " In " + geboortePlaats + (" en werkt als ") + werk) ;
    })
});


