var canvas=document.getElementById("myCanvas")
var ctx= canvas.getContext("2d")
var Car1X=10
var Car1Y=10
var Car2X=10
var Car2Y=120
var background="racing BG.jpg"
var Car1img="CAR 1.jpg"
var Car2img="car 2.png"
function add(){
    bg=new Image()
    bg.onload= uploadbackground
    bg.src=background

    Car1=new Image()
    Car1.onload=uploadCar1
    Car1.src=Car1img

    Car2=new Image()
    Car2.onload=uploadCar2
    Car2.src=Car2img

}
function uploadbackground(){
    ctx.drawImage(bg, 0,0, canvas.width ,canvas.height)

}
function uploadCar1(){
    ctx.drawImage(Car1, Car1X, Car1Y, 100, 100)
}

function uploadCar2(){
        ctx.drawImage(Car2, Car2X, Car2Y, 100, 100)
}
    

window.addEventListener("keydown",kd)
function  kd(e){
    var keyno=e.keyCode
    console.log(keyno)
    if (keyno==37){
        left1()
        console.log("You have pressed left")
    }
    
    if (keyno==39){
        right1()
        console.log("You have pressed right")
    }
    
     
     if (keyno==65){
        left2()
        console.log("You have pressed left")
    }
    
    
    if (keyno==68){
        right2()
        console.log("You have pressed right")
    }
    if (Car1X>700){
       document.getElementById("winner").innerHTML="Car 1 Wins"
    }
    else if (Car2X>700){
        document.getElementById("winner").innerHTML="Car 2 Wins"
     }
} 
     

function right1(){
    if (Car1X<700){
    Car1X=Car1X+20
    uploadbackground()
    uploadCar1()
    uploadCar2()
}
   } 
   function right2(){
       if (Car2X<700){
           Car2X=Car2X+20
           uploadbackground()
           uploadCar1()
           uploadCar2()
       }
   }
   function left1(){
    if (Car1X>0){
    Car1X=Car1X-20
    uploadbackground()
    uploadCar1()
    uploadCar2()
}
   } 
   function left2(){
       if (Car2X>0){
           Car2X=Car2X-20
           uploadbackground()
           uploadCar1()
           uploadCar2()
       }
   }

  