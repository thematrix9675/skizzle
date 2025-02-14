var Item_Campfire=Item(8);
Item_Campfire.type="Campfire";
function CampfireDraw(arg){
	setColor("yellow");
	fillCircle(arg[0]+16,arg[1]+16,16);
	setColor("orange");
	fillCircle(arg[0]+16,arg[1]+16,13);
	setColor("red");
	fillCircle(arg[0]+16,arg[1]+16,10);
}
function CampfireUse(stack){
	Campfire(player.x,player.y);
	stack[1]--;
}
Recipe([Item_Campfire,1],[[Item_Coal,10],[Item_Stone,10],[Item_Wood,20],[Item_Stick,40]]);