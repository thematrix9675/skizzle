function Lake(){
	var t=Sprite(0,0);
	randomSpawn(t);
	t.type="Lake";
	return t;
}
function LakeDraw(s){
	setColor(rgb(0,0,200));
	fillCircle(s.x-player.x+(WW/2),s.y-player.y+(WH/2),10);
}
function LakeUse(r){
	addItem([Item_Water,1]);
}
function LakeTimer(){}
for(var i=0;i<100;i++)
	Lake();
