function validateShoppingList(...items){
    if (items.indexOf("牛乳") < 0){
        return [ "牛乳", ...items];
    }

    return items;
}


validateShoppingList("オレンジ" , "パン", "牛乳");