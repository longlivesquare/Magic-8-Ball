function fortune() {
    let imgPth = "img/magic8ball_" + getRndInteger(1,20) + ".png";
    document.getElementById("myFortune").src=imgPth;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export {fortune};