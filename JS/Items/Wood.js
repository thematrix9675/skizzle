var Item_Wood=Item(4,undefined,20);
Item_Wood.type="Wood";
function WoodDraw(arg){
	setColor("brown");
	fillCircle(arg[0]+16,arg[1]+16,16,16);
}
function WoodUse(stack){}
