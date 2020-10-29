import {create} from './canvas.js';
import {fortune} from './eight_ball.js';

function showFortune() {
    let fortDiv = document.getElementById("fortune");
    let img = document.querySelector("img");
    img.src = fortune();
}

document.querySelector("button").addEventListener('click', showFortune);
//window.onload = create(300, 300);