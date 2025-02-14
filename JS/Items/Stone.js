var Item_Stone=Item(9);
Item_Stone.type="Stone";
function StoneDraw(arg){
	setColor("grey");
	fillCircle(arg[0]+16,arg[1]+16,16,16);
}
function StoneUse(stack){}
