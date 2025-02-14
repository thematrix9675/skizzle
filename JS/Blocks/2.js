var Block_Cave=Block(2,false);
Block_Cave.type="Cave";
function CaveDraw(arg){
	setColor(rgb(200,200,200));
	fillRect((arg[0]*BS)-player.x+(WW/2),(arg[1]*BS)-player.y+(WH/2),BS,BS);
}
function CaveDrawOver(arg){
	if(Math.floor(player.x/BS)!=arg[0]||Math.floor(player.y/BS)!=arg[1]){
		setColor("black");
		fillRect((arg[0]*BS)-player.x+(WW/2),(arg[1]*BS)-player.y+(WH/2),BS,BS);
	}
}
