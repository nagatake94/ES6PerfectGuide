var products = [
    { name: "きゅうり", type:"野菜" },
    { name: "バナナ", type:"果物" },
    { name: "セロリ", type:"野菜" },
    { name: "オレンジ", type:"果物" }
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++){
    if (products[i].type === "果物"){
        filteredProducts.push(products[i]);
    };
};


//console.log(filteredProducts);

products.filter(function(product){
    return product.type === "果物";
});