function Campfire(x,y){
	var s=Sprite(x,y);
	s.type="Fire";
	s.lit=true;
	s.tmr=0;
	return s;
}
function FireUse(s){
	if(!s.lit){
		s.lit=true;
	}
}
function FireTimer(s){
	if(s.tmr>=1000){
		 s.lit=false;
		 s.tmr=0;
	}else{
		s.tmr++;
	}
	if(player.warmth<5000&&s.lit){
		console.log("fire");
		var d=Math.sqrt(Math.pow(s.x-player.x,2)+Math.pow(s.y-player.y,2));
		if(d<10){
			player.hp--;
		}else if(d<100){
			player.warmth+=10;
		}
	}
}
function FireDraw(s){
	if(s.lit){
		setColor("yellow");
		fillCircle(s.x-player.x+(WW/2)+16,s.y-player.y+(WH/2)+16,16);
		setColor("orange");
		fillCircle(s.x-player.x+(WW/2)+16,s.y-player.y+(WH/2)+16,13);
		setColor("red");
		fillCircle(s.x-player.x+(WW/2)+16,s.y-player.y+(WH/2)+16,10);
	}else{
		setColor("brown");
		fillCircle(s.x-player.x+(WW/2)+16,s.y-player.y+(WH/2)+16,16);
	}
}