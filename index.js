/* 
    1 -> Rock
    2 -> Paper
    3 -> Scissor
*/

document.querySelector(".img1").addEventListener("click",function(){
    var x = Math.floor(Math.random()*3)+1;
    if(x==3){
        document.querySelector(".img1").style.border = "0.3em solid green";
        document.querySelector("h2").innerHTML = "You Won!";
        document.querySelector("h2").style.color = "green";
    }
    else if(x==1){
        document.querySelector(".img1").style.border = "0.3em solid grey";
        document.querySelector("h2").innerHTML = "It's a Draw!";
        document.querySelector("h2").style.color = "grey";
    }
    else{
        document.querySelector(".img1").style.border = "0.3em solid red";
        document.querySelector("h2").innerHTML = "You Lose!";
        document.querySelector("h2").style.color = "red";
    }
    setTimeout(function(){ document.querySelector(".img1").style.border = "0.3em solid black" }, 700);
})
document.querySelector(".img2").addEventListener("click",function(){
    var x = Math.floor(Math.random()*3)+1;
    if(x==1){
        document.querySelector(".img2").style.border = "0.3em solid green";
        document.querySelector("h2").innerHTML = "You Won!";
        document.querySelector("h2").style.color = "green";
    }
    else if(x==2){
        document.querySelector(".img2").style.border = "0.3em solid grey";
        document.querySelector("h2").innerHTML = "It's a Draw!";
        document.querySelector("h2").style.color = "grey";
    }
    else{
        document.querySelector(".img2").style.border = "0.3em solid red";
        document.querySelector("h2").innerHTML = "You Lose!";
        document.querySelector("h2").style.color = "red";
    }
    setTimeout(function(){ document.querySelector(".img2").style.border = "0.3em solid black" }, 700);
})
document.querySelector(".img3").addEventListener("click",function(){
    var x = Math.floor(Math.random()*3)+1;
    if(x==2){
        document.querySelector(".img3").style.border = "0.3em solid green";
        document.querySelector("h2").innerHTML = "You Won!";
        document.querySelector("h2").style.color = "green";
    }
    else if(x==3){
        document.querySelector(".img3").style.border = "0.3em solid grey";
        document.querySelector("h2").innerHTML = "It's a Draw!";
        document.querySelector("h2").style.color = "grey";
    }
    else{
        document.querySelector(".img3").style.border = "0.3em solid red";
        document.querySelector("h2").innerHTML = "You Lose!";
        document.querySelector("h2").style.color = "red";
    }
    setTimeout(function(){ document.querySelector(".img3").style.border = "0.3em solid black" }, 700);
})