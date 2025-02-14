var Item_Turret=Item(13);
Item_Turret.type="Turret";
function TurretDraw(arg){
	setColor("brown");
	fillCircle(arg[0]+16,arg[1]+16,16);
	setColor("grey");
	fillCircle(arg[0]+16,arg[1]+16,10);
}
function TurretUse(stack){
	Turret(player);
	stack[1]--;
}
Recipe([Item_Turret,1],[[Item_Stone,50],[Item_Wood,100]]);