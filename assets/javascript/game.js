$(document).ready(function(){

    var Nickname = "";
    var Level = 1;
    var Type = "";
    var Health = 100;
    var DPS = 10;
    var statList = ["Nickname: " + Nickname, "Level: " + Level, "Type: " + Type, "Health: " + Health,"DPS: " + DPS];
    var newDiv = $("#list");

    function showStats(){
        $(newDiv).empty();
        for(var i = 0; i < statList.length; i++){
            var newElement = $("<div>");
            newElement.html(statList[i]);
            newDiv.append(newElement);
        }
    }
    function updateStats(){
        statList = ["Nickname: " + Nickname, "Level: " + Level, "Type: " + Type, "Health: " + Health,"DPS: " + DPS];
    }
    function playMusic(){
        var music = new Audio("assets/audio/battle.mp3");
        music.loop = true;
        music.play();
    }

    $(".character").on("click", function(event){
        var initial_char = $(this).attr("id");

        if (initial_char === "bulbasaur"){
            //make other elements disappear
            $("#squirtle, #charmander, #pikachu").css("display", "none");

            $(this).removeClass("green"); //remove this class to prevent hover
            
            Nickname = prompt("Input the nickname for Bulbasaur:", "Bulbasaur");
            if (Nickname == null){
                Nickname = "Bulbasaur";
            }

            Type = "Grass";
            $("#title").css("display", "none");
            $("#title2").css("display", "block");

            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats();
            showStats();
            
            //Allow user to choose which pokemon to fight first
            playMusic();

        }
        else if (initial_char === "squirtle"){
            //make other elements disappear
            $("#charmander, #bulbasaur, #pikachu").css("display", "none");
            
            $(this).removeClass("blue");

            Nickname = prompt("Input the nickname for Squirtle:", "Squirtle");
            if (Nickname == null){
                Nickname = "Squirtle";
            }
            Type = "Water";

            $("#title").css("display", "none");
            $("#title2").css("display", "block");
            
            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats();
            showStats();
            
            //Allow user to choose which pokemon to fight first
            playMusic();
            
        }
        else if (initial_char === "charmander"){
            //make other elements disappear
            $("#squirtle, #bulbasaur, #pikachu").css("display", "none");

            $(this).removeClass("red");

            Nickname = prompt("Input the nickname for Charmander:", "Charmander");
            if (Nickname == null){
                Nickname = "Charmander";
            }
            Type = "Fire";

            $("#title").css("display", "none");
            $("#title2").css("display", "block");

            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats();
            showStats();
            
            //Allow user to choose which pokemon to fight first
            playMusic();
        }
        else {
            //make other elements disappear
            $("#squirtle, #charmander, #bulbasaur").css("display", "none");

            $(this).removeClass("yellow");

            Nickname = prompt("Input the nickname for Pikachu:", "Pikachu");
            if (Nickname == null){
                Nickname = "Pikachu";
            }
            Type = "Electric";
            
            $("#title").css("display", "none");
            $("#title2").css("display", "block");

            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats();
            showStats();
            
            //Allow user to choose which pokemon to fight first
            playMusic();

        }
    })


})