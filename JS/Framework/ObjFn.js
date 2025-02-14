var argArray=[];
function ObjFn(obj,funName,argarr){
		argArray = argarr;
		eval(obj.type+funName+"(argArray);");
}
