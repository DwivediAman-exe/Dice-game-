var randomnumber1 = Math.floor(Math.random()*6) + 1;

var randomdiceimage = "dice" + randomnumber1 + ".png";

var randomimagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);



var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomdiceimage1 = "dice" + randomnumber2 + ".png";

var randomimagesource1 = "images/" + randomdiceimage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesource1);


if(randomnumber1 > randomnumber2)
{
  document.querySelector("h1").innerHTML = "Player one won 🏆";
}
else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player two won 🏆";
}
else{
  document.querySelector("h1").innerHTML = "Game draw 🏆";
}
