$( document ).ready(function() {
    $("#check").click(function(event){
        event.preventDefault(event)
        let naam = $("#naam").val();
        let voorNaam = $("#voornaam").val();
        let email = $("#email").val();
        let telefoonNummer = ("#telefoonnummer");
        let telCheck = /^[0-9]*$]/;
        let controleNaam = /\d/;
        //controle op cijfers bij input van naam
        if(!(naam.match(controleNaam) == null)){
            alert("Je naam mag geen nummers bevatten!");
            return null;
        };

        //controlen op voornaam input veld. 
        if(!(voorNaam.match(controleNaam) == null)){
            alert("Je voornaam mag geen nummers bevatten!");
            return null;
        };

        //controlen op e-mail uitvoeren
        if(!(email.includes("@"))){
            alert("Dit is geen e-mail adres");
            return null;
        };

        // controleren dat er alleen nummers aanwezig zijn
        if(!(telefoonNummer.match(telCheck))){
            alert("Enkel cijfers toegestaan bij telefoon nummer");
            return null;
        };
    })

});