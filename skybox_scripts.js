var skybox = document.getElementById("skybox");
var x, y;
//tracks the mouse movement for tracking
document.addEventListener('mousemove', (e)=>
{
	x = e.clientX;
	y = -e.clientY;//add negative to inverse the tracking
	skybox.style.transform = "translateZ(600px) rotateX("+y+"deg) rotateY("+x+"deg)";
});