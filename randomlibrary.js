//ranndom decimal
function randomDec(low,high){
    return Math.random() * (high-low) + low
}
//random rgb
function randomRGB(){
    return "rgb(" + randomInt(0,255) + ", " + randomInt(0,255)+ "," + randomInt(0,255) + ")"
}
//random Int (high is inclusive)
function randomInt(low,high){
    return Math.floor(randomDec(low,high + 1))
}
function randomBool(){
    let int = randomInt(0,1)
    if (int ==0){
        return true
    } else {
        return false
    }
}