$(document).ready(function(){

    var Nickname = "";
    var Level = 1;
    var Type = "";
    var Health = 100;
    var DPS = 10;
    var Nickname2 = "";
    var Level2 = 1;
    var Type2 = "";
    var Health2 = 100;
    var DPS2 = 10;
    
    var statList = ["Name: " + Nickname, "Level: " + Level, "Type: " + Type, "Health: " + Health,"DPS: " + DPS];
    var statList2 = ["Name: " + Nickname2, "Level: " + Level2, "Type: " + Type2, "Health: " + Health2,"DPS: " + DPS2];
    var newDiv = $("#list");
    var newDiv2 = $("#list2");

    function showStats(type){
        if (type == "statList"){
            $(newDiv).empty();
            for(var i = 0; i < statList.length; i++){
                var newElement = $("<div>");
                newElement.html(statList[i]);
                newDiv.append(newElement);
            }
        }
        if (type == "statList2"){
            $(newDiv2).empty();
            for(var j = 0; j < statList2.length; j++){
                var newElement2 = $("<div>");
                newElement2.html(statList2[j]);
                newDiv2.append(newElement2);
            }
        }
    }
    function updateStats(type){
        if (type == "statList"){
            statList = ["Name: " + Nickname, "Level: " + Level, "Type: " + Type, "Health: " + Health,"DPS: " + DPS];
        }
        if (type == "statList2"){
            statList2 = ["Name: " + Nickname2, "Level: " + Level2, "Type: " + Type2, "Health: " + Health2,"DPS: " + DPS2];
        }
    }

    function playMusic(){
        var music = new Audio("assets/audio/battle.mp3");
        music.loop = true;
        music.play();
    }

    $(".character.animation").one("click", function(){

        var initial_char = $(this).attr("id");

        if (initial_char === "bulbasaur"){
            //make other elements disappear
            $("#squirtle, #charmander, #pikachu").css("display", "none");

            $(".character").removeClass("animation"); //remove this class to prevent hover
            $(".green.available").removeClass("available").addClass("notAvailable"); //remove available for pokemon-div
            
            Nickname = prompt("Input the nickname for Bulbasaur:", "Bulbasaur");
            if (Nickname == undefined){
                Nickname = "Bulbasaur";
            }

            Type = "Grass";

            $("#title").css("display", "none");
            $("#title2").css("display", "block");

            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats("statList");
            showStats("statList");
            
            //Allow user to choose which pokemon to fight first
            playMusic();
            $("#pokemon-div").css("display", "flex");
        }
        else if (initial_char === "squirtle"){
            //make other elements disappear
            $("#charmander, #bulbasaur, #pikachu").css("display", "none");
            
            $(this).removeClass("animation");
            $(".blue.available").removeClass("available").addClass("notAvailable");

            Nickname = prompt("Input the nickname for Squirtle:", "Squirtle");
            if (Nickname == null){
                Nickname = "Squirtle";
            }
            Type = "Water";

            $("#title").css("display", "none");
            $("#title2").css("display", "block");
            
            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats("statList");
            showStats("statList");
            
            //Allow user to choose which pokemon to fight first
            playMusic();
            $("#pokemon-div").css("display", "flex");
        }
        else if (initial_char === "charmander"){
            //make other elements disappear
            $("#squirtle, #bulbasaur, #pikachu").css("display", "none");

            $(this).removeClass("animation");
            $(".red.available").removeClass("available").addClass("notAvailable");

            Nickname = prompt("Input the nickname for Charmander:", "Charmander");
            if (Nickname == null){
                Nickname = "Charmander";
            }
            Type = "Fire";

            $("#title").css("display", "none");
            $("#title2").css("display", "block");

            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats("statList");
            showStats("statList");
            
            //Allow user to choose which pokemon to fight first
            playMusic();
            $("#pokemon-div").css("display", "flex");
        }
        else {
            //make other elements disappear
            $("#squirtle, #charmander, #bulbasaur").css("display", "none");

            $(this).removeClass("animation");
            $(".yellow.available").removeClass("available").addClass("notAvailable");

            Nickname = prompt("Input the nickname for Pikachu:", "Pikachu");
            if (Nickname == null){
                Nickname = "Pikachu";
            }
            Type = "Electric";

            $("#title").css("display", "none");
            $("#title2").css("display", "block");

            //appending statList to Pokemon
            $("#list").css("display", "flex");

            updateStats("statList");
            showStats("statList");
            
            //Allow user to choose which pokemon to fight first
            playMusic();
            $("#pokemon-div").css("display", "flex");
        }
    })

    $(".nextPokemon.green").on("click", function(){
        $("#chosenPokemon").empty();
        $("#chosenPokemon").prepend('<img class = "character" src="assets/images/bulbasaur.png"/>');
        
        Nickname2 = ["Destroyer of Worlds", "Your Nightmare", "<3", "PitA", "A Pun", "Elemental", "Joey", "Papa", "xX_Hi_Xx", "Whynaut"][Math.floor(Math.random() * 10)]
        Level2 = 1;
        Type2 = "Grass";
        Health2 = "75";
        DPS2 = "10";
        console.log(Nickname2);

        $("#list2").css("display", "flex");
        updateStats("statList2");
        showStats("statList2");

        $("#attackBox").css("display", "flex");
    })

    $("nextPokemon blue").one("click", function(){

    })

    $("nextPokemon red").one("click", function(){

    })
    
    $("nextPokemon yellow").one("click", function(){

    })
})