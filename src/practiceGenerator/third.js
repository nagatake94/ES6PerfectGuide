function* shopping(){
    //歩道

    //歩道を歩いてお店に行く

    //お店に到着したのでお金を持ってお店に入る
    const stuffFromStore = yield "お金";

    //コインランドリーに到着したので、服を持って入る
    const cleanClothes = yield "汚れた服";

    //家に歩いて帰る
    return [stuffFromStore, cleanClothes];
    
}

//お店関連の世界
const gen = shopping();
//家から歩道に出る
// gen.next(); {"done": false}
//お店で買い物をして日用品を持って歩道に出る
gen.next("日用品"); 
gen.next("綺麗な服");