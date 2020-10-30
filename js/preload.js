function preload() {
    var images = new Array();
    for(var i = 1; i < 20 ; i++) {
        images[i-1] = new Image();
        images[i-1].src = "img/magic8ball_" + i + ".png";
    }
    images[20] = new Image();
    images[20].src = "img/magic8ball_start.png";
}

export {preload}