var Item_Gold=Item(12);
Item_Gold.type="Gold";
function GoldDraw(arg){
	setColor("gold");
	fillCircle(arg[0]+16,arg[1]+16,16,16);
}
function GoldUse(stack){
	player.kills++;
	stack[1]--;
}
