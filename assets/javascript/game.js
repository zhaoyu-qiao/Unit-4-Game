$(document).ready(function () {
    //Define all the variables
    let wins = 0;
    let losses = 0;
    let userInput = 0;
    let totalValue = 0;

    //define array of image path, easier to retrieve
    const images = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"];

    //write crystal image to the image / button element under crystal div - array of image paths,.html()
    for (i = 0; i < 4; i++) {
        $("#btn-" + (i + 1)).html("<img src=" + images[i] + " width='100px'>");
        console.log($("#btn-i").html("<img src=" + images[i] + " width='100px'>"))
    }

    //generate random totalValue - math random math floor  (19-120)
    function randomTotalGenerator() {
        totalValue = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#target-value").html("<b>Taget Value: </b>" + totalValue);
        console.log('totalVal : ', totalValue);
        // return totalValue;
    }
    //totalValue = randomTotalGenerator(); You've already declare total value, no need to declare again.

    //generate random crystalValue - four of them (1-12), need to write their values to each of the buttons.
    function randomCrystalGenerator() {
        randomcrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        return randomcrystal;
    }

    //reset function should reset everything, except for losses and wins value
    function reset() {
        randomTotalGenerator();

        //write crystal values to the buttons .val()
        //defined four crystalValue variables which are not needed anymore, since writing the values into the buttons and use .val() to grab the value.
        for (i = 0; i < 4; i++) {
            $("#btn-" + (i + 1)).val(randomCrystalGenerator()); // simply using .val() on the randomgenerator function
        }

        userInput = 0;
        $("#total-score").html("<b>Total score: </b>" + userInput);

        return;
    }

    console.log(reset());

    reset();
    //Use for loops to replace below repetitive code
    /*$("#btn-1").val(crystal1Value);
    $("#btn-2").val(crystal2Value);
    $("#btn-3").val(crystal3Value);
    $("#btn-4").val(crystal4Value);*/


    //log userInput value using click function 
    //add userInput value together back to itself  (crystal value in the buttons)
    //need to also write userinput on the screen
    $(".crystals").click(function () {
        userInput += parseInt($(this).val());
        console.log($(this).val());
        console.log('user in: ', userInput, totalValue);

        //compare userInput and totalValue, if ===, wins++, if !==, losses++, reset game
        if (totalValue === userInput) {
            wins++;
            $("#total-score").html("<b>Total score: </b>" + userInput);
            alert("You win!");
            $("#wins").html("<b>Wins: </b>" + wins);
            reset();
        } else if (totalValue < userInput) {
            losses++;
            $("#total-score").html("<b>Total score: </b>" + userInput);
            alert("You lose!");
            $("#losses").html("<b>Losses: </b>" + losses);
            reset(); // call your functions at the right place!
        } else {
            $("#total-score").html("<b>Total score: </b>" + userInput);
        }

    }) //Close click function
}) //Close $(document).ready