//target Program
//global variables
let cnv = document.getElementById("mycanvas")
let ctx = cnv.getContext("2d");
cnv.width =  1905
cnv.height = 910
let target = []
let move = true
let framecount = 0
//add target to array
for (let n = 0; n < 100; n ++){
    target.push(createTarget())
}

//generate inital target at any coordinate, random radius, random speed
function createTarget(){
    let r = 50
    return {
        x: randomDec(r,cnv.width - r),
        r: r,
        y: randomDec(r,cnv.height - r),
        color : "white",
        direction: randomBool(),
        timing: randomInt(0,480)
    }
}

//animation
requestAnimationFrame(draw)
function draw () {
    //clear previous frames
    ctx.fillStyle = "black"
    rect(0,0,cnv.width,cnv.height, "fill")
    for (let i = 0 ; i < target.length; i ++) {
        //draw and move all Targets
        if (move){
            moveTarget(target[i])
        }
        drawTarget(target[i])
    }
    framecount++
    requestAnimationFrame(draw);
}
//draw target at defined values
function drawTarget(aTarget){
    for (let n =9; n >0;  n -=1) {
        if ( n%2 == 0){
            ctx.fillStyle = 'white'
        } else {
            ctx.fillStyle = 'red'
        }
    circle(aTarget.x , aTarget.y , n*aTarget.r/9, "fill")
    }
}
function moveTarget(aTarget){
    aTarget.x += 10
}



//shooter component of program
//variables
let mouseX;
let mouseY;
let cnvRect = cnv.getBoundingClientRect()
let score = 0
//mousemove and click event listeners
document.addEventListener(`click`, popTarget)
document.addEventListener(`mousemove`, trackMovement)

function dist(x,y,x1,y1){
    return Math.sqrt((y-y1)**2 + (x-x1)**2)
}

function popTarget(){
    let distance;
    for(let i =0; i < target.length; i ++){
        distance = dist(mouseX, mouseY, target[i].x, target[i].y)
        if (distance < target[i].r) {
            target.splice(i,1)
            target.push(createTarget())
            score++
            document.getElementById('score').innerHTML = score
            return
        }
    }
}
function trackMovement(event){
    mouseX = event.clientX - cnvRect.left
    mouseY = event.clientY - cnvRect.top
}
