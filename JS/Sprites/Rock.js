function Rock(){
	var t=Sprite(0,0);
	randomSpawn(t);
	t.type="Rock";
	t.size=11;
	return t;
}
function RockDraw(s){
	setColor("grey");
	fillCircle(s.x-player.x+(WW/2),s.y-player.y+(WH/2),s.size);
}
function RockUse(r){
	r.size--;
	if(r.size==0){
		randomSpawn(r);
		r.size=11;
	}else{
		var s=Math.floor((Math.random()*100)+.5);
		if(s<=10){
			addItem([Item_Salt,1]);
		}else if(s<=45){
			addItem([Item_Coal,1]);
		}else if(s<=99){
			addItem([Item_Stone,1]);
		}else{
			addItem([Item_Gold,1]);
		}
	}
}
function RockTimer(){}
for(var i=0;i<500;i++)
	Rock();
