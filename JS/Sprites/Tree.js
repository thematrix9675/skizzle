function Tree(){
	var t=Sprite(0,0);
	randomSpawn(t);
	t.type="Tree";
	return t;
}
function TreeDraw(s){
	setColor("green");
	fillCircle(s.x-player.x+(WW/2),s.y-player.y+(WH/2),10);
}
function TreeUse(){
	var s=Math.floor((Math.random()*100)+.5);
	if(s<=10){
		addItem([Item_Leaf,1]);
	}else if(s<=45){
		addItem([Item_Wood,1]);
	}else if(s<=99){
		addItem([Item_Stick,1]);
	}else{
		addItem([Item_Sappling,1]);
	}
}
function TreeTimer(){}
for(var i=0;i<100;i++)
	Tree();
