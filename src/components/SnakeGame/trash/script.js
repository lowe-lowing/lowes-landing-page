canvas = document.getElementById('game')
ctx = canvas.getContext('2d')

// när sidan laddas så ser kag till att pausm menyn och restar button är gömda
window.onload = function() {
    canvas.style.display = "none";
    $(".pauseMenu").css("display", "none");
    $(".RestartBtn").css("display","none");

    // kollar om det finns ett värde i localstorage
    var highscoreHolder = localStorage.getItem('HighScore')
    if (highscoreHolder === null)
    {
        localStorage.setItem("HighScore", 0);
    }
    document.getElementById("HighScore").innerHTML = localStorage.getItem("HighScore");
    changeGamemode(1);
};

// definierar klassen SnakePart
class SnakePart{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
let speed = 10;

let tileCount = 20;
let tileSize = canvas.width / tileCount -2;
let borders = true;

let headX = 10;
let headY = 10;
const snakeParts = [];
const initialTailLength = 3;
let tailLength = initialTailLength;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

let pauseDrX;
let pauseDrY;

// game loop
function drawgame() {
    changeSnakePosition();
    wallDetection();
    let result = isGameOver();
    if(result) {
        return;
    }
    clearScreen();
    checkAppleCollision();
    drawApple();
    drawSnake()
    drawScore();
    // get loopen ett namn så att jag kan kontrollera den senare i koden.
    game = setTimeout(drawgame, 1000/speed)
}

// kollar om ormen nuddar väggarna
function wallDetection() {
    // när ormen nuddar någon av väggarna så kollar koden om borders är true.
    // om borders är true så blir det game over, annars går den till motsatta sidan
    if (headX <= -1) {
        borders ? gameover = true : headX = tileCount;
    }
    else if (headX >= tileCount) {
        borders ? gameover = true : headX = 0;
    }
    else if (headY <= -1) {
        borders ? gameover = true : headY = tileCount;
    }
    else if (headY >= tileCount) {
        borders ? gameover = true : headY = 0;
    }
}

let gameover = false;
function isGameOver() {
    // kollar om man åker in i sin egen svans
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (part.x == headX && part.y == headY && score > 0) {
            gameover = true;
            break;
        }
    }
    if (gameover) {
        // spela ljud
        var audio = new Audio('gameover.wav');
        audio.play();

        // gameover text som kommer upp på åskärmen
        ctx.font = "50px Verdana";

        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");

        ctx.fillStyle = gradient;
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2.5)

        $(".RestartBtn").css("display","block");
        if (score > parseInt(localStorage.getItem("HighScore"))) {
            localStorage.setItem("HighScore", score);
        }
        document.getElementById("HighScore").innerHTML = localStorage.getItem("HighScore");
    }
    return gameover;
}
// skriver ut vad man har för score
function drawScore() {
    ctx.fillstyle = "white";
    ctx.font = "20px Verdana";
    ctx.fillText(`Score: ${score}`, canvas.width-100,20)
}

// varje frame så måste den ta bort allt från skärmen innan den kan rita nästa frame 
function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height)
}

function drawSnake() {
    ctx.fillStyle = "green";
    // för varje object i listan snakeParts så ritar den en fyrkant som en ormdel.
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    // här lägger den till en ormdel men sen så tar den bort ormdel om listan är större än värdet på taillength
    snakeParts.push(new SnakePart(headX, headY));
    while (snakeParts.length > tailLength) {
        snakeParts.shift();
    }

    // rita ormens huvud
    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
    // om man äter äpplet
    if(appleX === headX && appleY == headY) {
        // spela ljud
        var audio = new Audio('apple-crunch.wav');
        audio.play();
        // ändra äpple till slumpmässig position
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        // men om äpplet har samma position som någon av ormdelarna,
        // sätt ny position på äpplet.
        snakeParts.forEach(element => {
            while (appleX === element.x && appleY === element.y) {
                appleX = Math.floor(Math.random() * tileCount);
                appleY = Math.floor(Math.random() * tileCount);
            }
        });
        
        // öka 
        tailLength++;
        score++;
    }
}

document.onkeydown = checkKey;

// riktningsvariablar
var up = -1;
var down = 1;
var left = -1;
var right = 1;
// funktion för att ändra riktning.
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        if (yVelocity!=down) {
            changeY(up)
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if (yVelocity!=up) {
            changeY(down)
        }
    }
    else if (e.keyCode == '37') {
        // left arrow
        if (xVelocity!=right) {
            changeX(left)   
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        if (xVelocity!=left) {
            changeX(right)   
        }
    }
    else if (e.keyCode == '27') {
        // paus knapp, esc.
        if (gameover == false) {
            pause();
        }
    }
}

// några små funktioner för att göra det lite lättare att ändra ormens riktning
function changeY(direction) {
    xVelocity = 0;
    yVelocity = direction;
}
function changeX(direction) {
    yVelocity = 0;
    xVelocity = direction
}

// funktioner för paus resume och newgame
var pauseMenu = $(".pauseMenu");
function pause() {
    // när man pausar så sätts nya variablar som paus riktning
    // och gameloopen pausas
    pauseDrX = xVelocity;
    pauseDrY = yVelocity;
    clearTimeout(game);
    pauseMenu.css("display", "block")
}
function resume() {
    xVelocity = pauseDrX;
    yVelocity = pauseDrY;
    game = setTimeout(drawgame, 1000/speed);
    pauseMenu.css("display", "none");
}
function NewGame() {
    // här nollställs det mesta till orginal värden
    var x = document.getElementById("MainMenu")
    x.style.display = "none";
    var y = document.getElementById("game")
    y.style.display = "block";
    gameover = false;
    score = 0;
    tailLength = initialTailLength;
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    headX = 10;
    headY = 10;
    xVelocity = 0;
    yVelocity = 0;
    $(".RestartBtn").css("display", "none");
    $(".pauseMenu").css("display", "none");
    game = setTimeout(drawgame, 1000/speed)
}

// simpel styling för att knapparna ska få en skugga 
// när man väljer mellan allternativen.
// Här använder jag mig även av lite JQuery för att jag tycker det är lite enklare.
$(document).on('click', '#diff', function () {
    var th = $(this);
    $(".active").attr("class", "")
    th.attr("class", "active");
  });
$(document).on('click', '#diff2', function () {
    var th = $(this);
    $(".active2").attr("class", "")
    th.attr("class", "active2");
});

// ändra svårighetsgrad
function changeDifficulty(difficultyNumber) {
    speed = difficultyNumber;
}

// ändra borders on/off
function changeGamemode(number) {
    if (number == 1) {
        borders = true;
        $("canvas").css("border", "3px solid red")
    }
    else {
        borders = false;
        $("canvas").css("border", "none")
    }
}