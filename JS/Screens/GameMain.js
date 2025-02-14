function GameMain(){
	var s=Screen();
	s.type="GameMain";
	screen=s;
	return s;
}
function GameMainDraw(){
	setColor("white");
	fillRect(0,0,WW,WH);
	for(var x=0;x<map.length;x++)
		for(var y=0;y<map[x].length;y++)
			ObjFn(BlockList[map[x][y]],"Draw",[x,y]);
	for(var i=0;i<SpriteList.length;i++)
		ObjFn(SpriteList[i],"Draw",SpriteList[i]);
	for(var x=0;x<map.length;x++)
		for(var y=0;y<map[x].length;y++)
			ObjFn(BlockList[map[x][y]],"DrawOver",[x,y]);
	drawPlayerStats();

}
function GameMainTimer(){
	for(var i=0;i<SpriteList.length;i++)
		ObjFn(SpriteList[i],"Timer",SpriteList[i]);
	WorldTime++;
	if(WorldTime>10000)
		WorldTime=0;
}
function GameMainMouseEvent(){
	if(mouseDown||player.autofire){
		for(var i=0;i<player.bullets.length;i++){
			if(!player.bullets[i].fire){
				ObjFn(player.bullets[i],"Fire",[player.bullets[i],{x:mouse[0]+player.x-(WW/2),y:mouse[1]+player.y-(WH/2)}]);
				break;
			}
		}
	}
}
function GameMainKeyEvent(){
	if(keydown("Escape")) GamePause();
	if(keyDown.a&&!BlockList[map[Math.floor((player.x-player.upgrades[0])/BS)][Math.floor(player.y/BS)]].solid){
		player.x-=player.upgrades[0];
		player.hunger--;
		player.warmth=Math.min(player.warmth+1,10000);
	}
	if(keyDown.w&&!BlockList[map[Math.floor((player.x)/BS)][Math.floor((player.y-player.upgrades[0])/BS)]].solid){
		player.y-=player.upgrades[0];
		player.hunger--;
		player.warmth=Math.min(player.warmth+1,10000);
	}
	if(keyDown.s&&!BlockList[map[Math.floor((player.x)/BS)][Math.floor((player.y+player.upgrades[0])/BS)]].solid){
		player.y+=player.upgrades[0];
		player.hunger--;
		player.warmth=Math.min(player.warmth+1,10000);
	}
	if(keyDown.d&&!BlockList[map[Math.floor((player.x+player.upgrades[0])/BS)][Math.floor(player.y/BS)]].solid){
		player.x+=player.upgrades[0];
		player.hunger--;
		player.warmth=Math.min(player.warmth+1,10000);
	}
	if(keydown("e")){
		player.autofire=!player.autofire;
	}
	for(var i=0;i<10;i++){
		if(keydown(""+i))
			playerUpgrade(i);
	}
	if(keydown("q",5)){
		GameInventory();
	}
	if(keyDown.Q){
		cheat++;
	}
	if(keydown("Enter")){
		GameCraftSel();
	}
	if(cheat>100&&keyDown.P){
		player.kills++;
	}
	if(keyDown["r"]){
		for(var i=0;i<SpriteList.length;i++){
			var b=SpriteList[i];
			var bot=player;
			if(Math.sqrt(Math.pow(b.x-bot.x,2)+Math.pow(b.y-bot.y,2))<40){
				ObjFn(SpriteList[i],"Use",SpriteList[i]);
			}
		}
		ObjFn(player.inventory[player.selSlot][0],"Use",player.inventory[player.selSlot]);
	}
	if(keydown("z")&&player.selSlot>0){
		player.selSlot--;
	}
	if(keydown("x")&&player.selSlot<9){
		player.selSlot++;
	}
}
var screen;
