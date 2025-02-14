player=Sprite(35*BS+10,2*BS+10);
player.type="Player";
player.team="blue";
player.upgrades=Upgrade();
if(__Debug){
	player.upgrades[2]=50;
	player.upgrades[0]=50;
	player.upgrades[6]=350;
}
player.reload=0;
player.hunger=10000;
player.hp=100;
player.thurst=10000;
player.warmth=5000;
player.kills=2;
player.totalKills=0;
var upgraded="";
var WorldTime=Math.floor((Math.random()*10000)+.5);
player.bullets=[];
for(var i=0;i<player.upgrades[6];i++){
	player.bullets[i]=Bullet(player);
}
player.autofire=false;
player.range=20;
player.inventory=[];
for(var i=0;i<36;i++)
	player.inventory[i]=[Item_none,0];
player.selSlot=0;
var cheat=1;
function PlayerUse(){}
function PlayerDraw(){
	setColor(rgb(0,0,100));
	fillRect((WW/2),(WH/2),10,10);
}
function PlayerTimer(){
	player.reload++;
	if(player.hp<player.upgrades[1]){
		player.hp=Math.min(player.hp+player.upgrades[2],player.upgrades[1]);
	}
	addBullet(player);
	player.thurst-=0.1;
	if(!isDay()){
		player.warmth--;
	}else{
		player.warmth=Math.min(player.warmth+1,5000);
	}
	for(var i=0;i<36;i++){
		if(player.inventory[i][1]<=0){
			player.inventory[i]=[Item_none,0];
		}
	}
	if(player.warmth<0){
		player.hp--;
		player.warmth=0;
	}
	if(player.thurst<0){
		player.hp--;
		player.thurst=0;
	}
	if(player.hunger<0){
		player.hp--;
		player.hunger=0;
	}
	for(var i=0;i<Bots[1].length;i++){
		BotBodyDammage(player,Bots[1][i])
	}
}
function spawnPlayer(s){
	if(s.team=="blue"){
		if(Math.floor(Math.random()+.5)){
			s.x=2*BS+10;
			s.y=25*BS+10;
		}else{
			s.x=35*BS+10;
			s.y=2*BS+10;
		}
	}else{
		if(Math.floor(Math.random()+.5)){
			s.x=2*BS+10;
			s.y=2*BS+10;
		}else{
			s.x=35*BS+10;
			s.y=25*BS+10;
		}
	}
}
spawnPlayer(player);
function drawPlayerStats(){
	setColor(gadgeRiskC(player.hp));
	drawString("Health:"+player.hp,10,10);
	setColor(gadgeRiskC(player.hunger));
	drawString("Hunger:"+player.hunger,10,20);
	setColor(gadgeRiskC(player.thurst));
	drawString("Thurst:"+player.thurst,10,30);
	setColor(gadgeRiskC(player.warmth));
	drawString("Warmth:"+player.warmth,10,40);
	setColor("black");
	drawString("Time:"+WorldTime,10,50);
	drawString("Upgraded:"+upgraded,10,WH-260);
	drawString("Upgrade Points:"+player.kills,10,WH-210);
	drawString("SelSlot:"+player.selSlot,10,WH-45);
	drawString("Kills:"+player.totalKills,10,WH-95);
	if(__Debug){
		var close=900000;
		for(var i=0;i<Bots[1].length;i++){
			var dst=Math.sqrt(Math.pow(Bots[1][i].x-player.x,2)+Math.pow(Bots[1][i].y-player.y,2));
			if(dst<close){
				close=dst;
			}
		}
		drawString("Closest:"+close,10,WH-85);
		drawString("Fired Bullets:"+firedBullets,10,WH-65);
		drawString("Pos: X:"+player.x+",Y:"+player.y,10,WH-75);
	}
	for(var i=0;i<10;i++){
		if(player.kills>0){
			setColor("black");
			drawString(i+":"+UpgradeMeaning[i]+":"+player.upgrades[i],10,WH-200+i*10);

		}
	}
	setColor("white");
	fillRect(10,WH-40,36*10,36);
	for(var i=0;i<10;i++){
		if(player.selSlot==i){
			setColor("purple");
			fillRect(10+i*36,WH-40,36,36);
		}
		setColor("black");
		drawRect(10+i*36,WH-40,36,36);
		ObjFn(player.inventory[i][0],"Draw",[10+i*36,WH-40]);
		setColor(rgb(100,100,100));
		if(player.inventory[i][1]>0)
			drawString(player.inventory[i][1],15+i*36,WH-10);
	}
}
function gadgeRiskC(v){
	if(v>100) return "blue";
	if(v<0) return "black";
	if(v<25) return "red";
	if(v<50) return "orange";
	if(v<75) return "yellow";
	if(v<=100) return "green";
}
function playerUpgrade(n){
	if(player.kills>0){
		upgraded=UpgradeMeaning[n];
		player.upgrades[n]++;
		player.kills--;
	}
}
function PlayerKill(){
	player.kills++;
	player.totalKills++;
}
function PlayerRespawn(){
	player.hp=100;
	player.hunger=100;
	player.thurst=100;
	player.warmth=100;
	player.upgrades=Upgrade();
	spawnPlayer(player);
}

