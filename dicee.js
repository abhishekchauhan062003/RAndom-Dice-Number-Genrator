var pics = [ "images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomVariable1 = Math.floor(Math.random()*6);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",pics[randomVariable1]);
randomVariable2 = Math.floor(Math.random()*6);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",pics[randomVariable2]);

if(randomVariable1>randomVariable2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if (randomVariable1<randomVariable2) {
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
