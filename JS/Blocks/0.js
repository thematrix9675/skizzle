var Block_Wall=Block(0,true);
Block_Wall.type="Wall";
function WallDraw(arg){
	setColor(rgb(100,100,100));
	fillRect((arg[0]*BS)-player.x+(WW/2),(arg[1]*BS)-player.y+(WH/2),BS,BS);
}
function WallDrawOver(arg){
	
}
