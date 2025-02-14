var Item_TeleportPad=Item(7);
Item_TeleportPad.type="TeleportPad";
function TeleportPadDraw(arg){
	setColor("grey");
	fillCircle(arg[0]+16,arg[1]+16,16);
	setColor("purple");
	fillCircle(arg[0]+16,arg[1]+16,8);
}
function TeleportPadUse(stack){
	if(!(BlockAt(convertMouse()).solid)){
		TeleportPad(convertMouse());
		stack[1]--;
	}
}
Recipe([Item_TeleportPad,1],[[Item_Stone,10],[Item_Wood,30]]);