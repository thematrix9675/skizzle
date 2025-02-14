function Block(id,solid){
	var b={};
	b.solid = solid;
	b.type = "Block";
	BlockList[id] = b;
	return b;
}
var BlockList=[];
var BS=1000;
function BlockDraw(gc){}
function BlockDrawOver(gc){}
