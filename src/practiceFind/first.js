var users =[
    { name : "太郎"},
    { name : "次郎", id : 1},
    { name : "三郎"},
    { name : "次郎", id : 2}
];

var user;

users.find(function(user){
    return user.name === "次郎";
});

// for (var i = 0; i < users.length; i++){
//     if (users[i].name === "次郎"){
//         user = users[i];
//         break;
//     };
// };

// console.log(user);