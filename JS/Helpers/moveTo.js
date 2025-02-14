function MoveTo(s,t,sp){
	var x=t.x-s.x;
	var y=t.y-s.y;
	var sc=sp/Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
	s.vX=x*sc;
	s.vY=y*sc;
}
function newUpdatedPos(b){
	var c={x:b.x,y:b.y};
	if(b.dir==1){
		c.x-=b.upgrades[0];
	}else if(b.dir==2){
		c.x+=b.upgrades[0];
	}else if(b.dir==3){
		c.y-=b.upgrades[0];
	}else if(b.dir==4){
		c.y+=b.upgrades[0];
	}else{
		b.dir=1;
	}
	return c;
}
function chooseDir(b){
	if(b.dir<3){
		b.dir=Math.floor(Math.random()+.5)+3;
	}else{
		b.dir=Math.floor(Math.random()+.5)+1;
	}
}
function oppDir(b){
	if(b.dir==1) b.dir=2;
	if(b.dir==2) b.dir=1;
	if(b.dir==3) b.dir=4;
	if(b.dir==4) b.dir=3;
}
function addBullet(b){
	if(b.bullets.length<b.upgrades[6])
		b.bullets[b.bullets.length]=Bullet(b);
}
function addItem(x){
	console.log(x[0].ID);
	for(var i=0;i<36;i++){
		if(player.inventory[i][0].ID==x[0].ID){
			player.inventory[i][1]+=x[1];
			return;
		}else if(player.inventory[i][0]==Item_none){
			player.inventory[i]=[x[0],x[1]];
			return;
		}
	}
}
function isDay(){
	return WorldTime<5000;
}
function randomSpawn(t){
	t.x=Math.floor((Math.random()*BS*(map.length-2))+.5)+BS;
	t.y=Math.floor((Math.random()*BS*(map[0].length-2))+.5)+BS;
}
function swapSlot(s){
	var j=player.inventory[s];
	player.inventory[s]=player.inventory[selSlot];
	player.inventory[selSlot]=j;
	selSlot=undefined;
}
function displayHpBar(s){
	var hp=Math.min(s.hp,101);
	setColor(gadgeRiskC(hp));
	fillRect(s.x-player.x+WW/2-5,s.y-player.y+WH/2-5,hp/5,3);
}
function drawMiniMap(a,b){
	for(var x=0;x<38;x++){
		for(var y=0;y<28;y++){
			if(map[x][y]==0) setColor("grey");
			if(map[x][y]==1) setColor("white");
			if(map[x][y]==2) setColor("black");
			if(map[x][y]==3) setColor("red");
			if(map[x][y]==4) setColor("blue");
			fillRect(a+x*10,b+y*10,10,10)
		}
	}
	for(var i=0;i<MaxBots;i++){
		setColor("cyan");
		fillRect(a+(Math.floor(Bots[0][i].x/BS)*10)+3,b+(Math.floor(Bots[0][i].y/BS)*10)+3,3,3);
		setColor("magenta");
		fillRect(a+(Math.floor(Bots[1][i].x/BS)*10)+3,b+(Math.floor(Bots[1][i].y/BS)*10)+3,3,3);
	}
	setColor("limegreen");
	fillRect(a+(Math.floor(player.x/BS)*10)+3,b+(Math.floor(player.y/BS)*10)+3,3,3);
}
function hasAmountOfItems(stack){
	var amm=0;
	for(var i=0;i<36;i++)
		if(stack[0].ID==player.inventory[i][0].ID)
			amm+=player.inventory[i][1];
	return amm>=stack[1];
}
function removeItem(stack){
	console.log(stack,"RemoveItem");
	if(!hasAmountOfItems(stack)) return console.log("error")&&false;
	for(var i=0;i<36;i++){
		if(player.inventory[i][0].ID==stack[0].ID){
			if(player.inventory[i][1]>=stack[1]){
				console.log(player.inventory[i],stack);
				player.inventory[i][1]-=stack[1];
				return true;
			//}else{
			//	stack[1]-=player.inventory[i][1];
			//	player.inventory[i]=[Item_none,0];
			}
		}
	}
}
function convertMouse(){
	return {x:mouse[0]+player.x-(WW/2),y:mouse[1]+player.y-(WH/2)};
}
function Distance(t,p){
	return Math.sqrt(Math.pow(t.x-p.x,2)+Math.pow(t.y-p.y,2))
}
