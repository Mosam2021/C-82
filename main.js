canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
var last_x,last_y ;
color = document.getElementById("colorinput").value;
width =  document.getElementById("widthinput").value;


canvas.addEventListener("mousedown",my_mousedown) ;

function my_mousedown(e){
    mouseEvent = "mouseDown" ; 
    color = document.getElementById("colorinput").value;
width =  document.getElementById("widthinput").value;
}

canvas.addEventListener("mouseup",my_mouseup) ;

function my_mouseup(e){
    mouseEvent = "mouseUp" ; 
}

canvas.addEventListener("mouseleave",my_mouseleave) ;

function my_mouseleave(e){
    mouseEvent = "mouseleave" ; 
}

canvas.addEventListener("mousemove",my_mousemove) ;

function my_mousemove(e){
   current_x = e.clientX - canvas.offsetLeft ; 
   current_y = e.clientY - canvas.offsetTop ;

   if(mouseEvent == "mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color ;
ctx.lineWidth = width ; 

console.log("lastpostion of X =" + last_x + "lastposition of Y = " + last_y);
ctx.moveTo(last_x , last_y);

console.log("currentpostion of X =" + current_x + "currentposition of Y = " + current_y);
ctx.lineTo(current_x , current_y);

ctx.stroke();
   }
   last_x = current_x;
   last_y = current_y;
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}