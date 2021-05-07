// document.querySelector('#player1 .img1').setAttribute('src','images/dice1.png');
// document.querySelector('#player2 .img2').setAttribute('src','images/dice2.png');
let num1 = Math.floor(Math.random()*6)+1;
let randomImage1 = 'dice'+num1+'.png';
let imageSource1 = "images/"+randomImage1;
let num2 = Math.floor(Math.random()*6)+1;
let randomImage2 = 'dice'+num2+'.png';
let imageSource2 = "images/"+randomImage2;

document.querySelector('#player1 .img1').setAttribute('src',imageSource1);
document.querySelector('#player2 .img2').setAttribute('src',imageSource2);

if(num1 == num2)
{
    document.getElementById('result').innerHTML = 'Draw!';
}
else if(num1 < num2)
{
    document.getElementById('result').innerHTML='Player 2 Wins 🎉';
}

else
{
    document.getElementById('result').innerHTML='🎉 Player 1 Wins';
}
