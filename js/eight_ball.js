export function fortune() {
    let imgPth = "img/magic8ball_" + getRndInteger(1,20) + ".png";
    return imgPth;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}