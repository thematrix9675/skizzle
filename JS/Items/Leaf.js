var Item_Leaf=Item(3,undefined,3);
Item_Leaf.type="Leaf";
function LeafDraw(arg){
	setColor("green");
	fillCircle(arg[0]+16,arg[1]+16,16,16);
	setColor("limegreen");
	fillRect(arg[0]+16,arg[1]+16,1,16);
}
function LeafUse(stack){
	player.hp++;
	stack[1]--;
	if(player.hp>player.upgrades[1])
		player.hp=player.upgrades[1];
}
