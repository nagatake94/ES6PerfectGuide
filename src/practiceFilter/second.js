var products = [
    { name: "きゅうり", type:"野菜", quantity: 0, price: 100 },
    { name: "バナナ", type:"果物", quantity: 20, price: 20 },
    { name: "セロリ", type:"野菜", quantity: 5, price: 120 },
    { name: "オレンジ", type:"果物", quantity: 15, price: 40 }
];

/**
 * 種類が野菜で、量が0個より多くて、値段が110より大きい
 */

 products.map(function(product){
     return product.type === "野菜" 
        && product.quantity > 0 
        && product.price > 110;
 });

