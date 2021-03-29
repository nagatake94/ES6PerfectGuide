const companies = [
    "Google",
    "Facebook",
    "Uber",
    "Apple"
];

//const firstCompany = companies[0];

//const [name, name2, name3, name4] = companies;

//name; Google
//name2; Facebook
//name3; Uber
//name4; Apple
//name5; undefined


const [name, ...rest] = companies;

//name; Google
//rest; ["Facebook", "Uber", "Apple"]