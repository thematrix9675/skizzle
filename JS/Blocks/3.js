var Block_Red=Block(3,false);
Block_Red.type="Red";
function RedDraw(arg){
	setColor("red");
	fillRect((arg[0]*BS)-player.x+(WW/2),(arg[1]*BS)-player.y+(WH/2),BS,BS);
}
function RedDrawOver(arg){}