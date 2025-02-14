function draw(){
	ObjFn(screen,"Draw",screen)
	ObjFn(screen,"Timer",screen)
	ObjFn(screen,"MouseEvent",screen)
	ObjFn(screen,"KeyEvent",screen)
}
var __debug=false;
var __Debug=!true;
var __slow=true;
setInterval(draw,__debug?1000:__slow?20:10);
