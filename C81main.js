 Canvas = document.getElementById("myCanvas")
 Ctx = Canvas.getContext("2d")
 Color = "red"
 Ctx.beginPath()
 Ctx.strokeStyle = Color
 Ctx.lineWidth = 5
 Ctx.arc(200,200,40,0,2*Math.PI)
 Ctx.stroke()

 Canvas.addEventListener("mousedown",mymousedown)

function mymousedown(e){
Color = document.getElementById("color").value
mouse_x = e.clientX - Canvas.offsetLeft
mouse_y = e.clientY - Canvas.offsetTop
circle(mouse_x,mouse_y)
} 
function circle(mouse_x,mouse_y){
Ctx.beginPath()
Ctx.linewidth = 5
Ctx.strokeStyle = Color
Ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI)
Ctx.stroke()

}

function limpiar(){
    Ctx.clearRect(0,0,Canvas.width,Canvas.height)
}