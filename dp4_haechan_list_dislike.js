



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////firebase




//var interest_cocktails = [s1,s2,s3,s4,s5,s6]; // global varaible인 'interestCocktails'로 대체됨

//////////////////////////////////////////////////////////////////////////////////////////////////////

var dislikeContainer = document.getElementById("disliked_items");




function addDislikeElem(item){


  
  var totalDiv = document.createElement("div");
 totalDiv.setAttribute("class","col-xs-4 ml-auto");


   var itemDiv = document.createElement("div");
   itemDiv.setAttribute("class", "item col-xs-12");

     var img = document.createElement("img")
     img.setAttribute("class", "img-responsive interested_img");
     img.setAttribute("src", "./Images/"+item.pic);
     itemDiv.appendChild(img)

     itemDiv.innerHTML += ("<br> <div class='central'>" + item.name+"</div> <br>");
     itemDiv.addEventListener( "click", function(){
      location.href='./detail_'+ item.name.replace(/ /g, '')  +'.html'; 
     });


 totalDiv.appendChild(itemDiv);

 dislikeContainer.appendChild(totalDiv);
 
}




function addDislikeElems(){
  dislikeContainer.innerHTML='';

  for (var i=0; i<dislikeCocktails.length; i++ ){
  
    addDislikeElem(dislikeCocktails[i]);
  }
}


  









