function TeleportPad(m){
	var tp=Sprite(player.x,player.y);
	tp.type="TPPad";
	tp.tppoint=m;
	return tp;
}
function TPPadDraw(t){
	setColor("grey");
	fillCircle(t.x-player.x+WW/2+16,t.y-player.y+WH/2+16,16);
	setColor("purple");
	fillCircle(t.x-player.x+WW/2+16,t.y-player.y+WH/2+16,8);
}
function TPPadTimer(t){
	for(var i=0;i<Bots[0].length;i++){
		if(Distance(t,Bots[0][i])<=30){
			Bots[0][i].x=t.tppoint.x;
			Bots[0][i].y=t.tppoint.y;
		}
	}
	for(var i=0;i<Bots[1].length;i++){
		if(Distance(t,Bots[1][i])<=30){
			Bots[1][i].x=t.tppoint.x;
			Bots[1][i].y=t.tppoint.y;
		}
	}
}
function TPPadUse(){}