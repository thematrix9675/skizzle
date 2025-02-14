var Block_Blue=Block(4,false);
Block_Blue.type="Blue";
function BlueDraw(arg){
	setColor("blue");
	fillRect((arg[0]*BS)-player.x+(WW/2),(arg[1]*BS)-player.y+(WH/2),BS,BS);
}
function BlueDrawOver(arg){}