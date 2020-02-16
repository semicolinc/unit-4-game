$(document).ready(function main(){

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
    var attackDiv = $("#attackBox");
    var youDamage = 0;
    var enemyDamage = 0;
    var youEffective = 0;
    var enemyEffective = 0;
    var typeString = "";
    var etypeString = "";
    var attackString = Nickname+" used "+ typeString +". "+"It was "+youEffective+" effective. "+ Nickname + " did "+ youDamage + " damage.";
    var enemyAttackString = Nickname2+" used "+ etypeString +". "+"It was "+enemyEffective+" effective. "+ Nickname2 + " did "+ enemyDamage + " damage.";
    var music = new Audio("assets/audio/battle.mp3");
    var winMusic = new Audio("assets/audio/victory-music.mp3");

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
            attackString = Nickname+" used "+ typeString +". "+"It was "+youEffective+" effective. "+ Nickname + " did "+ youDamage + " damage.";
        }
        if (type == "statList2"){
            statList2 = ["Name: " + Nickname2, "Level: " + Level2, "Type: " + Type2, "Health: " + Health2,"DPS: " + DPS2];
            enemyAttackString = Nickname2+" used "+ etypeString +". "+"It was "+enemyEffective+" effective. "+ Nickname2 + " did "+ enemyDamage + " damage.";
        }
    }

    function playMusic(){
        music.loop = true;
        music.pause(false);
        music.play();
    }

    function victoryMusic(){
        music.pause();
        winMusic.loop = true;
        winMusic.play();
        console.log("played");
    }

    function damage(Type, Type2){

        if ((Type === "Grass" && Type2 === "Water")||(Type === "Water" && Type2 === "Fire") || (Type === "Fire" && Type2 === "Grass") || (Type === "Electric" && Type2 === "Water")){
            youDamage = 2*DPS;
            youEffective = "super";
        }
        else if ((Type === "Water" && Type2 === "Grass")||(Type === "Fire" && Type2 === "Water") || (Type === "Grass" && Type2 === "Fire") || (Type === "Electric" && Type2 === "Grass")){
            youDamage = .5*DPS;
            youEffective = "not very";
        }
        else{
            youDamage = DPS;
            youEffective = "normally";
        }

        if ((Type2 === "Grass" && Type === "Water")||(Type2 === "Water" && Type === "Fire") || (Type2 === "Fire" && Type === "Grass") || (Type2 === "Electric" && Type === "Water")){
            enemyDamage = 2*DPS2
            enemyEffective = "super";
        }
        else if ((Type2 === "Water" && Type === "Grass")||(Type2 === "Fire" && Type === "Water") || (Type2 === "Grass" && Type === "Fire") || (Type2 === "Electric" && Type === "Grass")){
            enemyDamage = .5*DPS2;
            enemyEffective = "not very";
        }
        else{
            enemyDamage = DPS2;
            enemyEffective = "normally";
        }
        
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
        if($(this).hasClass("canPress")){
            $("#chosenPokemon").empty();
            $("#chosenPokemon").prepend('<img class = "character" src="assets/images/bulbasaur.png"/>');
            $(".green.available").removeClass("available").addClass("notAvailable");
            
            Nickname2 = ["Destroyer", "Your Nightmare", "<3", "Pity", "A Pun", "Elemental", "Joey", "Dad", "Friend A", "Broken", "Hacker"][Math.floor(Math.random() * 10)]
            Level2 = 1;
            Type2 = "Grass";
            Health2 = "75";
            DPS2 = "10";

            if(!($("#pokemon-div").children().hasClass("available"))){
                Level2 = 5;
                Type2 = "Grass";
                Health2 = "100";
                DPS2 = "20";
                $(".subTitle").css("display", "none");
            }
    
            $("#list2").css("display", "flex");
            updateStats("statList2");
            showStats("statList2");
    
            $("#attackBox").css("display", "flex");
            $("#attack").css("display", "flex");
    
            $(".nextPokemon.available.canPress").removeClass("canPress");
            $("#attack").addClass("canPress");
        }
    })

    $(".nextPokemon.blue").on("click", function(){
        if($(this).hasClass("canPress")){
            $("#chosenPokemon").empty();
            $("#chosenPokemon").prepend('<img class = "character" src="assets/images/squirtle.png"/>');
            $(".blue.available").removeClass("available").addClass("notAvailable");
            
            Nickname2 = ["Destroyer", "Your Nightmare", "<3", "Pity", "A Pun", "Elemental", "Joey", "Dad", "Friend A", "Broken", "Hacker"][Math.floor(Math.random() * 10)]
            Level2 = 1;
            Type2 = "Water";
            Health2 = "75";
            DPS2 = "10";

            if(!($("#pokemon-div").children().hasClass("available"))){
                Level2 = 5;
                Type2 = "Water";
                Health2 = "100";
                DPS2 = "20";
                $(".subTitle").css("display", "none");
            }
    
            $("#list2").css("display", "flex");
            updateStats("statList2");
            showStats("statList2");
    
            $("#attackBox").css("display", "flex");
            $("#attack").css("display", "flex");
    
            $(".nextPokemon.available.canPress").removeClass("canPress");
            $("#attack").addClass("canPress");
        }
    })

    $(".nextPokemon.red").on("click", function(){
        if($(this).hasClass("canPress")){
            $("#chosenPokemon").empty();
            $("#chosenPokemon").prepend('<img class = "character" src="assets/images/charmander.png"/>');
            $(".red.available").removeClass("available").addClass("notAvailable");
            
            Nickname2 = ["Destroyer", "Your Nightmare", "<3", "Pity", "A Pun", "Elemental", "Joey", "Dad", "Friend A", "Broken", "Hacker"][Math.floor(Math.random() * 10)]
            Level2 = 1;
            Type2 = "Fire";
            Health2 = "75";
            DPS2 = "10";
    
            if(!($("#pokemon-div").children().hasClass("available"))){
                Level2 = 5;
                Type2 = "Fire";
                Health2 = "100";
                DPS2 = "20";
                $(".subTitle").css("display", "none");
            }

            $("#list2").css("display", "flex");
            updateStats("statList2");
            showStats("statList2");
    
            $("#attackBox").css("display", "flex");
            $("#attack").css("display", "flex");
    
            $(".nextPokemon.available.canPress").removeClass("canPress");
            $("#attack").addClass("canPress");
        }
    })
    
    $(".nextPokemon.yellow").click(function(){
        if($(this).hasClass("canPress")){
            $("#chosenPokemon").empty();
            $("#chosenPokemon").prepend('<img class = "character" src="assets/images/pikachu.png"/>');
            $(".yellow.available").removeClass("available").addClass("notAvailable");
            
            Nickname2 = ["Destroyer", "Your Nightmare", "<3", "Pity", "A Pun", "Elemental", "Joey", "Dad", "Friend A", "Broken", "Hacker"][Math.floor(Math.random() * 10)]
            Level2 = 1;
            Type2 = "Electric";
            Health2 = "75";
            DPS2 = "10";

            if(!($("#pokemon-div").children().hasClass("available"))){
                Level2 = 5;
                Type2 = "Electric";
                Health2 = "100";
                DPS2 = "20";
                $(".subTitle").css("display", "none");
            }
    
            $("#list2").css("display", "flex");
            updateStats("statList2");
            showStats("statList2");
    
            $("#attackBox").css("display", "flex");
            $("#attack").css("display", "flex");
    
            $(".nextPokemon.available.canPress").removeClass("canPress");
            $("#attack").addClass("canPress");
        }
    })

    $("#attack").on("click", function(){
        if($(this).hasClass("canPress")){
            damage(Type,Type2);
            Health = Health - enemyDamage;
            Health2 = Health2 - youDamage;
            Level++;
            DPS = DPS + 4;

            //attackBox input
            var youAttack= $("<div>");
            var enemyAttack = $("<div>");
            if(Type === "Grass"){
                typeString = "Vine Whip";
            }
            else if(Type === "Water"){
                typeString = "Water Gun";
            }
            else if(Type === "Fire"){
                typeString = "Ember";
            }
            else if(Type === "Electric"){
                typeString = "Thundershock";
            }
            if(Type2 === "Grass"){
                etypeString = "Vine Whip";
            }
            else if(Type2 === "Water"){
                etypeString = "Water Gun";
            }
            else if(Type2 === "Fire"){
                etypeString = "Ember";
            }
            else if (Type2 === "Electric"){
                etypeString = "Thundershock";
            }
            updateStats("statList");
            updateStats("statList2");

            youAttack.html(attackString);
            enemyAttack.html(enemyAttackString);
            attackDiv.append(youAttack); 
            attackDiv.append(enemyAttack); 

            if(Health <= 0 && Health2 <= 0){
                $("#title2").css("display", "none");
                $("#title5").css("display", "block");
                Health = 0;
                Health2 = 0;
                Level--;
                DPS = DPS - 2;
                updateStats("statList");
                updateStats("statList2");
                showStats("statList");
                showStats("statList2");
    
                alert("The game has resulted in a tie! Refresh to play again.")
                return;
            }
            else if(Health <= 0){
                $("#title2").css("display", "none");
                $("#title4").css("display", "block");
                Health = 0;
                Level--;
                DPS = DPS - 2;
                updateStats("statList");
                showStats("statList");
    
                alert("You have lost! Refresh to play again.")
                return;
            }
            
            else if(Health2 <= 0 && Level2 === 5){
                $("#title2").css("display", "none");
                $("#title3").css("display", "block");
                Health2 = 0;
                $("#attack").removeClass("canPress");

                victoryMusic();
                updateStats("statList");
                updateStats("statList2");
                showStats("statList");
                showStats("statList2");
                console.log("hi");
                alert("Congratulations! You are the champion! Refresh to play again.");
                return;
            }
            else if(Health2 <= 0){
                Health = 120;
                Health2 = 0;
                updateStats("statList");
                updateStats("statList2");
                showStats("statList");
                showStats("statList2");
                
                $(".nextPokemon.available").addClass("canPress");
                $("#attack").removeClass("canPress");
            }
    
            updateStats("statList");
            showStats("statList");
            updateStats("statList2");
            showStats("statList2");
        }
    })
})