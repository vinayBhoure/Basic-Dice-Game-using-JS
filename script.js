// creating random number for dice
var randomNum = Math.random() // (0-0.9999)
// so to get numbers from 1-6 we will multiply randomNum with 6

randomNum = Math.floor(randomNum*6) +1 ;

var randomDiceImg = "dice" + randomNum + ".png";

var randomImageSource = "images/"+randomDiceImg; 

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1]; 
image1.setAttribute("src" , randomImageSource);


var randomNum2 = Math.random() // (0-0.9999)
// so to get numbers from 1-6 we will multiply randomNum with 6

randomNum2 = Math.floor(randomNum2*6) +1 ;

var randomDiceImg2 = "dice" + randomNum2 + ".png";

var randomImageSource2 = "images/"+randomDiceImg2; 

var image2 = document.querySelectorAll("img")[1]; 
image2.setAttribute("src" , randomImageSource2);

if(randomNum > randomNum2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";

}
else if(randomNum < randomNum2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";

}
else
{
    document.querySelector("h1").innerHTML = "Draw";

}