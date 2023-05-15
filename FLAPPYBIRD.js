var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// resimleri sınıfa tanımlatma

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/ust.jpg";
fg.src = "images/alt.jpg";
pipeSouth.src = "images/pipeSouth.png";


// değişkenler

var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;
    fly.play();
}

// sütunların uzaklıkları

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        // detect collision
        
        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){
            location.reload(); // kuşun sütunların üstünden geçerken yapılan hesaplamalar
        }
        
        if(pipe[i].x == 5){
            score++;
            scor.play();
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(bird,bX,bY);
    
    bY += gravity;
    
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "40px Ouincho Script";
    ctx.fillText("Skor : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();








































































