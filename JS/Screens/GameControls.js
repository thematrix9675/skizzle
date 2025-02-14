function GameControls(){
	var s=Screen();
	s.type="Controls";
	screen=s;
	return s;
}
function ControlsTimer(){}
function ControlsDraw(){
	setColor("white");
	fillRect(0,0,WW,WH);
	setColor("black");
	for(var i=0;i<controls.length;i++)
		drawString(controls[i],5,i*10,10);
	setColor(rgb(200,200,200));
	if(mouseOver(WW-50,WH-30,40,20)) setColor(rgb(255,225,225));
	fillRect(WW-50,WH-30,40,20);
	setColor("black");
	drawString("Back",WW-40,WH-20);
}
function ControlsMouseEvent(){
	if(mouseDown&&mouseOver(WW-50,WH-30,40,20))GameTitle();
}
function ControlsKeyEvent(){}
var controls=[
	"AWSD:Movement",
	"E:AutoFire",
	"Q:Inventory",
	"R:Use Item",
	"0-9:Upgrade",
	"Click:Fire",
	"X:HotBar Forward",
	"Z:HotBar Backward",
	"Escape:Pause",
	"Enter:Crafting"
];
