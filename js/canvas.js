import {preload} from './preload.js';

export function create(height, width) {
    preload();
    let canvas = document.createElement("canvas");
    let questionCanvas = document.createElement("canvas");
    questionCanvas.height = 100;
    questionCanvas.width = width;
    questionCanvas.id = "questionCanvas";

    canvas.height = height;
    canvas.width = width;
    canvas.id = "fortCanvas"

    let fortuneDiv = document.getElementById("fortune");
    fortuneDiv.append(questionCanvas);
    fortuneDiv.append(canvas);

    let ctx = canvas.getContext("2d");

/*     let grd = ctx.createRadialGradient(0, 0, 1000, 1000, 985, 10);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,1000,1000); */

    let img = document.createElement("img");
    img.src = "img/magic8ball_start.png";
    ctx.drawImage(img, 50, 50);
}

export function shake() {
    console.log("shaking the 8-ball");
    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    img = new Image(),
    // a ghost canvas that will keep our original image
    gCanvas = document.createElement('canvas'),
    gCtx = gCanvas.getContext('2d');
  gCanvas.width = canvas.width;
  gCanvas.height = canvas.height;
  
  
  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    gCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(moveUp);
  }
  
  var y = 0;
  function moveUp() {
    if (--y < (canvas.height * -0.5)) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gCanvas, 0, y, canvas.width, canvas.height);
    requestAnimationFrame(moveUp)
  }
}

