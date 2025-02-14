var CButtons;
function GameCraftSel(){
	var s=Screen();
	s.type="CraftSel";
	screen=s;
	CButtons=[];
	for(var i=0;i<RecipeList.length;i++)
		CButtons[CButtons.length]=[10,i*20+20,100,20,RecipeList[i]];
	console.log(CButtons);
	return s;
}
function CraftSelDraw(){
	setColor(rgb(225,225,255));
	fillRect(0,0,WW,WH);
	for(var i=0;i<CButtons.length;i++){
		setColor(rgb(200,200,200));
		if(mouseOver(CButtons[i][0],CButtons[i][1],CButtons[i][2],CButtons[i][3]))
			setColor(rgb(255,225,225));
		fillRect(CButtons[i][0],CButtons[i][1],CButtons[i][2],CButtons[i][3]);
		setColor("black");
		drawString(CButtons[i][4].product[0].type,CButtons[i][0],CButtons[i][1]+10);
	}
}
function CraftSelMouseEvent(){
	for(var i=0;i<CButtons.length;i++)
		if(mouseDown&&mouseOver(CButtons[i][0],CButtons[i][1],CButtons[i][2],CButtons[i][3]))
			GameCraft(CButtons[i][4])&&console.log("Craft");
}
function CraftSelKeyEvent(){
	if(keydown("Escape"))GameMain();
}
function CraftSelTimer(){}