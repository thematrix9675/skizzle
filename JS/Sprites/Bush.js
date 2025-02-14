function Bush(){
	var t=Sprite(0,0);
	randomSpawn(t);
	t.type="Bush";
	return t;
}
function BushDraw(s){
	setColor("green");
	fillCircle(s.x-player.x+(WW/2),s.y-player.y+(WH/2),10);
	setColor("red");
	fillCircle(s.x-player.x+(WW/2)-5,s.y-player.y+(WH/2)-5,2);
	fillCircle(s.x-player.x+(WW/2)-5,s.y-player.y+(WH/2)+5,2);
	fillCircle(s.x-player.x+(WW/2)+5,s.y-player.y+(WH/2)-5,2);
	fillCircle(s.x-player.x+(WW/2)+5,s.y-player.y+(WH/2)+5,2);
}
function BushUse(){
	addItem([Item_Berry,1]);
}
function BushTimer(){}
for(var i=0;i<100;i++)
	Bush();
