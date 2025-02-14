var Item_Water=Item(6);
Item_Water.type="Water";
function WaterDraw(arg){
	setColor("blue");
	fillCircle(arg[0]+16,arg[1]+16,16,16);
}
function WaterUse(stack){
	player.thurst+=10;
	stack[1]--;
	if(player.thurst>10000)
		player.thurst=10000;
}
