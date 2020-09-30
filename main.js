var lastRenderTime=0
var SNAKE_SPEED=2
function main(currentTime){
	var secondsSinceLastRender=(currentTime-lastRenderTime)/1000
	if(secondsSinceLastRender<1 /SNAKE_SPEED) return 
	window.requestAnimationFrame(main)
	
	console.log('Render')
	lastRenderTime=currentTime
update()
draw()
}

window.requestAnimationFrame(main)

function update(){

}

function draw(){
	
}