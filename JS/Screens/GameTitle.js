function GameTitle(){
	var s=Screen();
	s.type="Title";
	screen=s;
	return s;
}
function TitleDraw(){
	setColor(rgb(225,225,255));
	fillRect(0,0,WW,WH);
	var button=[[WW/2,WH/2,80,20,"Play"],[WW/2,WH/2+30,80,20,"Controls"],[WW/2,WH/2+60,80,20,"RESET SAVE"],];
	for(var i=0;i<3;i++){
		setColor(rgb(200,200,200));
		if(mouseOver(button[i])) setColor(rgb(250,225,225));
		fillRect(button[i][0],button[i][1],button[i][2],button[i][3]);
		setColor("black");
		drawString(button[i][4],button[i][0]+10,button[i][1]+10)
	}
	drawString("Skizzle",WW/2,WH/2-20);
}
function TitleMouseEvent(){
	var button=[[WW/2,WH/2,100,20],[WW/2,WH/2+30,80,20],[WW/2,WH/2+60,80,20],];
	if(mouseDown){
		if(mouseOver(button[0]))GameMain();
		if(mouseOver(button[2]))GameReset();
		if(mouseOver(button[1])&&delay%9==1)GameControls();

	}
}
function TitleTimer(){}
function TitleKeyEvent(){}
GameTitle();
