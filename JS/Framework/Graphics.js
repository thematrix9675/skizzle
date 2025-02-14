var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var WW=innerWidth-5,WH=innerHeight-5;
canvas.width=WW;
canvas.height=WH;
function setColor(color){
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
}
function fillRect(x,y,w,h){
    ctx.fillRect(x,y,w,h);
}
function drawRect(x,y,w,h){
    ctx.strokeRect(x,y,w,h);
}
function drawString(s,x,y){
    ctx.fillText(s,x,y);
}
function rgb(r,g,b){
    return "rgb("+r+","+g+","+b+")";
}
function rgba(r,g,b,a){
    return "rgba("+r+","+g+","+b+","+a+")";
}
function fillArc(x,y,w,h,s,e){
    ctx.ellipse(x,y,w,h,0,s,e,true);
}
var circle =[];
function fillCircle(x,y,r){
    if(!circle[r]){
        circle[r]=[];
        for(var i =-r;i<r;i++){
            circle[r][i]=[];
            for(var j =-r;j<r;j++){
                if(Math.sqrt(Math.pow(i,2)+Math.pow(j,2))<=r){
                    circle[r][i][j]=true;
                }else{
                    circle[r][i][j]=false;
                }
            }
        }
    }
    for(var i =-r;i<r;i+=3){
        for(var j =-r;j<r;j+=3){
                if(circle[r][i][j]){
                    fillRect(x+i,y+j,3,3);
                }
        }
    }
    //fillRect(x-r,y-r,r*2,r*2);
}
function drawLine(x1,y1,x2,y2){

}
function setPen(style,size){

}
function setFont(font,style,size){

}
function getStringWidth(s){

}
function getStringHeight(s){

}
var gc={setColorRGB:function(r,g,b){
        setColor(rgb(r,g,b));
    },
    setColor:setColor,
    fillRect:fillRect,
    fillArc:fillArc,
    fillCircle:fillCircle,
    rgb:rgb,
    rgba:rgba,
    drawRect:drawRect,
    drawString:drawString,
    drawLine:drawLine,
    setPen:setPen,
    setFont:setFont,
    getStringWidth:getStringWidth,
    getStringHeight:getStringHeight
};
