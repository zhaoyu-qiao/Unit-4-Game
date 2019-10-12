$(document).ready(function () {
    //Define all the variables
    let wins = 0;
    let losses = 0;
    let userInput = 0;
    let totalValue = 0;


    const images = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"];


    //write crystal image to the image / button element under crystal div - array of image paths,.html()
    for (i = 0; i < 4; i++) {
        $("#btn-" + (i + 1)).html("<img src=" + images[i] + " width='100px'>");
        console.log($("#btn-i").html("<img src=" + images[i] + " width='100px'>"))
    }

    //generate random totalValue - math random math floor  (19-120)
    function randomTotalGenerator() {
        totalValue = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#target-value").html("Taget Value: " + totalValue);
        console.log('totalVal : ', totalValue);

        // return totalValue;
    }
    //totalValue = randomTotalGenerator();
    //$("#target-value").html("Taget Value: " + totalValue);
    //randomTotalGenerator();
    //generate random crystalValue - four of them (1-12) write random value to an array?
    function randomCrystalGenerator() {
        randomcrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        return randomcrystal;
    }



    //reset function should reset everything, include the random number of totalValue and crystal values.
    function reset() {
        randomTotalGenerator();
        for (i = 0; i < 4; i++) {
            $("#btn-" + (i + 1)).val(randomCrystalGenerator());
        }


        userInput = 0;
        $("#total-score").html("Total score: " + userInput);

        return;
    }

    console.log(reset());

    reset();
    //write crystal values to the buttons .val()
    /*$("#btn-1").val(crystal1Value);
    console.log($("#btn-1").val(crystal1Value));
    $("#btn-2").val(crystal2Value);
    $("#btn-3").val(crystal3Value);
    $("#btn-4").val(crystal4Value);*/


    //log userInput value using click function 
    //add userInput value together back to itself  (crystalvlue in the buttons)
    //need to also write userinput on the screen
    $(".crystals").click(function () {
        userInput += parseInt($(this).val());
        console.log($(this).val());
        console.log('user in: ', userInput, totalValue);

        //compare userInput and totalValue, if ===, wins++, if !==, losses++, reset game
        if (totalValue === userInput) {
            wins++;
            $("#total-score").html("Total score: " + userInput);
            alert("You win!");
            $("#wins").html("Wins: " + wins);
            reset();
        } else if (totalValue < userInput) {
            losses++;
            $("#total-score").html("Total score: " + userInput);
            alert("You lose!");
            $("#losses").html("Losses: " + losses);
            reset(); // call your functions at the right place!
            //$("#losses").html("Losses: " + losses);

        } else {
            $("#total-score").html("Total score: " + userInput);
        }

    })
})