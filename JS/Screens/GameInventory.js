function GameInventory(){
	var s=Screen();
	s.type="Inventory";
	screen=s;
	console.log("inv");
	return s;
}
function InventoryDraw(){
	setColor("white");
	fillRect(0,0,WW,WH);
	for(var i=0;i<36;i++){
		var y=Math.floor(i/9);
		var x=i%9;
		setColor("black");
		drawRect(x*36+10,y*36+10,36,36);
		ObjFn(player.inventory[i][0],"Draw",[x*36+10,y*36+10]);
		setColor(rgb(100,100,100));
		if(player.inventory[i][1]>0)
			drawString(player.inventory[i][1],x*36+15,y*36+36);
	}
	for(var i=0;i<36;i++){
		var y=Math.floor(i/9);
		var x=i%9;
		if(mouseOver([x*36+10,y*36+10,36,36])&&player.inventory[i][1]>0){
			setColor("white");
			fillRect(mouse[0],mouse[1],100,20);
			setColor("black");
			drawRect(mouse[0],mouse[1],100,20);
			drawString(player.inventory[i][0].type,mouse[0],mouse[1]+10);
		}
	}
}
function InventoryTimer(){}
function InventoryKeyEvent(){
	if(keyDown.q){
		GameMain();
	}
}
var selSlot;
function InventoryMouseEvent(){
	if(mouseDown){
		for(var i=0;i<36;i++){
			var y=Math.floor(i/9);
			var x=i%9;
			if(mouseOver(x*36+10,y*36+10,36,36)){
				if(selSlot){
					swapSlot(i);
				}else{
					selSlot=i;
				}
			}
		}
	}
}
