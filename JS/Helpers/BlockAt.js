function BlockAt(s){
	if(s.x==NaN||s.y==NaN){
		respawnPlayer(s);
		s.vX=0;
		s.vY=0;
		s.fired=false;
		console.log("Glitched Bullets");
	}
	return BlockList[map[Math.floor(s.x/BS)][Math.floor(s.y/BS)]]
}
