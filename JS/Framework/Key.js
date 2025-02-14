var keyDown={};
document.addEventListener("keyup",function(e){
	keyDown[e.key]=false;
	//e.preventDefault();
},true);
document.addEventListener("keydown",function(e){
	keyDown[e.key]=true;
	console.log(e.key);
	//console.log(e.keyCode);
	//e.preventDefault();
},true);
var delay=1;
function keydown(k,s){
	s=s||3;
	return keyDown[k]&&delay%s==1;
}
setInterval(function(){
	delay++;
},10);
