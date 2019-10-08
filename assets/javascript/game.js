$(document).ready(function () {
    var game = {
        item: ["the Ocarina of Time", "the Master Sword", "a Boomerang", "a Bomb", "a Bow", "an Arrow", "a Recorder", "Food", "a Container Heart"],
        score: 0,
        wins: 0,
        losses: 0,
        checkloss: false,
        checkwin: false,
        rannum: Math.floor(Math.random() * 121)
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
        gemvalue();
    });
    $("#blue_gem").on("click", function () {
        gemvalue();
    });
    $("#green_gem").on("click", function () {
        gemvalue();
    });
    $("#purple_gem").on("click", function () {
        gemvalue();
    });
    /*
    This line of code generates the random number from for the random section 
    */
    function gemvalue(gem) {
        gemElement.play();
        var score = parseInt(game.score);
        var gem = parseInt(Math.floor(Math.random() * 13));
        var total = score + gem;
        $("#score_value").html(total);
        if (total === game.rannum) {
            alert("you win!");
            game.wins++;
            $("#wins_value").html(game.wins);
            reset();
        }
        else if (total > game.rannum) {
            alert("you lose!");
            game.losses++;
            $("#loss_value").html(game.losses);
            reset();
        }
    }

    $("#rannum").append(game.rannum);
    /*
    The number is randomizing the arry item and making sure the number of ruppees needed for the item changes 
    */
    $("#item").append(game.item[Math.floor(Math.random() * game.item.length)]);

    /*
    appends original values to wins, losses, and score column 
    */
    $("#wins_value").append(game.wins);
    $("#loss_value").append(game.losses);
    $("#score_value").append(game.score);


    function reset() {
        game.wins = 0;
        game.losses = 0;
        game.score = 0;
        game.rannum = Math.floor(Math.random() * 121);
        $("#score_value").empty();
        $("#score_value").append(game.score);
        $("#wins_value").empty();
        $("#wins_value").append(game.wins);
        $("#loss_value").empty();
        $("#loss_value").append(game.losses);
        $("#rannum").empty();
        $("#rannum").append(game.rannum);
        $("#item").empty();
        $("#item").append(game.item[Math.floor(Math.random() * game.item.length)]);
        audioElement.pause();
    }

    $("#reset").on("click", function () {
        reset();
    });




























});