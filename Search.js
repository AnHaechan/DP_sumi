//function for the search bar and button
function mySearch(){
    var input = document.getElementById("searchInput").value;
    if (0==input.localeCompare("Blue Hawaii")){
        location.href="#";
    }
    else if(0==input.localeCompare("Blue Monday")){
        location.href="#";
    }
    else if(0==input.localeCompare("Blue Sapphire")){
        location.href="#";
    }
    else if(0==input.localeCompare("Mimosa")){
        location.href="#";
    }
    else if(0==input.localeCompare("Orange Blossom")){
        location.href="#";
    }
    else if(0==input.localeCompare("Screwdriver")){
        location.href="#";
    }
    else{
        alert("Insert in a correct cocktail name!")
    }
}