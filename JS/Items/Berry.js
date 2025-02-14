var Item_Berry=Item(5);
Item_Berry.type="Berry";
function BerryDraw(arg){
	setColor("red");
	fillCircle(arg[0]+16,arg[1]+16,16,16);
}
function BerryUse(stack){
	player.hunger+=10;
	player.hp++;
	if(player.hp>player.upgrades[1])
		player.hp=player.upgrades[1];
	if(player.hunger>10000){
		player.hunger=10000;
		stack[1]--;
	}
}
