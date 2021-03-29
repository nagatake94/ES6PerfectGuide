const points = [
    [4,5],
    [10,1],
    [0,40]
];


// [
//     {x: 4, y:5},
//     {x: 10, y:1},
//     {x: 0, y:40},
// ]

// points.map(point => {
//     const x  = point[0];
//     const y = point[1];
// })

// points.map(point => {
//     const [x,y]  = point;
// })

// points.map(([x,y]) => {
//   return { x: x, y:y};
// })

points.map(([x,y]) => {
    return { x, y };
  })