onload=function(){
    var inv=JSON.parse(localStorage.inventory);
    var up=JSON.parse(localStorage.upgrades);
    if(inv){
        player.inventory=inv;
    }
    if(up){
        player.upgrades=up;
    }
    var kills=localStorage.kills;
    if(kills){
        player.kills=kills;
    }
    var botbu=JSON.parse(localStorage.botsblue);
    var botru=JSON.parse(localStorage.botsred);
    for(var i=0;i<botbu.length;i++){
        Bots[0][i].upgrades=botbu[i];
    }
    for(var i=0;i<botru.length;i++){
        Bots[1][i].upgrades=botru[i];
    }
}
onunload=function(){
    localStorage.inventory=JSON.stringify(player.inventory);
    localStorage.upgrades=JSON.stringify(player.upgrades);
    localStorage.kills=player.kills;
    var botbu=[];
    for(var i=0;i<Bots[0].length;i++){
        botbu[i]=Bots[0][i].upgrades;
    }
    var botru=[];
    for(var i=0;i<Bots[1].length;i++){
        botru[i]=Bots[1][i].upgrades;
    }
    localStorage.botsred=JSON.stringify(botru)
    localStorage.botsblue=JSON.stringify(botbu)
}
resetSave=function(){
    player.inventory=[];
    for(var i=0;i<36;i++)
        player.inventory[i]=[Item_none,0];
    player.selSlot=0;
    player.kills=2;
    player.upgrades=Upgrade();
    for(var i=0;i<Bots[0].length;i++){
        Bots[0][i].upgrades=Upgrade();;
    }
    for(var i=0;i<Bots[1].length;i++){
        Bots[1][i].upgrades=Upgrade();;
    }
    location.reload()
}