import {create, shake} from './canvas.js';
import {fortune} from './eight_ball.js';

function showFortune() {
    //let fortDiv = document.getElementById("fortune");
    //let img = document.querySelector("img");
    //img.src = fortune();
    showQuestion(document.getElementById("questionCanvas"));
    show8Ball(document.getElementById("fortCanvas"));
}

function showQuestion(canvas){
    let question = document.querySelector("input").value;
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.strokeText(question, 40, 40, canvas.width - 20);
}

function show8Ball(canvas){
    let img = new Image();
    img.src = fortune();
    console.log(img);
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.drawImage(img, 50, 50);
}

document.querySelector("button").addEventListener('click', showFortune);
window.onload = create(1000, 1000);