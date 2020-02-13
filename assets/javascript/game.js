$(document).ready(function(){

    $(".character").on("click", function(event){
        var initial_char = $(this).attr("id");

        if (initial_char === "bulbasaur"){
            //make other elements disappear
            $("#squirtle").css("visibility", "hidden");
            $("#charmander").css("visibility", "hidden");
            $("#pikachu").css("visibility", "hidden");

            $("bulbasaur").css("order:", "1");
            $(this).removeClass("green"); //remove this class to prevent hover
            // var nick = prompt("Input the nickname for Bulbasaur:")

        }
        else if (initial_char === "squirtle"){
            //make other elements disappear
            $("#charmander").css("visibility", "hidden");
            $("#bulbasaur").css("visibility", "hidden");
            $("#pikachu").css("visibility", "hidden");
            
            $("#squirtle").css("order", "1");
            $("#bulbasaur").css("order", "2");
            $("#charmander").css("order", "3");
            $("#pikachu").css("order", "4");
            $(this).removeClass("blue");
            // var nick = prompt("Input the nickname for Bulbasaur:")

        }
        else if (initial_char === "charmander"){
            //make other elements disappear
            $("#squirtle").css("visibility", "hidden");
            $("#bulbasaur").css("visibility", "hidden");
            $("#pikachu").css("visibility", "hidden");

            $("#squirtle").css("order", "2");
            $("#bulbasaur").css("order", "3");
            $("#charmander").css("order", "1");
            $("#pikachu").css("order", "4");
            $(this).removeClass("red");
            // var nick = prompt("Input the nickname for Bulbasaur:")
        }
        else {
            //make other elements disappear
            $("#squirtle").css("visibility", "hidden");
            $("#charmander").css("visibility", "hidden");
            $("#pikachu").css("visibility", "hidden");

            $("#squirtle").css("order", "2");
            $("#bulbasaur").css("order", "3");
            $("#charmander").css("order", "4");
            $("#pikachu").css("order", "1");
            $(this).removeClass("yellow");
            // var nick = prompt("Input the nickname for Bulbasaur:")
        }
    })


})