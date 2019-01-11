// Solution goes here
$(document).ready(function () {
    let displayName = $("#display-name").val();
    console.log(displayName);
    let pwd = $("#pass").val();
    let pwdConfirmation = $("#pass-confirm").val(); //^[a-zA-Z0-9]{8,}$ #8 or more characters
    let email = $("#email").val();
    //let veldenCheck = /^([a-zA-Z0-9_-]){5,}$/;

    //checken op min 5 chars 
    function checkVijf() {
        let displayName = $("#display-name").val();
        if (displayName.length <= 5) {
            $("#mistake").show();
            $("#display-name").css('border', 'red solid 5px')
        } else{
            $("#mistake").hide();
            $("#display-name").css('border', 'green solid 5px')
        }
    }

    //check zelfde password
    function samePW(){
        let pwd = $("#pass").val();
        let pwdConfirmation = $("#pass-confirm").val(); 
        // wachtwoord checken op 5 chars and beide input waarde hetzelfde zijn
        if( pwd.length <= 5 ||  pwd != pwdConfirmation){
            $("#mistake").show()
            $("#pass").css('border', 'red solid 5px')
            $("#pass-confirm").css('border', 'red solid 5px')
        } else {
            $("#pass").css('border', 'green solid 5px')
            $("#pass-confirm").css("border","green solid 5px");
        }
    }

    //  e-mail check
    function emailCheck(){
        let email = $("#email").val();
       if(email.includes("@")){
        $("#email").css("border","green solid 5px")
       } else {
        $("#email").css("border","red solid 5px")
       }
    }

/*//reset velden
function resetForm(){
    $("form").reset();
}

*/

    // start check with click
    $("#send").click(function (event) {
        checkVijf();
        samePW();
        emailCheck();
        event.preventDefault(event);

       ;
    })

 /*  $("#reset").click(function(event){
        $("form").trigger("reset"); 
        event.preventDefault(event)
    })
    */
});
