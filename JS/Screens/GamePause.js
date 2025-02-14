function GamePause(){
	var s=Screen();
	s.type="Pause";
	screen=s;
	return s;
}
function PauseDraw(){
	setColor(rgb(225,225,255));
	fillRect(0,0,WW,WH);
	var button=[[WW/2,20,100,20,"Resume"],[WW/2,50,80,20,"Quit"]];
	for(var i=0;i<2;i++){
		setColor(rgb(200,200,200));
		if(mouseOver(button[i])) setColor(rgb(250,225,225));
		fillRect(button[i][0],button[i][1],button[i][2],button[i][3]);
		setColor("black");
		drawString(button[i][4],button[i][0]+20,button[i][1]+10)
	}
	drawString("Paused",WW/2,10);
	drawMiniMap(10,10);
}
function PauseMouseEvent(){
	var button=[[WW/2,20,100,20,"Resume"],[WW/2,50,80,20,"Quit"]];
	if(mouseDown){
		if(mouseOver(button[0])) GameMain();
		if(mouseOver(button[1])) GameTitle();
	}
}
function PauseTimer(){}
function PauseKeyEvent(){}
