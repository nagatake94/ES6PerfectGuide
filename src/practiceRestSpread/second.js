const defaultColors = ["赤","緑"];
const userFavoriteColors = ["オレンジ","黄"];
const summerColors = ["青","エメラルド"];


//defaultColors.concat(userFavoriteColors);

/**concatと同様な結果が得られる */
//[...defaultColors, ...userFavoriteColors];


[ "茶", ...summerColors,  "紫", ...defaultColors, ...userFavoriteColors];