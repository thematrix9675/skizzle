var Item_Stick=Item(2,undefined,9);
Item_Stick.type="Stick";
function StickDraw(arg){
	setColor("brown");
	for(var i=0;i<32;i++){
		fillRect(arg[0]+i,arg[1]+i,1,1);
	}
}
function StickUse(){}
