var likeIngres = [];
var dislikeIngres = [];
var allIngres = [];
var deg_of_recommen = 1;

function getIngres(cocktailList) {
  var ingres = [];
  for (var i = 0; i < cocktailList.length; i++) {
    var cocktail_ingre = cocktailList[i]["ingredients"];
    for (var j = 0; j < cocktail_ingre.length; j++) {
      var ingre = cocktail_ingre[j];
      if (!ingres.includes(ingre)) {
        ingres.push(ingre);
        console.log(ingre);
      }
    }
  }
  return ingres;
}

function checkElems() {
  likeIngres = getIngres(likeCocktails);
  dislikeIngres = getIngres(dislikeCocktails);
  for (var i = 0; i < likeIngres.length; i++) {
    if (likeIngres[i].includes(s3)) {
      deg_of_recommen++;
    }
  }
  for (var j = 0; j < dislikeIngres.length; j++) {
    if (dislikeIngres[j].includes(s3)) {
      deg_of_recommen--;
    }
  }
  if (deg_of_recommen >= 2) {
    $("#recommend").append(
      [
        '<span class="badge badge-success center" style="font-size: x-small; align-self: center;">recommended for you</span>',
      ].join("\n")
    );
  }
  if (deg_of_recommen == 1) {
    $("#recommend").append(
      [
        '<span class="badge badge-warning center" style="font-size: x-small; align-self: center;">neither recommended nor not recommended</span>',
      ].join("\n")
    );
  } else {
    $("#recommend").append(
      [
        '<span class="badge badge-danger center" style="font-size: x-small; align-self: center;">not recommended for you</span>',
      ].join("\n")
    );
  }
}

$(document).ready(function () {
  allIngres = getIngres([s1, s2, s3, s4, s5, s6]);

  checkElems();
});
