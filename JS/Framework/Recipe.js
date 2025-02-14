function Recipe(product,ing){
	var r={};
	r.product=product;
	r.ing=ing;
	r.type = "Recipe";
	RecipeList[RecipeList.length]=r;
	return r;
}
var RecipeList=[];
function RecipeCraft(r){
	for(var i = 0;i<r.ing.length;i++)
		if(!removeItem(r.ing[i]))
			return;
	addItem(r.product);
}