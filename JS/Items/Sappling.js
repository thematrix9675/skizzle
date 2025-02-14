var Item_Sappling=Item(1);
Item_Sappling.type="Sappling";
function SapplingDraw(arg){
	setColor("limegreen");
	fillCircle(arg[0]+16,arg[1]+16,16,16);
	setColor("brown");
	fillRect(arg[0]+16,arg[1]+16,1,16);
}
function SapplingUse(stack){
	var s=Tree();
	s.x=player.x;
	s.y=player.y;
	stack[1]--;
}
