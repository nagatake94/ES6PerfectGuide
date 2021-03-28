// function createBookShop(inventory){
//     return {
        
//         /**ES6からはプロパティ名と値名が同じ場合は以下のように記載可能
//          * ES6以前はinventory: inventory, */
//         inventory,
//         inventoryValue: function(){
//             return  this.inventory.reduce(
//                 (total, book) => total + book.price, 0);
//         },
//         priceForTitle: function (title){
//             return this.inventory.find(book => book.title === title).price;
//         }
//     };
// }


function createBookShop(inventory){
    return {
        
        inventory,
        /**ES6からfunctionを省略して記載可能 */
        inventoryValue(){
            return  this.inventory.reduce(
                (total, book) => total + book.price, 0);
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;
        }
    };
}


const inventory = [
    { title: "ハリーポッター", price: 1000 },
    { title: "JavaScript入門", price: 1500 }

];

const bookShop = createBookShop(inventory);