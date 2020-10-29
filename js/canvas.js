function create(height, width) {
    let canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    
    let fortuneDiv = document.getElementById("fortune");
    fortuneDiv.append(canvas);

    let ctx = canvas.getContext("2d");
    let img = document.createElement("img");
    img.src = "img/magic8ball_start.png";
    ctx.drawImage(img, 10, 10);
}


export { create };