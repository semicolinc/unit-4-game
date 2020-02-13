$(document).ready(function(){

    $(".character").on("click", function(event){
        var initial_char = $(this).attr("id");

        if (initial_char === "bulbasaur"){
            alert("bulbasaur");
        }
        else if (initial_char === "squirtle"){
            alert("squirtle");
            
        }
        else if (initial_char === "charmander"){
            alert("charmander");
            
        }
        else {
            alert("pikachu");
            
        }
    })
})