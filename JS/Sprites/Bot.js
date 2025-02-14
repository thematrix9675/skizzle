function Bot(team){
	var b=Sprite(0,0);
	b.team=team;
	b.type="Bot";
	spawnPlayer(b);
	b.hp=100;
	b.upgrades=Upgrade();
	b.dir=1;
	b.bullets=[];
	b.range=10;
	for(var i=0;i<3;i++){
		b.bullets[i]=Bullet(b);
	}
	b.reload=0;
	b.flee=Math.random()*4;
	return b;
}
function BotTimer(b){
	ObjFn(b,"Move",b);
	if(b.hp<b.upgrades[1]){
		b.hp=Math.min(b.hp+b.upgrades[2],b.upgrades[1]);
	}
	ObjFn(b,"Fight",b);
	addBullet(b);
	b.reload++;
}
function BotMove(b){
	var nb=newUpdatedPos(b);
	if(BlockAt(nb).solid){
		chooseDir(b);
	}else{
		b.x=nb.x;
		b.y=nb.y;
	}
}
function BotFight(b){
	var bots=Bots["blue"==b.team?1:0];
	for(var i=0;i<bots.length;i++){
		var bot=bots[i];
		if((BlockAt(bot)==Block_Cave&&Math.floor(bot.x/BS)==Math.floor(b.x/BS)&&Math.floor(bot.y/BS)==Math.floor(b.y/BS))||BlockAt(bot)!=Block_Cave){
			if(inRect([bots[i].x,bots[i].y],[b.x-(WW/2),b.y-(WH/2),WW,WH])){
				if((Math.random()*10)>9){
					for(var j=0;j<b.bullets.length;j++){
						if(!b.bullets[j].fire&&b.reload>20-b.upgrades[8]){
							ObjFn(b.bullets[j],"Fire",[b.bullets[j],bot]);
							break;
						}
					}
				}
			}
		}
		BotBodyDammage(b,bot);
	}
}
function BotDraw(b){
	setColor(rgb(b.team=="red"?100:0,0,b.team=="blue"?100:0));
	fillRect(b.x-player.x+WW/2,b.y-player.y+WH/2,10,10);
	displayHpBar(b);
	if(__Debug) drawString(""+b.hp,b.x-player.x+WW/2,b.y-player.y+WH/2+10);
}
function BotRespawn(b){
	b.upgrades=Upgrade();
	b.hp=100;
	spawnPlayer(b);
}
function BotKill(b){
	var s=Math.floor((Math.random()*9+.5));
	upgraded=UpgradeMeaning[s];
	b.upgrades[s]++;
}
function BotBodyDammage(b,bot){
	if(Math.sqrt(Math.pow(b.x-bot.x,2)+Math.pow(b.y-bot.y,2))<20){
		bot.hp-=b.upgrades[9]-b.upgrades[7];
	}
}
function BotUse(b){}
var Bots=[[player],[]];
var MaxBots=100;
for(var i=1;i<MaxBots;i++)
	Bots[0][i]=Bot("blue");
for(var i=0;i<MaxBots*5;i++)
	Bots[1][i]=Bot("red");
