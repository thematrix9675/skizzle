var Block_Path=Block(1,false);
Block_Path.type="Path";
function PathDraw(arg){
	setColor(rgb(0,200,0));
	if(!isDay()) setColor(rgb(0,50,25))
	fillRect((arg[0]*BS)-player.x+(WW/2),(arg[1]*BS)-player.y+(WH/2),BS,BS);
}
function PathDrawOver(arg){
	
}
