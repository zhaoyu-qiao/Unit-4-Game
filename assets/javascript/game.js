$(document).ready(function () {
    //Define all the variables
    let wins = 0;
    let losses = 0;
    let userInput = 0;
    let totalValue = 0;
    let crystal1Value = 0;
    let crystal2Value = 0;
    let crystal3Value = 0;
    let crystal4Value = 0;

    const images = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"];
    //write crystal image to the image / button element under crystal div - array of image paths,.html()
    //can i change this to be esiser?
    $("#btn-1").html("<img src=" + images[0] + " width='400px'>");
    $("#btn-2").html("<img src=" + images[1] + " width='400px'>");
    $("#btn-3").html("<img src=" + images[2] + " width='400px'>");
    $("#btn-4").html("<img src=" + images[3] + " width='400px'>");

    /*for (i = 0; i < 4; i++) {
        $("#btn-" + i).html(images[i]);
        console.log($("#btn-i").html(images[i]));
    }*/

    //generate random totalValue - math random math floor  (19-120)
    function randomTotalGenerator() {
        randomTotal = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        return randomTotal;
    }
    totalValue = randomTotalGenerator();
    $("#target-value").html("Taget Value: " + totalValue);
    console.log(randomTotal);

    //generate random crystalValue - four of them (1-12) write random value to an array?
    function randomCrystalGenerator() {
        randomcrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        return randomcrystal;
    }

    //assign the random value to each of the crystals
    crystal1Value = randomCrystalGenerator();
    crystal2Value = randomCrystalGenerator();
    crystal3Value = randomCrystalGenerator();
    crystal4Value = randomCrystalGenerator();

    console.log(crystal1Value);
    console.log(crystal2Value);
    console.log(crystal3Value);
    console.log(crystal4Value);


    //reset function should reset everything, includ the random number of totalValue and crystal values.
    function reset() {
        totalValue = randomTotalGenerator();
        crystal1Value = randomCrystalGenerator();
        crystal2Value = randomCrystalGenerator();
        crystal3Value = randomCrystalGenerator();
        crystal4Value = randomCrystalGenerator();
        return;
    }

    //write crystal values to the buttons .val()
    $("#btn-1").val(crystal1Value);
    console.log($("#btn-1").val(crystal1Value));
    $("#btn-2").val(crystal2Value);
    $("#btn-3").val(crystal3Value);
    $("#btn-4").val(crystal4Value);


    //log userInput value using click function 
    //add userInput value together back to itself  (crystalvlue in the buttons)
    //need to also write userinput on the screen
    $(".crystals").click(function () {
        userInput += parseInt($(this).val());
        console.log($(this).val());
        console.log(userInput);

        //compare userInput and totalValue, if ===, wins++, if !==, losses++, reset game
        if (totalValue === userInput) {
            wins++;
            alert("You win!");
            $("#wins").html("Wins: " + wins);
            $("#total-score").html("Total score: " + userInput);
            reset();
        } else if (totalValue < userInput) {
            losses++;
            alert("You lose!");
            $("#losses").html("Losses: " + losses);

            $("#total-score").html("Total score: " + userInput);
            reset();
        } else {
            $("#total-score").html("Total score: " + userInput);
        }

    })
})