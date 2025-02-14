var mouseDown=false;
var mouse=[0,0];
var x=0;
var evn;
document.addEventListener("mousemove",function(e){
	mouse=[e.x,e.y];
	e.preventDefault();
},true);
document.addEventListener("mousedown",function(e){
	mouseDown=true;
	e.preventDefault();
},true);
document.addEventListener("mouseup",function(e){
	mouseDown=false;
	e.preventDefault();
},true);
function inRange(i,s,b){
	return i&&i>=s&&i<=b;
}
function inRect(p,r){
	return inRange(p[0]||p.x,(r[0]||r.x),(r[0]||r.x)+(r[2]||r.w))&&inRange(p[1]||p.y,(r[1]||r.y),(r[1]||r.y)+(r[3]||r.h))
}
function mouseOver(x,y,w,h){
	return inRect(mouse,typeof x=='object'&&x||[x,y,w,h]);
}
