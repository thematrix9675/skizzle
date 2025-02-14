function Item(id,food,fuel){
	var it={};
	it.ID = id;
	it.food = typeof food == "number" && food || false;
	it.fuel = typeof fuel == "number" && fuel || false;
	it.type = "Item";
	ItemList[id] = it;
	return it;
}
var ItemList = [];
function ItemDraw(gc){}
function ItemUse(stack){}
var Item_none = Item(0);
