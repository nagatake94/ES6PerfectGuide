function User(id = generateId()){
    this.id = id;
}

function generateId(){
    return Math.random() * 999;
}

// function createAdminUser(user){
//     user.admin = true;

//     return user;
// }

// function createAdminUser(user = new User(generateId())){
//     user.admin = true;

//     return user;
// }

function createAdminUser(user = new User()){
    user.admin = true;

    return user;
}


createAdminUser();