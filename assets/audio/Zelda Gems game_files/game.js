$(document).ready(function () {
    var game = {
        item: ["Ocarina of Time", "Master Sword", "Boomerang", "Bomb", "Bow", "Arrow", "Recorder", "Food", "Container Heart"],
        score: 0,
        wins: 0,
        losses: 0,
        checkloss: false,
        checkwin: false
    }
    /*
    The lines of code below are used to activate the play and pause button at the top that plays the zelda theme at the top of the page
    */
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/audio/zelda.mp3");
    $("#play").on("click", function () {
        audioElement.play();
    });
    $("#pause").on("click", function () {
        audioElement.pause();
    });
    /*
    The lines of code below are used to activate sounds on each of the buttons when pressed as the user is clicking each gemstone, creating the sound, and generating a number between 1 and 12 
    */
    var gemElement = document.createElement("audio");
    gemElement.setAttribute("src", "assets/audio/ruppee.wav");
    $("#red_gem").on("click", function () {
        gemElement.play();
        var gem_value = game.score + Math.floor(Math.random() * 13);
        var total = game.score + gem_value;
        $("#score_value").html(total); //setattribute for the crystal and use the adder
    });
    $("#blue_gem").on("click", function () {
        gemElement.play();
        $("#score_value").html(Math.floor(Math.random() * 13));
    });
    $("#green_gem").on("click", function () {
        gemElement.play();
        $("#score").append(Math.floor(Math.random() * 13));
    });
    $("#purple_gem").on("click", function () {
        gemElement.play();
        $("#score").append(Math.floor(Math.random() * 13));
    });
    /*
    This line of code generates the random number from for the random section 
    */
    $("#rannum").append(Math.floor(Math.random() * 121))
    /*
    The number is randomizing the arry item and making sure the number of ruppees needed for the item changes 
    */
    for (i = 0; i < item.length; i++) {
        $("#item").append(game.item)
    }

    /*
    appends original values to wins, losses, and score column 
    */
    $("#wins_value").append(game.wins);
    $("#loss_value").append(game.losses);
    $("#score_value").append(game.score);


    function reset() {
        wins;
    }

    $("#reset").on("click", function () {
        reset()
    });

    /*if(game.score == game.win){
        game.

    } */



























});