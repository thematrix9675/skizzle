function Turret(s){
	var t=Sprite(s.x,s.y);
	t.type="ITurret";
	t.team=s.team;
	t.upgrades=[0,1000,0,3,20,3,3,0,0,0];
	t.range=50;
	t.bullets=[];
	for(var i=0;i<player.upgrades[6];i++)
		t.bullets[i]=Bullet(t);
	t.reload=0;
	t.alive=true;
	Bots[0][Bots[0].length]=t;
	return t;
}
function ITurretTimer(s){
	if(s.alive){
		var bots=Bots[s.team=="blue"?1:0];
		for(var i=0;i<bots.length;i++){
			var b=bots[i];
			if(inRect(b,[s.x-WW/2,s.y-WH/2,WW,WH])){
				for(var j=0;j<s.bullets.length;j++){
					if(s.reload>20-s.upgrades[8]&&!s.bullets[j].fire){
						ObjFn(s.bullets[j],"Fire",[s.bullets[j],b]);
						s.reload=0;
						console.log("turret Fire");
						return;
					}
				}
			}
		}
		s.reload++;
	}
}
function ITurretKill(){
	player.kills++;
}
function ITurretUse(t){
//	t.alive=false;
}
function ITurretRespawn(t){
	t.alive=false;
}
function ITurretDraw(t){
	if(t.alive){
		setColor("brown");
		fillCircle(t.x-player.x+WW/2+16,t.y-player.y+WH/2+16,16);
		setColor("grey");
		fillCircle(t.x-player.x+WW/2+16,t.y-player.y+WH/2+16,10);
	}
}