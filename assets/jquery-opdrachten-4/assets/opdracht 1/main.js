let keuze = ["Rock", "Paper", "Scissors"]; //nieuwe array maken
// start van u functie on click
$("#speel").on("click", function () {
    let choicePlayer = $("#choice option:selected").text();
    let cpuSpeler = Math.floor(Math.random() * 3);
    let choiceComputer = keuze[cpuSpeler];
    //console.log(choicePlayer, choiceComputer);

    if (choiceComputer === choicePlayer) {
        alert("gelijspel");
    } else {
        // als speler keuze gelijk is aan rock en cpu speler aan schaar wint speler
        if (choicePlayer === "Rock" && choiceComputer === "Scissors") { 
            alert(" player jij wint");
            // als speler rock pakt en cpu papier wint computer
        } else if (choicePlayer === "Rock" && choiceComputer === "Paper") {
            alert("Computer Jij wint");
            // als speler papier heeft en cpu steen wint player
        } else if (choicePlayer === "Paper" && choiceComputer === "Rock") {
            alert("Player wint");
            //als speler  papier heeft en cpu schaat wint computer
        } else if (choicePlayer === "Paper" && choiceComputer === "Scissors") {
            alert('Compuer wint');
            //als speler schaar heeft en cpu steen wint computer
        } else if (choicePlayer === "Scissors" && choiceComputer === "Rock") {
            alert("Computer wint");
        } else {
            alert("Player wint!");
        }

    }
});