// var images = [
//     { height: 10, width: 30 },
//     { height: 20, width: 90 },
//     { height: 54, width: 32 }
//   ];
//   var areas = [];

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image,index){
    areas[index] = image.height*image.width;
});