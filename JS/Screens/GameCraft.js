function GameCraft(r){
	var s=Screen();
	s.type="Craft";
	screen=s;
	s.recipe=r;
	console.log(r)
	return s;
}
function CraftDraw(){
	setColor(rgb(225,225,255));
	fillRect(0,0,WW,WH);
	for(var i=0;i<screen.recipe.ing.length;i++){
		setColor("red");
		if(hasAmountOfItems(screen.recipe.ing[i])) setColor("green");
		drawString(screen.recipe.ing[i][1]+" "+screen.recipe.ing[i][0].type,10,i*10+10);
	}
	setColor("black");
	drawString(screen.recipe.product[1]+" "+screen.recipe.product[0].type,100,100);
}
function CraftKeyEvent(){
	if(keydown("Enter"))
		ObjFn(screen.recipe,"Craft",screen.recipe);
	if(keydown("Escape"))
		GameCraftSel();
}
function CraftTimer(){}
function CraftMouseEvent(){}