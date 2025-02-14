function Sprite(x,y){
	var s={};
	s.x = x;
	s.y = y;
	s.type = "Sprite";
	SpriteList[SpriteList.length]=s;
	return s;
}
var SpriteList=[];
function SpriteDraw(gc){}
function SpriteTimer(){}
function SpriteUse(s){}
