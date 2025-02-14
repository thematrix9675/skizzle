function Bullet(s){
	var b=Sprite(s.x,s.y);
	b.team=s.team;
	b.s=s;
	b.fire=false;
	b.bounces=0;
	b.type="Bullet";
	return b;
}
firedBullets=0;
function BulletDraw(b){
	if(b.fire){
		setColor(rgb(b.team=="red"?100:0,0,b.team=="blue"?100:0));
		fillRect(b.x-player.x+(WW/2),b.y-player.y+(WH/2),3,3);
	}
}
function BulletFire(arg){
	if(arg[0].s.reload>=20-arg[0].s.upgrades[8]){
		MoveTo(arg[0],arg[1],arg[0].s.upgrades[4]);
		arg[0].s.reload=0;
		arg[0].fire=true;
		arg[0].bounces=0;
		firedBullets++;
	}
}
function BulletTimer(b){
	if(!b.fire){
		b.x=b.s.x+3;
		b.y=b.s.y+3;
	}else{
		b.x+=b.vX;
		b.y+=b.vY;
		var bots = Bots[b.team=="blue"?1:0];
		for(var i=0;i<bots.length;i++){
			var s=bots[i];
			if(Math.sqrt(Math.pow(s.x-b.x,2)+Math.pow(s.y-b.y,2))<=b.s.range){
				s.hp-=b.s.upgrades[3];
				b.fire=false;
				firedBullets--;
				if(s.hp<=0){
					ObjFn(s,"Respawn",s);
					ObjFn(b.s,"Kill",b.s);
				}
			}
		}
		if(BlockAt(b).solid){
			BounceOff(b);
			b.bounces++;
			if(b.bounces>=b.s.upgrades[5]){
				b.fire=false;
				firedBullets--;
				b.x=b.s.x+3;
				b.y=b.s.y+3;
			}
		}
	}
}
function BulletUse(){}
